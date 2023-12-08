const showDownload = (result) => {
    console.log("Download berhasil");
    console.log(`Hasil Download: ${result}`);
}

const download = (showDownload) => {
    return new Promise(function () {
        setTimeout(function () {
            showDownload("MicrosoftOffice-2021.exe");
        }, 3000);
    });
};

const main = async () => {
    console.log(await download(showDownload));
};

main();