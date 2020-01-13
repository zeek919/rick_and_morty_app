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
    const statusValue =
        (STATUS_ALIVE.checked && '&status=alive') ||
        (STATUS_DEAD.checked && '&status=dead') ||
        (STATUS_UNKNOW.checked && '&status=unknow') ||
        '';

    const genderValue =
        (GENDER_MALE.checked && '&gender=male') ||
        (GENDER_FEMALE.checked && '&gender=female') ||
        '';

    const speciesValue =
        (SPECIES_HUMAN.checked && '&species=human') ||
        (SPECIES_SUPERHUMAN.checked && '&species=superhuman') ||
        (SPECIES_HUMANOID.checked && '&species=humanoid') ||
        (SPECIES_ALIEN.checked && '&species=alien') ||
        (SPECIES_UNKNOW.checked && '&species=unknow') ||
        '';

    const radioStatus = statusValue + genderValue + speciesValue;
    return radioStatus;
};

export default isRadioChecked;
