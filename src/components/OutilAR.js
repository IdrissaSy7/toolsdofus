import React, { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

const AchatRevente = () => {
  const [items, setItems] = useLocalStorage("items", []);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [formattedPrice, setFormattedPrice] = useState("");
  const [formattedSellPrice, setFormattedSellPrice] = useState("");

  const addItem = () => {
    setItems((prevItems) => [...prevItems, { name, price, sellPrice }]);
    setName("");
    setPrice("");
    setSellPrice("");
  };

  const setItemSelled = (index, isSelled) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      if (updatedItems[index].isSelled) {
        updatedItems[index].isSelled = false;
      } else {
        updatedItems[index].isSelled = true;
      }
      return updatedItems;
    });
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const formatNumberWithSpaces = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handlePriceChange = (e) => {
    const value = e.target.value.replace(/[^\d\s]/g, "");
    const formattedValue = formatNumberWithSpaces(value.replace(/\s/g, ""));
    setFormattedPrice(formattedValue);
    setPrice(value.replace(/\s/g, ""));
  };

  const handlePriceChangeSell = (e) => {
    const value = e.target.value.replace(/[^\d\s]/g, "");
    const formattedValue = formatNumberWithSpaces(value.replace(/\s/g, ""));
    setFormattedSellPrice(formattedValue);
    setSellPrice(value.replace(/\s/g, ""));
  };

  return (
    <div>
      <div className="input">
        <div className="inputDiv">
          <label htmlFor="name">Nom de l'objet</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="name">Prix d'achat l'objet</label>
          <input
            type="text"
            value={formattedPrice}
            onChange={handlePriceChange}
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="name">Prix de vente de l'objet</label>
          <input
            type="text"
            value={formattedSellPrice}
            onChange={handlePriceChangeSell}
          />
        </div>

        <button onClick={addItem}>Ajouter</button>
      </div>

      <div className="tableau">
        <table>
          <thead>
            <tr>
              <th>Nom de l'objet</th>
              <th>Prix d'achat</th>
              <th>Prix de revente</th>
              <th>Taxe</th>
              <th>Bénéfice</th>
              <th>Supprimer</th>
              <th>Vendu</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item, index) => (
              <tr key={index} className={item.isSelled ? "item-vendu" : ""}>
                <td>{item.name}</td>
                <td>{formatNumberWithSpaces(item.price)}</td>
                <td>{formatNumberWithSpaces(item.sellPrice)}</td>
                <td>
                  {formatNumberWithSpaces((item.sellPrice * 0.02).toFixed(0))}
                </td>
                <td
                  className={`benefice ${
                    item.sellPrice - item.sellPrice * 0.02 - item.price <= 0
                      ? "negative"
                      : "positive"
                  }`}
                >
                  {formatNumberWithSpaces(
                    (
                      item.sellPrice -
                      item.sellPrice * 0.02 -
                      item.price
                    ).toFixed(0)
                  )}
                </td>

                <td>
                  <button
                    onClick={() => deleteItem(index)}
                    className="deleteItem"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
                <td
                  className="vendu"
                  onClick={() => setItemSelled(index, true)}
                >
                  <i className="fas fa-check"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AchatRevente;
