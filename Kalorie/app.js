// storage controller
const StorageCtrl = (function () {
    //public methods
    return {
        storeItems: function (item) {
            let items;
            //check items in local storage
            if (localStorage.getItem('items') === null) {
                items = [];
                //push new item
                items.push(item);
                //set ls
                localStorage.setItem('items', JSON.stringify(items));
            } else {
                items = JSON.parse(localStorage.getItem('items'));
                //push new item to array
                items.push(item);

                //re set localstorage
                localStorage.setItem('items', JSON.stringify(items));
            }

        },
        getItemsFromStorage: function () {
            let items;
            //check items in local storage
            if (localStorage.getItem('items') === null) {
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem('items'));
            }
            return items;
        },
        updateItemStorage: function (updatedItem) {
            let items = JSON.parse(localStorage.getItem('items'));
            items.forEach(function (item, index) {
                if (updatedItem.id === item.id) {
                    items.splice(index, 1, updatedItem);
                }
            });
            //re set localstorage
            localStorage.setItem('items', JSON.stringify(items));
        },
        deleteItemFromStorage: function (id) {
            let items = JSON.parse(localStorage.getItem('items'));
            items.forEach(function (item, index) {
                if (id === item.id) {
                    items.splice(index, 1);
                }
            });
            //re set localstorage
            localStorage.setItem('items', JSON.stringify(items));
        },
        clearItemsFromStorage: function(){
            localStorage.removeItem('items');
        }


    }
})();


// item controller

const ItemCtrl = (function () {
    // Item Constructor
    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data Structure / State
    const data = {
        items: StorageCtrl.getItemsFromStorage(),
        currentItem: null,
        totalCalories: 0
    }


    //Public methods
    return {
        addItem: function (name, calories) {
            let ID;
            //CreateID
            if (data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Calories to number
            calories = parseInt(calories);

            // Create new Item
            const newItem = new Item(ID, name, calories);

            //Add to items array
            data.items.push(newItem);

            return newItem;
        },
        getItems: function () {
            return data.items;
        },

        logData: function () {
            return data;
        },

        getTotalCalories: function () {
            let total = 0;

            data.items.forEach(item => {
                total += item.calories;
            });

            data.totalCalories = total;

            //return 
            return data.totalCalories;
        },
        getItemById: function (id) {
            let found = null;
            //loop through items
            data.items.forEach(item => {
                if (item.id === id) {
                    found = item;
                }
            });
            return found;
        },
        setCurrentItem: function (item) {
            data.currentItem = item;
        },
        getCurrentItem: function () {
            return data.currentItem;
        },
        updateItem: function (name, calories) {
            // calories to number
            calories = parseInt(calories);

            let found = null;

            data.items.forEach(item => {
                if (item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });
            return found;
        },
        deleteItem: function (id) {
            //Get ids
            const ids = data.items.map(item => {
                return item.id;
            });

            const index = ids.indexOf(id);

            data.items.splice(index, 1);
        },
        clearAllItems: function () {
            data.items = [];
        }
    }
})();

// UI controller

const UICtrl = (function () {

    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        listItems: '#item-list li',
        clearBtn: '.clear-btn'
    }


    //Public Methods
    return {
        populateItemList: function (items) {
            let html = '';

            items.forEach(item => {
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
            </li>`;
            });

            //insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getItemInput: function () {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value
            }
        },
        getSelectors: function () {
            return UISelectors;
        },
        addListItem: function (item) {
            //show the list
            document.querySelector(UISelectors.itemList).style.display = 'block';

            const li = document.createElement('li');
            li.className = 'collection-item';
            li.id = `item-${item.id}`;

            //addhtml
            li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;

            //insert
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
        },
        updateListItem: function (item) {
            let listItems = document.querySelectorAll(UISelectors.listItems);

            // Turn node list into array
            listItems = Array.from(listItems);

            listItems.forEach(function (listItem) {
                const itemId = listItem.getAttribute('id');

                if (itemId === `item-${item.id}`) {
                    document.querySelector(`#${itemId}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;
                }
            })
        },
        deleteListItem: function (id) {
            const itemId = `#item-${id}`;
            const item = document.querySelector(itemId);
            item.remove();
        },
        clearInput: function () {
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        addItemToForm: function () {
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },
        removeItems: function () {
            let listItems = document.querySelectorAll(UICtrl.listItems);

            listItems = Array.from(listItems);

            listItems.forEach(item => {
                item.remove();
            });
        },
        hideList: function () {
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },
        showTotalCalories: function (totalCalories) {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        clearEditState: function () {
            UICtrl.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },
        showEditState: function () {
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        }
    }
})();

// App Controller

const App = (function (ItemCtrl, StorageCtrl, UICtrl) {

    //loadEventListeners
    const loadEventListeners = function () {
        const UISelectors = UICtrl.getSelectors();

        //Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) {
                e.preventDefault();
                return false;
            }
        });

        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);


        document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);

        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
    }

    //add item submit

    const itemAddSubmit = function (e) {
        const input = UICtrl.getItemInput();
        if (input.name !== '' && input.calories !== '') {
            const newItem = ItemCtrl.addItem(input.name, input.calories);
            //add item to ui list
            UICtrl.addListItem(newItem);
            // get total calories
            const totalCalories = ItemCtrl.getTotalCalories();
            //add total cals to UI
            UICtrl.showTotalCalories(totalCalories);

            //store in local storage
            StorageCtrl.storeItems(newItem);

            //clear fields
            UICtrl.clearInput();
        }
        e.preventDefault();
    }

    const itemEditClick = function (e) {
        if (e.target.classList.contains('edit-item')) {
            // get list item id
            const listId = e.target.parentNode.parentNode.id;
            //split listId
            const listIdArr = listId.split('-');
            //get actual id 
            const id = parseInt(listIdArr[1]);

            //get item
            const itemToEdit = ItemCtrl.getItemById(id);

            ItemCtrl.setCurrentItem(itemToEdit);

            //Add item to form
            UICtrl.addItemToForm();
        }
        e.preventDefault();
    }

    const itemUpdateSubmit = function (e) {
        //get item input

        const input = UICtrl.getItemInput();

        const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

        UICtrl.updateListItem(updatedItem);

        // get total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        //add total cals to UI
        UICtrl.showTotalCalories(totalCalories);

        //update local storage
        StorageCtrl.updateItemStorage(updatedItem);

        UICtrl.clearEditState();

        e.preventDefault();
    }

    const itemDeleteSubmit = function (e) {
        const currentItem = ItemCtrl.getCurrentItem();

        ItemCtrl.deleteItem(currentItem.id);

        UICtrl.deleteListItem(currentItem.id);
        // get total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        //add total cals to UI
        UICtrl.showTotalCalories(totalCalories);

        StorageCtrl.deleteItemFromStorage(currentItem.id);

        UICtrl.clearEditState();

        e.preventDefault();
    }

    const clearAllItemsClick = function (e) {
        // Delete all items from data structure
        ItemCtrl.clearAllItems();
        // get total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        //add total cals to UI
        UICtrl.showTotalCalories(totalCalories);
        //clear items
        UICtrl.removeItems();
        //clearFromLocalStorage
        StorageCtrl.clearItemsFromStorage();
        //hide list
        UICtrl.hideList();
    }


    //Public Methods
    return {
        init: function () {
            //Clear edit state
            UICtrl.clearEditState();


            //fetch items for DS
            const items = ItemCtrl.getItems();

            //check if any items
            if (items.length === 0) {
                UICtrl.hideList();
            } else {
                //populate list with items.
                UICtrl.populateItemList(items);
            }

            // get total calories
            const totalCalories = ItemCtrl.getTotalCalories();
            //add total cals to UI
            UICtrl.showTotalCalories(totalCalories);

            loadEventListeners();
        }
    }
})(ItemCtrl, StorageCtrl, UICtrl);

App.init();