/**
 * sample request body structure
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
    { name: 'Bard', short: 'brd', src: '/images/03_DPS/Job/Bard.png' },
    { name: 'Machinist', short: 'mch', src: '/images/03_DPS/Job/Machinist.png' },
    { name: 'Dancer', short: 'dnc', src: '/images/03_DPS/Job/Dancer.png' }
  ],
  meleedps: [
    { name: 'Dragoon', short: 'drg', src: '/images/03_DPS/Job/Dragoon.png' },
    { name: 'Monk', short: 'mnk', src: '/images/03_DPS/Job/Monk.png' },
    { name: 'Samurai', short: 'sam', src: '/images/03_DPS/Job/Samurai.png' },
    { name: 'Ninja', short: 'nin', src: '/images/03_DPS/Job/Ninja.png' }
  ],
  magic: [
    { name: 'Blackmage', short: 'blm', src: '/images/03_DPS/Job/BlackMage.png' },
    { name: 'Summoner', short: 'smn', src: '/images/03_DPS/Job/Summoner.png' },
    { name: 'Redmage', short: 'rdm', src: '/images/03_DPS/Job/RedMage.png' }
  ],
  tank: [
    { name: 'Paladin', short: 'pld', src: '/images/01_TANK/Job/Paladin.png' },
    { name: 'Warrior', short: 'war', src: '/images/01_TANK/Job/Warrior.png' },
    { name: 'Darkknight', short: 'drk', src: '/images/01_TANK/Job/DarkKnight.png' },
    { name: 'Gunbreaker', short: 'gnb', src: '/images/01_TANK/Job/Gunbreaker.png' }
  ],
  healer: [
    { name: 'Whitemage', short: 'whm', src: '/images/02_HEALER/Job/WhiteMage.png' },
    { name: 'Scholar', short: 'sch', src: '/images/02_HEALER/Job/Scholar.png' },
    { name: 'Astrologian', short: 'ast', src: '/images/02_HEALER/Job/Astrologian.png' }
  ],
  crafter: [
    { name: 'Alchemist', short: 'alc', src: '/images/04_CRAFTER/Alchemist.png' },
    { name: 'Armorer', short: 'arm', src: '/images/04_CRAFTER/Armorer.png' },
    { name: 'Blacksmith', short: 'bsm', src: '/images/04_CRAFTER/Blacksmith.png' },
    { name: 'Carpenter', short: 'crp', src: '/images/04_CRAFTER/Carpenter.png' },
    { name: 'Culinarian', short: 'cul', src: '/images/04_CRAFTER/Culinarian.png' },
    { name: 'Goldsmith', short: 'gsm', src: '/images/04_CRAFTER/Goldsmith.png' },
    { name: 'Leatherworker', short: 'ltw', src: '/images/04_CRAFTER/Leatherworker.png' }
  ],
  gatherer: [
    { name: 'Botanist', short: 'btn', src: '/images/05_GATHERER/Botanist.png' },
    { name: 'Miner', short: 'min', src: '/images/05_GATHERER/Miner.png' },
    { name: 'Fisher', short: 'fsh', src: '/images/05_GATHERER/Fisher.png' }
  ]
}

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
