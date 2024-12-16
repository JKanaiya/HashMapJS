import { LinkedList } from "./LinkedList.js";

const HashMapJS = function () {
  //  initialize the array length to 16
  let arrSize = 16;
  let arr = Array(arrSize).fill(null);

  let capacity = 0;
  let mod = 16;

  let lList = LinkedList();

  const set = function (key, value) {
    let tArr = entries();
    if (
      loadLevel() < tArr.length + 1 ||
      hash(key) < 0 ||
      hash(key) >= arr.length
    ) {
      clear();
      arrSize *= 2;
      mod *= 2;
      arr = Array(arrSize).fill(null);
      for (let entry of tArr) {
        set(entry[0].split(",")[0], entry[0].split(",")[1]);
      }
      set(key, value);
      console.log(arr);
    } else if (!arr[hash(key)]) {
      arr[hash(key)] = lList.append(key, value);
    } else {
      if (arr[hash(key)].key == key) {
        arr[hash(key)].value = value;
      } else {
        arr[hash(key)].next = lList.nodeConstruct(key, value);
        capacity++;
      }
    }
  };

  const get = function (key) {
    if (!arr[hash(key)]) {
      return null;
    } else {
      return lList.findValue(key, arr[hash(key)]);
    }
  };

  const has = function (key) {
    if (!arr[hash(key)]) {
      return false;
    } else {
      if (lList.findValue(key, arr[hash(key)])) {
        return true;
      }
    }
  };

  const remove = function (key) {
    if (!arr[hash(key)]) {
      return false;
    } else {
      if (lList.removeValue(key, arr[hash(key)])) {
        return true;
      } else return false;
    }
  };

  const length = function () {
    let total = 0;
    arr.forEach((item) => {
      if (item) {
        total += lList.getLength(item);
      }
    });
    return total;
  };

  const getCapacity = function () {
    capacity = length();
    return capacity;
  };

  const loadLevel = function () {
    return arrSize * 0.8;
  };

  const clear = function () {
    arr = Array(16).fill(null);
  };

  const keys = function () {
    let keysArr = [];
    arr.forEach((item) => {
      if (item) {
        let temp = lList.getArray(item, "key");
        if (temp.length > 1 || Array.isArray(temp)) {
          for (const node in temp) {
            keysArr.push(temp[node]);
          }
        } else {
          keysArr.push(temp);
        }
      }
    });
    return keysArr;
  };

  const values = function () {
    let valArr = [];
    arr.forEach((item) => {
      let temp = lList.getArray(item, "value");
      if (item) {
        if (temp.length > 1 || Array.isArray(temp)) {
          for (const node in temp) {
            valArr.push(temp[node]);
          }
        } else {
          valArr.push(temp);
        }
      }
    });
    return valArr;
  };
  const entries = function () {
    let entriesArr = [];
    for (let i = 0; i < values().length; i++) {
      entriesArr.push([`${keys()[i]},${values()[i]}`]);
    }
    return entriesArr;
  };

  const hash = function (key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % (arr.length + 1);
    }
    return hashCode;
  };
  return {
    set,
    hash,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
};

export { HashMapJS };
