import React, { useState, } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const ShoppingAssi = () => {
	// HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity
	const [items, setItems] = useState([]);
	const [inputValue, setInputValue] = useState();

	const handleAddButtonClick = () => {
		const newItem = {
			itemName: inputValue,
			quantity: 1,
			isCompelet: false
		}
		const newItems = [...items, newItem]
		setItems(newItems)
		setInputValue('')

	}


	setItems
	const toggleComplete = (index) => {
		const newItems = [...items];

		newItems[index].isCompelet = !newItems[index].isCompelet;

		setItems(newItems);
	};

	const handleQuantityIncrease = (index) => {
		const newItems = [...items];
		newItems[index].quantity++;
		setItems(newItems)
	}


	const handleQuantityDecrease = (index) => {
		const newItems = [...items];
		newItems[index].quantity--;
		setItems(newItems)
	}


	const handleDeleteItems = (index) => {
		const newItems = [...items];
		newItems.splice(index, 1);
		setItems(newItems);
	}

	const handleEditItems = (index) => {
		const newItems = [...items];
		const userEdit = prompt("Edit itme Name ", newItems[index].itemName);
		if (userEdit !== null && userEdit.trim() !== "")
			newItems[index].itemName = userEdit
		setItems(newItems);
	}

const totalQuantity = () => {
  return items.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);
};


	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input className='add-item-input' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Add an item...' />
					<FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()} />

				</div>
				<div className='item-list'>
					{items.map((items, index) => (
						<div className='item-container'>
							<div className='item-name' onClick={() => toggleComplete(index)}>
								{/* HINT: replace false with a boolean indicating the item has been completed or not */}
								{items.isCompelet ? (
									<>
										<FontAwesomeIcon icon={faCheckCircle} />
										<span className='completed'>{items.itemName}</span>
									</>
								) : (
									<>
										<FontAwesomeIcon icon={faCircle} />
										<span>{items.itemName}</span>
									</>
								)}

							</div>


							<button className='delete' onClick={() => handleDeleteItems(index)}>
								Remove
							</button>
							<div>
								<button className='edit' onClick={() => handleEditItems(index)}>
									Edit
								</button>
							</div>

							<div className='quantity'>
								<button>
									<FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)} />
								</button>
								<span> {items.quantity}</span>
								<button>
									<FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
								</button>
							</div>

						</div>
					))}
				</div>
				<div className='total'>Total items: {items.length}</div>
				 <div className='total-Items'>Total Quantity: {totalQuantity()}</div> 

			</div>
		</div>
	);
};

export default ShoppingAssi;
