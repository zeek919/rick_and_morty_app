import {
    NAME_INPUT,
    STATUS_ALIVE,
    STATUS_UNKNOW,
    STATUS_DEAD,
    GENDER_MALE,
    GENDER_FEMALE,
    SPECIES_HUMAN,
    SPECIES_SUPERHUMAN,
    SPECIES_HUMANOID,
    SPECIES_ALIEN,
    SPECIES_UNKNOW,
} from '../constants/radioButtons';

let statusValue = '';
let genderValue = '';
let speciesValue = '';
let nameValue = '';

export const ifRadioChecked = () => {
    if (STATUS_ALIVE.checked === true) {
        statusValue = '&status=alive';
    } else if (STATUS_UNKNOW.checked === true) {
        statusValue = '&status=unknow';
    } else if (STATUS_DEAD.checked === true) {
        statusValue = '&status=dead';
    }

    if (GENDER_MALE.checked === true) {
        genderValue = '&gender=male';
    } else if (GENDER_FEMALE.checked === true) {
        genderValue = '&gender=female';
    }

    if (SPECIES_HUMAN.checked === true) {
        speciesValue = '&species=human';
    } else if (SPECIES_SUPERHUMAN.checked === true) {
        speciesValue = '&species=superhuman';
    } else if (SPECIES_HUMANOID.checked === true) {
        speciesValue = '&species=humanoid';
    } else if (SPECIES_ALIEN.checked === true) {
        speciesValue = '&species=alien';
    } else if (SPECIES_UNKNOW.checked === true) {
        speciesValue = '&species=unknow';
    }

    if (NAME_INPUT) {
        nameValue = `&name=${NAME_INPUT.value}`;
    }

    const wholeURL = statusValue + genderValue + speciesValue + nameValue;
    return wholeURL;
};
