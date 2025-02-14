function successCallback(result) {
  console.log("오디오 파일 주소: " + result);
}

function failureCallback(error) {
  console.log("재생 실패:  " + error);
}

// createAudioFileAsync(audioSettings, successCallback, failureCallback);
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);

const promise = createAudioFileAsync(audioSettings);
promise.then(successCallback, failureCallback);
