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

    STATUS_ALIVE.checked ? (statusValue = '&status=alive') : (statusValue = '');
    STATUS_DEAD.checked ? (statusValue = '&status=dead') : (statusValue = '');
    STATUS_UNKNOW.checked ? (statusValue = '&status=unknow') : (statusValue = '');

    // statusValue = STATUS_ALIVE.checked && '&status=alive';
    // statusValue = STATUS_DEAD.checked && '&status=dead';
    // statusValue = STATUS_UNKNOW.checked && '&status=unknow';

    // genderValue = GENDER_MALE.checked && '&gender=male';
    // genderValue = GENDER_FEMALE.checked && '&gender=female';

    // speciesValue = SPECIES_HUMAN.checked && '&species=human';
    // speciesValue = SPECIES_HUMANOID.checked && '&species=humanoid';
    // speciesValue = SPECIES_SUPERHUMAN.checked && '&species=superhuman';
    // speciesValue = SPECIES_ALIEN.checked && '&species=alien';
    // speciesValue = SPECIES_UNKNOW.checked && '&species=unknow';

    const radioStatus = statusValue + genderValue + speciesValue;
    return radioStatus;
};

export default isRadioChecked;
