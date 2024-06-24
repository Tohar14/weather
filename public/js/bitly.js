document.addEventListener('DOMContentLoaded', () => {
    // Create Short Link
    const createShortLinkForm = document.getElementById('createShortLinkForm');
    createShortLinkForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const longLink = document.getElementById('longLink').value;

        try {
            const response = await fetch('/bitly/shorten', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ longLink }),
            });

            const shortLink = await response.json(); // Expecting the short link as plain text
            if (response.ok) {
                const shortLinkUrl = `${window.location.origin}/${shortLink}`;
                document.getElementById('createResult').innerHTML = `Short link created: <a href="${shortLinkUrl}" target="_blank">${shortLinkUrl}</a>`;
            } else {
                document.getElementById('createResult').innerText = `Error: ${shortLink}`;
            }
        } catch (error) {
            document.getElementById('createResult').innerText = `Error: ${error.message}`;
        }
    });

    // Get Link By Short URL
    const getLinkByShortUrlForm = document.getElementById('getLinkByShortUrlForm');
    getLinkByShortUrlForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const shortLink = document.getElementById('shortLinkSearch').value;

        try {
            const response = await fetch(`/bitly/short/${shortLink}`);
            const result = await response.json();
            if (response.ok) {
                document.getElementById('searchResult').innerHTML = `Long link: <a href="${result.LongLink}" target="_blank">${result.LongLink}</a>`;
            } else {
                document.getElementById('searchResult').innerText = `Error: ${result.message}`;
            }
        } catch (error) {
            document.getElementById('searchResult').innerText = `Error: ${error.message}`;
        }
    });

    // Get All Links
    const getAllLinksButton = document.getElementById('getAllLinksButton');
    getAllLinksButton.addEventListener('click', async () => {
        try {
            const response = await fetch('/bitly/links');
            const links = await response.json();
            if (response.ok) {
                const linksList = links.map(link => {
                    const shortLinkUrl = `${window.location.origin}/${link.ShortLink}`;
                    return `Short: <a href="${shortLinkUrl}" target="_blank">${shortLinkUrl}</a> - Long: <a href="${link.LongLink}" target="_blank">${link.LongLink}</a>`;
                }).join('<br>');
                document.getElementById('allLinksResult').innerHTML = linksList;
            } else {
                document.getElementById('allLinksResult').innerText = `Error: ${links.message}`;
            }
        } catch (error) {
            document.getElementById('allLinksResult').innerText = `Error: ${error.message}`;
        }
    });
});
