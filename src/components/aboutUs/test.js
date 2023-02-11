const testElement = document.getElementById("button");

const call = async (url, params, key) => {
  try {
    const response = await fetch(`${url}${params}`, {
      method: "GET",
      headers: {
        Authorization: `${key}`,
      },
      mode: "no-cors",
    });
    let data = await response.json();
    testElement.innerHTML = data.businesses[0].name;
  } catch (err) {
    console.log(err);
  }
};

document.addEventListener("click", function () {
  call(url, params, key);
});
