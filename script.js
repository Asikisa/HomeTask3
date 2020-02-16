init = () => {
    return [{
        name: 'Помідори',
        quantity: 3,
        bought: false
    }, {
        name: 'Печиво',
        quantity: 3,
        bought: false
    }, {
        name: 'Сир',
        quantity: 3,
        bought: false
    }];
};


addItem = (arr, name) => {
    name = name.trim();
    arr.push({name, quantity: 1, bought: false});
    renderAllItems();
};

removeItem = (arr, id) => {
    arr.splice(id, 1);
    console.log(1);
    renderAllItems();
};

changeItem = (arr, id, property, value) => {

    arr[id][property] = value;
    console.log(arr[id][property]);
    renderAllItems();
};

renderItem = (item, i) => {

    let row = document.querySelector('#row').content.querySelector('.bl-row').cloneNode(true);
    let circle = document.querySelector('#circle').content.querySelector('.label').cloneNode(true);
    let plus = row.querySelector('.bl-plus');
    let minus = row.querySelector('.bl-minus');
    let remove = row.querySelector('.bl-cancel');
    let buy = row.querySelector('.bl-buy');
    let add = document.querySelector('#dodatu');
    let input = document.querySelector('#text');
    let quantityField = row.querySelector('.bl-label');
    let productName = row.querySelector('.bl-product');
    let fieldCircle = circle.querySelector('.count');
    let nameCircle = circle.querySelector('.title');


    plus.onclick = () => {
        changeItem(array, i, 'number', item.quantity++);
    };
    minus.onclick = () => {
        if (item.quantity > 1) changeItem(array, i, 'number', item.quantity--);
    };
    remove.onclick = () => {
        removeItem(array, i);
    };
    buy.onclick = () => {
        changeItem(array, i, 'bought', !item.bought);
    };
    add.onclick = () => {
        var name = input.value.trim();
        if (name == null || name.length === 0)
            return;
        addItem(array, name);
        input.value = "";
    };

    let rowList = document.querySelector('.bl-list');
    let circleNotBoughtList = document.querySelector('.stats-not-bought');
    let circleBoughtList = document.querySelector('.stats-bought');

    quantityField.innerText = item.quantity;
    productName.innerText = item.name;
    fieldCircle.innerText = item.quantity;
    nameCircle.innerText = item.name;
    rowList.insertAdjacentElement("beforeend", row);

    if (!item.bought) {
        circleNotBoughtList.insertAdjacentElement("beforeend", circle);
        $(row).removeClass('bought');
    } else {
        circleBoughtList.insertAdjacentElement("beforeend", circle);
        $(row).addClass('bought');
    }

};

resetAllItems = () => {
    let itemsList = document.querySelectorAll('.bl-row');
    itemsList.forEach((element) => {
        if ($(element).hasClass('bl-row')) {
            element.parentNode.removeChild(element);
        }
    });

    let circleNotBoughtList = document.querySelectorAll('.stats-label');
    circleNotBoughtList.forEach(el => el.parentNode.removeChild(el));
};

let array = init();

renderAllItems = () => {
    let currentCount = 0;
    resetAllItems();
    array.forEach(item => renderItem(item, currentCount++));
};

renderAllItems();


