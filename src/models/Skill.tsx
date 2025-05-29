export default class Skill {
    skill: string;
    category: string;
    specialClass: string;

    constructor(skill: string, category: string, specialClass: string) {
        this.skill = skill;
        this.category = category;
        this.specialClass = specialClass;
    }

    getSkill() {
        return this.skill;
    }

    getCategory() {
        return this.category;
    }

    // Get the special class of the skill
    getSpecialClass() {
        return this.specialClass;
    }
}

