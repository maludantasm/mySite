import '../mldm_cv.pdf'

export const SaveFile = () => {
    fetch('https://cors-anywhere.herokuapp.com/' + './mldm_cv.pdf', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/pdf',
        },
    })
    
    .then((response) => response.blob())
    .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(
            new Blob([blob]),
        );

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
        'download',
        `mldm_cv.pdf`,
        );

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
    });
}

export default SaveFile