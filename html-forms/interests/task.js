let cb = document.querySelectorAll(".interest__check");

for (let index = 0; index < cb.length; index++) {
    const element = cb[index];
    console.log(element.checked);

    element.onclick = function () {
        if (element.checked == "false") {
            element.checked = true;
        } else if (element.checked == "true") {
            element.checked = false;
        }
        let bool = element.checked;

        if (element.closest("ul").closest("li") != null) {
            let mas = element.closest("ul").closest("li").childNodes;
            let ul = element.closest("ul").childNodes;
            console.log(ul.length);
            for (let index = 0; index < mas.length; index++) {
                const element = mas[index];

                if (element.localName == "label" && bool) {
                    element.childNodes[1].checked = true;
                } else if (element.localName == "label" && !bool) {
                    if (ul.length > 3) {
                        for (let index = 0; index < ul.length; index++) {
                            const element = ul[index];
                            console.log(element);
                            if(element.localName == "li"){
                                if(element.childNodes[1].checked == "false"){
                                    element.childNodes[1].checked = false;
                                }
                                
                            }
                        }
                    } else {
                        element.childNodes[1].checked = true;
                    }

                }
            }
        } else if (element.closest("ul").closest("li") == null) {
            let mas = element.parentElement.parentElement.childNodes;
            for (let index = 0; index < mas.length; index++) {
                const element = mas[index];

                if (element.localName == "ul") {
                    console.log("element.localName");
                    console.log(element.childNodes);
                    for (let index = 0; index < element.childNodes.length; index++) {
                        const e = element.childNodes[index];
                        if (e.localName == "li" && bool) {
                            e.childNodes[1].childNodes[1].checked = true;
                        } else if (e.localName == "li" && !bool) {
                            e.childNodes[1].childNodes[1].checked = false;
                        }
                    }
                }
            }
        }
    }
}