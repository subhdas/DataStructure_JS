(() => {
  // let btn = document.createElement("button");
  // document.append(btn);

  let sidebarshow = false;

  document.body.innerHTML +=
    "<button class = 'btnsidebar'>Sidebar Toggle</button>";

  document.querySelector(".btnsidebar").addEventListener("click", (e) => {
    e.stopPropagation();

    console.log("sidebar clicked ", e);
    const sidebar = document.querySelector(".sidebar");
    sidebarshow = !sidebarshow;
    if (sidebarshow) sidebar.style.display = "flex";
    else sidebar.style.display = "none";
  });

  document.querySelector("html").addEventListener("click", (e) => {
    console.log("body clicked");
    if (sidebarshow) {
      document.querySelector(".sidebar").style.display = "none";
      sidebarshow = !sidebarshow;
    }
  });
})();
