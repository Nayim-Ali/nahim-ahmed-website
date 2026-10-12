/**
 * Booking form behaviour: validation, states, submission.
 *
 * To connect to a backend, change `form.provider` and `form.endpoint` in src/content/site.ts.
 * The only function that talks to a server is `send()` below — swap it if you need to.
 */

type Provider = 'none' | 'formspree' | 'netlify' | 'custom';

const form = document.querySelector<HTMLFormElement>('[data-booking-form]');

if (form) {
  const provider = (form.dataset.provider || 'none') as Provider;
  const endpoint = form.dataset.endpoint || '';
  const submitBtn = form.querySelector<HTMLButtonElement>('[data-submit]');
  const submitLabel = form.querySelector<HTMLElement>('[data-submit-label]');
  const errorBanner = form.querySelector<HTMLElement>('[data-form-error]');
  const success = document.querySelector<HTMLElement>('[data-form-success]');
  const sendingText = 'Sending…';
  const idleText = submitLabel?.textContent || 'Send enquiry';

  const messages: Record<string, string> = {
    name: 'Please tell me your name.',
    email: 'Please enter an email address I can reply to.',
    email_format: "That email address doesn't look right.",
    event_type: 'Please choose a type of event.',
    topic: 'Tell me a little about what you would like Nahim to cover.',
  };

  const setFieldError = (el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, msg: string) => {
    const field = el.closest('.field');
    const err = document.getElementById(`${el.id}-err`);
    field?.classList.toggle('is-invalid', !!msg);
    el.setAttribute('aria-invalid', msg ? 'true' : 'false');
    if (err) {
      err.textContent = msg;
      err.hidden = !msg;
      if (msg) el.setAttribute('aria-describedby', err.id);
      else el.removeAttribute('aria-describedby');
    }
  };

  const validateField = (el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): boolean => {
    if (!el.required) return true;
    const v = el.value.trim();
    if (!v) { setFieldError(el, messages[el.name] || 'This field is required.'); return false; }
    if (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { setFieldError(el, messages.email_format); return false; }
    setFieldError(el, '');
    return true;
  };

  const required = Array.from(form.querySelectorAll<HTMLInputElement>('[required]'));
  required.forEach((el) => {
    el.addEventListener('blur', () => validateField(el));
    el.addEventListener('input', () => { if (el.getAttribute('aria-invalid') === 'true') validateField(el); });
  });

  /** The one place that talks to the outside world. */
  async function send(data: Record<string, string>): Promise<void> {
    if (data._honey) return; // bot

    if (provider === 'none') {
      console.warn('[booking form] No provider configured — set form.provider in src/content/site.ts');
      await new Promise((r) => setTimeout(r, 700));
      return;
    }

    if (provider === 'netlify') {
      const body = new URLSearchParams({ 'form-name': 'booking', ...data }).toString();
      const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
      if (!res.ok) throw new Error(`Netlify responded ${res.status}`);
      return;
    }

    // formspree + custom: POST JSON
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`Endpoint responded ${res.status}`);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (errorBanner) errorBanner.hidden = true;

    const results = required.map(validateField);
    if (results.includes(false)) {
      const first = required.find((el) => el.getAttribute('aria-invalid') === 'true');
      first?.focus();
      return;
    }

    const data: Record<string, string> = {};
    new FormData(form).forEach((v, k) => { data[k] = String(v); });
    data._page = location.href;

    form.classList.add('is-sending');
    if (submitBtn) submitBtn.disabled = true;
    if (submitLabel) submitLabel.textContent = sendingText;

    try {
      await send(data);
      form.hidden = true;
      if (success) { success.hidden = false; success.focus(); success.scrollIntoView({ block: 'center', behavior: 'smooth' }); }
    } catch (err) {
      console.error(err);
      if (errorBanner) { errorBanner.hidden = false; errorBanner.scrollIntoView({ block: 'center', behavior: 'smooth' }); }
    } finally {
      form.classList.remove('is-sending');
      if (submitBtn) submitBtn.disabled = false;
      if (submitLabel) submitLabel.textContent = idleText;
    }
  });
}
