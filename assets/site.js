// The only values to edit. Leave empty to show the "coming soon" text.
const SITE_CONFIG = {
  contactEmail: 'cartfriendapp@gmail.com',
  ownerName: '',             // your full name as shown in the stores
};

// CartFriend logo, embedded so the site has no binary files.
const LOGO = 'data:image/webp;base64,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';

(function () {
  const lang = document.documentElement.lang || 'en';
  const t = {
    en: { soon: 'a contact email address is coming soon', owner: 'an individual developer' },
    lt: { soon: 'kontaktinis el. pašto adresas bus paskelbtas netrukus', owner: 'individualus kūrėjas' },
  }[lang] || {};
  document.querySelectorAll('[data-email]').forEach(function (el) {
    if (SITE_CONFIG.contactEmail) {
      const a = document.createElement('a');
      a.href = 'mailto:' + SITE_CONFIG.contactEmail;
      a.textContent = SITE_CONFIG.contactEmail;
      el.replaceChildren(a);
    } else {
      el.textContent = t.soon;
    }
  });
  document.querySelectorAll('img[data-logo]').forEach(function (img) { img.src = LOGO; });
  const icon = document.createElement('link');
  icon.rel = 'icon';
  icon.href = LOGO;
  document.head.appendChild(icon);
  document.querySelectorAll('[data-owner]').forEach(function (el) {
    el.textContent = SITE_CONFIG.ownerName || t.owner;
  });
})();
