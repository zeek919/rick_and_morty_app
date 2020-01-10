import {
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
} from '../constants/filters';

const isRadioChecked = () => {
    let statusValue = '';
    let genderValue = '';
    let speciesValue = '';

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

    const wholeURL = statusValue + genderValue + speciesValue;
    return wholeURL;
};

export default isRadioChecked;

// /* eslint-disable no-unused-expressions */
// import {
//     STATUS_ALIVE,
//     STATUS_UNKNOW,
//     STATUS_DEAD,
//     GENDER_MALE,
//     GENDER_FEMALE,
//     SPECIES_HUMAN,
//     SPECIES_SUPERHUMAN,
//     SPECIES_HUMANOID,
//     SPECIES_ALIEN,
//     SPECIES_UNKNOW,
// } from '../constants/filters';

// const isRadioChecked = () => {
//     let statusValue = '';
//     let genderValue = '';
//     let speciesValue = '';

//     STATUS_ALIVE.checked ? (statusValue = '&status=alive') : (statusValue = '');
//     STATUS_DEAD.checked ? (statusValue = '&status=dead') : (statusValue = '');
//     STATUS_UNKNOW.checked ? (statusValue = '&status=unknow') : (statusValue = '');

//     GENDER_MALE.checked ? (genderValue = '&gender=male') : (genderValue = '');
//     GENDER_FEMALE.checked ? (genderValue = '&gender=female') : (genderValue = '');

//     // statusValue = STATUS_ALIVE.checked && '&status=alive';
//     // statusValue = STATUS_DEAD.checked && '&status=dead';
//     // statusValue = STATUS_UNKNOW.checked && '&status=unknow';

//     // genderValue = GENDER_MALE.checked && '&gender=male';
//     // genderValue = GENDER_FEMALE.checked && '&gender=female';

//     // speciesValue = SPECIES_HUMAN.checked && '&species=human';
//     // speciesValue = SPECIES_HUMANOID.checked && '&species=humanoid';
//     // speciesValue = SPECIES_SUPERHUMAN.checked && '&species=superhuman';
//     // speciesValue = SPECIES_ALIEN.checked && '&species=alien';
//     // speciesValue = SPECIES_UNKNOW.checked && '&species=unknow';

//     const radioStatus = statusValue + genderValue + speciesValue;
//     return radioStatus;
// };

// export default isRadioChecked;
