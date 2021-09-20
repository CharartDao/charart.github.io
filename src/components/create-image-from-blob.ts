export const createImageFromBlob = (image: Blob): Promise<string | ArrayBuffer | null> => {
  const reader = new FileReader();
  return new Promise((resolve) => {
    reader.addEventListener(
      'load',
      () => {
        resolve(reader.result);
      },
      false
    );
    if (image) {
      reader.readAsDataURL(image);
    }
  });
};

export const dataURItoBlob = (dataURI: string): Blob => {
  // convert base64/URLEncoded data component to raw binary data held in a string
  let byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0) byteString = atob(dataURI.split(',')[1]);
  else byteString = unescape(dataURI.split(',')[1]);

  // separate out the mime component
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to a typed array
  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ia], { type: mimeString });
};
