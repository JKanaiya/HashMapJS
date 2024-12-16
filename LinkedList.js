const LinkedList = function () {
  let head = null;

  const tail = function (item) {
    if (item.next == null) return item;
    return tail(item.next);
  };

  const nodeConstruct = function (key, value) {
    let next = null;
    return {
      value,
      key,
      next,
    };
  };
  const append = function (key, value) {
    if (!head) {
      let head = nodeConstruct(key, value);
      return head;
    } else {
      let b = tail(head);
      b.next = nodeConstruct(key, value);
    }
  };

  const removeValue = function (node, location) {
    function placeContains(query) {
      if (query.next == null) {
        return false;
      }
      if (query.next.key == node) {
        if (query.next.next) {
          query.next = query.next.next;
          return true;
        } else {
          query.next = null;
          return true;
        }
      }
      return placeContains(query.next);
    }
    return placeContains(location);
  };

  const getLength = function (location) {
    let a = 0;
    function placeContains(query) {
      a++;
      if (query.next == null) return a;
      return placeContains(query.next);
    }
    return placeContains(location);
  };

  const getArray = function (location, part) {
    let arr = [];
    function placeContains(query) {
      if (query) {
        if (part === "key") {
          arr.push(query.key);
        } else if (part === "value") {
          arr.push(query.value);
        }
        if (query.next == null) {
          return arr;
        }
        return placeContains(query.next);
      }
    }
    return placeContains(location);
  };

  const findValue = function (node, location) {
    function placeContains(query) {
      if (query.key == node) return query.value;
      if (query.next == null) return null;
      return placeContains(query.next);
    }
    return placeContains(location);
  };
  return {
    nodeConstruct,
    append,
    findValue,
    removeValue,
    getLength,
    getArray,
  };
};

export { LinkedList };
