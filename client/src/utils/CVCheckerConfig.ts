// Transform blob with Base64

export async function blobToBase64(blob: Blob) {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  return new Promise(resolve => {
    reader.onloadend = () => {
      resolve(reader.result);
    };
  });
};

// Call Sovren API to parse the CV

export async function parseResume (parsedBlob: any)  {
  const string: any = await parsedBlob;
  const newString = string.replace('data:application/pdf;base64,', '');
  const data = {
    "DocumentAsBase64String": newString,
    "DocumentLastModified": new Date(Date.now()).toISOString().substring(0, 10),
  }
  try {
    const res = await fetch(`https://eu-rest.resumeparsing.com/v10/parser/resume`, {
      method: 'POST',
      // @ts-ignore
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Sovren-AccountId": process.env.REACT_APP_SOVREN_ACCOUNT_KEY,
        "Sovren-ServiceKey": process.env.REACT_APP_SOVREN_SERVICE_KEY
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    return console.error(err);
  }
}