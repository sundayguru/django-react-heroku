import {Set} from "immutable";
import _ from "lodash";


const isFilterActive = (query, excluded = Set(["search"])) => {
    const strings = query.filter((value) => _.isString(value));
    const filterInputs = strings.filterNot((value, key) => excluded.has(key));

    const filtersLengthSum = filterInputs.reduce((length, value) => {
        return length += value.length;
    }, 0);

    return filtersLengthSum > 0;
};

export default isFilterActive;
