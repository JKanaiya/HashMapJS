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

  const getLength = function () {};

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
  };
};

export { LinkedList };
