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

const getFilterStatus = () => ({
    isAlive: STATUS_ALIVE.checked,
    isUnknow: STATUS_UNKNOW.checked,
    isDead: STATUS_DEAD.checked,

    isMale: GENDER_MALE.checked,
    isFemale: GENDER_FEMALE.checked,

    isHuman: SPECIES_HUMAN.checked,
    isSuperhuman: SPECIES_SUPERHUMAN.checked,
    isHumanoid: SPECIES_HUMANOID.checked,
    isAlien: SPECIES_ALIEN.checked,
    isSpeciesUnknown: SPECIES_UNKNOW.checked,
});

export default getFilterStatus;
