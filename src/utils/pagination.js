import _ from "lodash";
export default function (items, pageSize, pageNumber) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
  _;
}
