import { toast } from "react-toastify";

const getStoredReadList = () => {
  //read-list
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    //already exist.do not add it.
    toast("Alread in read list");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
    toast("Added to read list.");
  }
};

// check : local storage a ki ache?jodi wish list thake tahole sheta diba nahole empty array diba.then setak javaScrip object a convert kore pathao.
const getStoredWishList = () => {
  const storedListStr = localStorage.getItem("wish-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storeList = getStoredWishList(); // get the data from local storage
  if (storeList.includes(id)) {
    // then check shetar moddhe user click kora book ta wishList a ache ki na?
    alert(id, "alread in wish list."); // jodi thake tahole akta alert dao
  } else {
    storeList.push(id); // na thaakle push kore dao wish list a
    const storeListStr = JSON.stringify(storeList); // then abar stringify kore localStorage a set kore dao.
    localStorage.setItem("wish-list", storeListStr);
  }
};

export {
  addToStoredReadList,
  getStoredReadList,
  getStoredWishList,
  addToStoredWishList,
};
