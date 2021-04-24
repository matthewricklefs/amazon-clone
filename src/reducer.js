export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
  basket: [
    {
      id: "3254254345",
      title: "New Apple iPad Pro",
      price: 598.99,
      rating: 4,
      image:
        "https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY436_FMwebp_QL65_.jpg",
    },
    {
      id: "3254254345",
      title: "New Apple iPad Pro",
      price: 598.99,
      rating: 4,
      image:
        "https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY436_FMwebp_QL65_.jpg",
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item to Basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // Logic for removing item from Basket

      // we cloned the basket
      let newBasket = [...state.basket];

      // we check to see if the product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exists in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as it is not in the basket`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;

/*

*/
