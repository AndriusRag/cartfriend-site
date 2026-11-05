# CartFriend site

Public pages required by Google Play and the App Store, served with GitHub Pages:

| Page | English | Lithuanian |
|---|---|---|
| Home | `/` | `/lt/` |
| Privacy policy | `/privacy.html` | `/lt/privacy.html` |
| Account deletion | `/delete-account.html` | `/lt/delete-account.html` |
| Support | `/support.html` | `/lt/support.html` |

Plain HTML/CSS, no build step. The contact email and owner name are set in one place:
`assets/site.js` → `SITE_CONFIG`. Until they are set, the pages say a contact email is coming soon.
The logo is embedded in `assets/site.js` as a data URI, so the repo has no binary files.

Keep the privacy policy in sync with the app when it starts collecting new data
(new fields, analytics, crash reporting, third-party SDKs) and update the "Last updated" date.
