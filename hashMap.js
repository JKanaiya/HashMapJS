import { LinkedList } from "./LinkedList.js";

const HashMapJS = function () {
  //  initialize the array length to 16
  let arr = Array(16).fill(null);

  let capacity = 0;
  let loadFactor = 0.8;
  let mod = 16;

  let lList = LinkedList();

  const set = function (key, value) {
    if (hash(key) < 0 || hash(key) >= arr.length) {
      throw new Error("Trying to access index out of bounds");
    } else {
      if (!arr[hash(key)]) {
        arr[hash(key)] = lList.append(key, value);
        capacity++;
      } else {
        if (arr[hash(key)].key == key) {
          arr[hash(key)].value = value;
        } else {
          arr[hash(key)].next = lList.nodeConstruct(key, value);
          capacity++;
        }
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

  const hash = function (key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % mod;
    }
    return hashCode;
  };
  return {
    set,
    hash,
    get,
    has,
    remove,
  };
};

export { HashMapJS };
