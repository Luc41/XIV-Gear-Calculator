/**
 * sample body structure
 * {
    "query": {
        "bool": {
            "filter": [
                {
                    "range": {
                        "LevelEquip": {
                            "gte": "1"
                        }
                    }
                },
                {
                    "range": {
                        "LevelEquip": {
                            "lte": "80"
                        }
                    }
                },
                {
                    "range": {
                        "LevelItem": {
                            "gte": "470"
                        }
                    }
                },
                {
                    "range": {
                        "LevelItem": {
                            "lte": "505"
                        }
                    }
                },
                {
                    "term": {
                        "ClassJobCategory.BRD": "1"
                    }
                }
            ]
        }
    },
    "from": 0,
    "size": 100
}
 */

export const classJobCategory = {
  rangedps: [
    { job: 'Bard', short: 'brd', src: '/images/03_DPS/Job/Bard.png' },
    { job: 'Machinist', short: 'mch', src: '/images/03_DPS/Job/Machinist.png' },
    { job: 'Dancer', short: 'dnc', src: '/images/03_DPS/Job/Dancer.png' }
  ],
  meleedps: [
    { job: 'Dragoon', short: 'drg', src: '/images/03_DPS/Job/Dragoon.png' },
    { job: 'Monk', short: 'mnk', src: '/images/03_DPS/Job/Monk.png' },
    { job: 'Samurai', short: 'sam', src: '/images/03_DPS/Job/Samurai.png' },
    { job: 'Ninja', short: 'nin', src: '/images/03_DPS/Job/Ninja.png' }
  ],
  magic: [
    { job: 'Blackmage', short: 'blm', src: '/images/03_DPS/Job/BlackMage.png' },
    { job: 'Summoner', short: 'smn', src: '/images/03_DPS/Job/Summoner.png' },
    { job: 'Redmage', short: 'rdm', src: '/images/03_DPS/Job/RedMage.png' }
  ],
  tank: [
    { job: 'Paladin', short: 'pld', src: '/images/01_TANK/Job/Paladin.png' },
    { job: 'Warrior', short: 'war', src: '/images/01_TANK/Job/Warrior.png' },
    { job: 'Darkknight', short: 'drk', src: '/images/01_TANK/Job/DarkKnight.png' },
    { job: 'Gunbreaker', short: 'gnb', src: '/images/01_TANK/Job/Gunbreaker.png' }
  ],
  healer: [
    { job: 'Whitemage', short: 'whm', src: '/images/02_HEALER/Job/WhiteMage.png' },
    { job: 'Scholar', short: 'sch', src: '/images/02_HEALER/Job/Scholar.png' },
    { job: 'Astrologian', short: 'ast', src: '/images/02_HEALER/Job/Astrologian.png' }
  ],
  crafter: [
    { job: 'Alchemist', short: 'alc', src: '/images/04_CRAFTER/Alchemist.png' },
    { job: 'Armorer', short: 'arm', src: '/images/04_CRAFTER/Armorer.png' },
    { job: 'Blacksmith', short: 'bsm', src: '/images/04_CRAFTER/Blacksmith.png' },
    { job: 'Carpenter', short: 'crp', src: '/images/04_CRAFTER/Carpenter.png' },
    { job: 'Culinarian', short: 'cul', src: '/images/04_CRAFTER/Culinarian.png' },
    { job: 'Goldsmith', short: 'gsm', src: '/images/04_CRAFTER/Goldsmith.png' },
    { job: 'Leatherworker', short: 'ltw', src: '/images/04_CRAFTER/Leatherworker.png' }
  ],
  gatherer: [
    { job: 'Botanist', short: 'btn', src: '/images/05_GATHERER/Botanist.png' },
    { job: 'Miner', short: 'min', src: '/images/05_GATHERER/Miner.png' },
    { job: 'Fisher', short: 'fsh', src: '/images/05_GATHERER/Fisher.png' }
  ]
}

// keep data,rewrite function.
// now it cause data table shows extra columns.
export const baseParamsModifier = [
  {
    jobs: ['Bard', 'Machinist', 'Dancer', 'Ninja'],
    currentParams: [2, 3, 27, 22, 44, 45]
  },
  {
    jobs: ['Monk', 'Dragoon', 'Samurai'],
    currentParams: [1, 3, 27, 22, 44, 45]
  },
  {
    jobs: ['Blackmage', 'Summoner', 'Redmage'],
    currentParams: [3, 4, 27, 22, 44, 46]
  },
  {
    jobs: ['Paladin', 'Warrior', 'Darkknight', 'Gunbreaker'],
    currentParams: [1, 3, 19, 27, 22, 44, 45]
  },
  {
    jobs: ['Whitemage', 'Scholar', 'Astrologian'],
    currentParams: [3, 5, 6, 27, 22, 44, 46]
  }
]

export const baseParams = [
  { ID: 0, Name: 'HP', BaseValue: 0, BonusValue: 0 },
  { ID: 1, Name: 'Strength', BaseValue: 0, BonusValue: 0 },
  { ID: 2, Name: 'Dexterity', BaseValue: 0, BonusValue: 0 },
  { ID: 3, Name: 'Vitality', BaseValue: 0, BonusValue: 0 },
  { ID: 4, Name: 'Intelligence', BaseValue: 0, BonusValue: 0 },
  { ID: 5, Name: 'Mind', BaseValue: 0, BonusValue: 0 },
  { ID: 6, Name: 'Piety', BaseValue: 0, BonusValue: 0 },
  { ID: 19, Name: 'Tenacity', BaseValue: 0, BonusValue: 0 },
  { ID: 22, Name: 'Direct Hit Rate', BaseValue: 0, BonusValue: 0 },
  { ID: 27, Name: 'Critical Hit', BaseValue: 0, BonusValue: 0 },
  { ID: 44, Name: 'Determination', BaseValue: 0, BonusValue: 0 },
  { ID: 45, Name: 'Skill Speed', BaseValue: 0, BonusValue: 0 },
  { ID: 46, Name: 'Spell Speed', BaseValue: 0, BonusValue: 0 }
]
