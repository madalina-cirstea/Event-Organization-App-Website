window.onload = function () {
    var data;
    var httpObj = new XMLHttpRequest();
    httpObj.open('GET', "themes.json", true);
    httpObj.send(null);

    httpObj.onreadystatechange = function () {
        if (httpObj.readyState == 4) {
            if (httpObj.status == 200) {
                data = JSON.parse(httpObj.responseText);
                gallery(data);
            }
            else { alert("error"); }
        }
    };

    let description1 = this.document.getElementById("description1");
    let description2 = this.document.getElementById("description2");
    let description3 = this.document.getElementById("description3");
    let description4 = this.document.getElementById("description4");

    let replaceImg1 = true;
    let replaceImg2 = true;
    let replaceImg3 = true;
    let replaceImg4 = true;


    description1.onclick = function () {
        let parentDiv = document.getElementById("profile1");
        if (replaceImg1) {
            let image = document.querySelector("#profile1 img");
            let text_description = document.createElement("p");
            text_description.textContent = "CEO - A chief executive officer (CEO) is the most senior corporate, executive, or administrative officer in charge of managing an organization – especially an independent legal entity such as a company or nonprofit institution. CEOs lead a range of organizations, including public and private corporations, non-profit organizations and even some government organizations.";
            text_description.setAttribute("id", "text_description_1")
            parentDiv.replaceChild(text_description, image);
        }
        else {
            let text_description = document.getElementById("text_description_1");
            let image = document.createElement("img");
            image.setAttribute("src", "./materials/blake-cheek-sQHbmNVqH0k-unsplash.jpg");
            image.setAttribute("alt", "ceo-img");
            parentDiv.replaceChild(image, text_description);
        }
        replaceImg1 = !replaceImg1;
    }

    description2.onclick = function () {
        let parentDiv = document.getElementById("profile2");
        if (replaceImg2) {
            let image = document.querySelector("#profile2 img");
            let text_description = document.createElement("p");
            text_description.textContent = "Assistant - A successful business consultant has first and foremost a broad knowledge of the many facets of business and market forces. The ideal candidate will also possess great problem-solving skills to provide solutions and recommendations that will increase profitability and efficiency.";
            text_description.setAttribute("id", "text_description_2")
            parentDiv.replaceChild(text_description, image);
        }
        else {
            let text_description = document.getElementById("text_description_2");
            let image = document.createElement("img");
            image.setAttribute("src", "./materials/eric-torres-3rZcm_ojP8Y-unsplash.jpg");
            image.setAttribute("alt", "assistant-img");
            parentDiv.replaceChild(image, text_description);
        }
        replaceImg2 = !replaceImg2;
    }

    description3.onclick = function () {
        let parentDiv = document.getElementById("profile3");
        if (replaceImg3) {
            let image = document.querySelector("#profile3 img");
            let text_description = document.createElement("p");
            text_description.textContent = "Web developer - Web developer responsibilities include building our website from concept all the way to completion from the bottom up, fashioning everything from the home page to site layout and function.";
            text_description.setAttribute("id", "text_description_3")
            parentDiv.replaceChild(text_description, image);
        }
        else {
            let text_description = document.getElementById("text_description_3");
            let image = document.createElement("img");
            image.setAttribute("src", "./materials/lucas-newton-A0M-ABJD8k0-unsplash.jpg");
            image.setAttribute("alt", "developer-img");
            parentDiv.replaceChild(image, text_description);
        }
        replaceImg3 = !replaceImg3;
    }

    description4.onclick = function () {
        let parentDiv = document.getElementById("profile4");
        if (replaceImg4) {
            let image = document.querySelector("#profile4 img");
            let text_description = document.createElement("p");
            text_description.textContent = "Manager - Managers ensure that their assigned department, store, or district is well staffed and provisioned, adheres to quality and service standards, increases revenue and market share, and helps the business accomplish its goals. They hire and train employees, help develop and implement business strategies, and perform a variety of other tasks to ensure the business is thriving.";
            text_description.setAttribute("id", "text_description_4")
            parentDiv.replaceChild(text_description, image);
        }
        else {
            let text_description = document.getElementById("text_description_4");
            let image = document.createElement("img");
            image.setAttribute("src", "./materials/anh-henry-nguyen-6Nn9TyNEiAs-unsplash.jpg");
            image.setAttribute("alt", "manager-img");
            parentDiv.replaceChild(image, text_description);
        }
        replaceImg4 = !replaceImg4;
    }
}

function gallery(data) {
    var menu_links = document.querySelectorAll("#theme_menu .button");
    var img_theme = document.getElementById("theme_picture");
    for (var i = 0; i < menu_links.length; i++) {
        let j = i;
        menu_links[j].onclick = function () {
            img_theme.src = data[j].picture.source;
        }
    }
}