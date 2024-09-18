// src/components/LOL/LOL_runes.js

export const RUNES_DATA = [
    {
        filter: 'Domination',
        name: 'Electrocute',
        name_kr: '감전',
        description: `3초 동안 같은 챔피언에게 기본 공격 또는 개별 스킬 3회를 적중시키면 추가 적응형 피해 적용`,
        image: require('../../assets/lol_runes/Domination/Electrocute.png')
    },
    {
        filter: 'Domination',
        name: 'DarkHarvest',
        name_kr: '어둠의 수확',
        description: `체력이 낮은 챔피언에게 피해를 입히면 적응형 피해를 입히고 해당 챔피언의 영혼을 수확`,
        image: require('../../assets/lol_runes/Domination/DarkHarvest.png')
    },
    {
        filter: 'Domination',
        name: 'HailOfBlades',
        name_kr: '칼날비',
        description: `적 챔피언에 대한 첫 공격 3회 동안 공격 속도 대폭 증가`,
        image: require('../../assets/lol_runes/Domination/HailOfBlades.png')
    },
    {
        filter: 'Domination',
        name: 'CheapShot',
        name_kr: '비열한 한 방',
        description: `이동 또는 행동이 제약된 적 챔피언에게 추가 고정 피해 `,
        image: require('../../assets/lol_runes/Domination/CheapShot.png')
    },
    {
        filter: 'Domination',
        name: 'TasteOfBlood',
        name_kr: '피의 맛',
        description: `적 챔피언에게 피해를 입히면 체력을 회복합니다.`,
        image: require('../../assets/lol_runes/Domination/TasteOfBlood.png')
    },
    {
        filter: 'Domination',
        name: 'SuddenImpact',
        name_kr: '돌발 일격',
        description: `돌진, 도약, 점멸, 순간이동을 사용하거나 은신에서 빠져나온 후 적 챔피언에게 기본 공격과 스킬로 피해를 입히면 추가 고정 피해`,
        image: require('../../assets/lol_runes/Domination/SuddenImpact.png')
    },
    {
        filter: 'Domination',
        name: 'ZombieWard',
        name_kr: '좀비 와드',
        description: `적 와드 파괴 관여 시 그 자리에 아군 좀비 와드 생성. 생성된 좀비 와드 하나당 적응형으로 공격력 또는 주문력 영구 증가 및 최대 개수 도달 시 추가로 증가`,
        image: require('../../assets/lol_runes/Domination/ZombieWard.png')
    },
    {
        filter: 'Domination',
        name: 'GhostPoro',
        name_kr: '유령 포로',
        description: `자신이 설치한 와드의 지속시간이 끝나면 유령 포로 와드가 남아 발견될 때까지 시야를 밝히고, 생성된 유령 포로 와드 하나당 적응형으로 공격력 또는 주문력 영구 증가 및 유령 포로 와드가 적 챔피언 발견 시 추가로 증가`,
        image: require('../../assets/lol_runes/Domination/GhostPoro.png')
    },
    {
        filter: 'Domination',
        name: 'EyeballCollection',
        name_kr: '사냥의 증표',
        description: `챔피언 처치 관여 시마다 증표 획득. 개당 적응형으로 공격력 또는 주문력 영구 증가 및 최대 개수 도달 시 추가 증가`,
        image: require('../../assets/lol_runes/Domination/EyeballCollection.png')
    },
    {
        filter: 'Domination',
        name: 'TreasureHunter',
        name_kr: '보물 사냥꾼',
        description: `고유 처치 관여 시 처음으로 획득하는 골드량 증가 `,
        image: require('../../assets/lol_runes/Domination/TreasureHunter.png')
    },
    {
        filter: 'Domination',
        name: 'RelentlessHunter',
        name_kr: '끈질긴 사냥꾼',
        description: `적 챔피언당 1회 한정 처치 관여 시 전투에서 벗어나 있을 때 이동 속도 영구 증가 `,
        image: require('../../assets/lol_runes/Domination/RelentlessHunter.png')
    },
    {
        filter: 'Domination',
        name: 'UltimateHunter',
        name_kr: '궁극의 사냥꾼',
        description: `적 챔피언당 1회 한정 처치 관여 시 궁극기 재사용 대기시간 영구 감소 `,
        image: require('../../assets/lol_runes/Domination/UltimateHunter.png')
    },
    {
        filter: 'Inspiration',
        name: 'GlacialAugment',
        name_kr: '빙결 강화',
        description: `적 챔피언을 이동 불가 상태로 만들면 3줄기의 빙결 광선이 뻗어 나와 근처 적들을 둔화하고 아군에게 입히는 피해를 감소시킵니다.`,
        image: require('../../assets/lol_runes/Inspiration/GlacialAugment.png')
    },
    {
        filter: 'Inspiration',
        name: 'UnsealedSpellbook',
        name_kr: '봉인 풀린 주문서',
        description: `전투에서 벗어났을 때 소환사 주문 교환 가능. 새로운 소환사 주문으로 교환할 때마다 교환 재사용 대기시간 감소.`,
        image: require('../../assets/lol_runes/Inspiration/UnsealedSpellbook.png')
    },
    {
        filter: 'Inspiration',
        name: 'FirstStrike',
        name_kr: '선제공격',
        description: `적 챔피언과 전투 개시 시 3초 동안 7%의 추가 피해 및 입힌 피해에 따라 골드 획득`,
        image: require('../../assets/lol_runes/Inspiration/FirstStrike.png')
    },
    {
        filter: 'Inspiration',
        name: 'HextechFlashtraption',
        name_kr: '마법공학 점멸기',
        description: `점멸이 재사용 대기 중일 때 마법공학 점멸로 대체됨마법공학 점멸: 정신 집중 후 다른 지점으로 순간적으로 이동`,
        image: require('../../assets/lol_runes/Inspiration/HextechFlashtraption.png')
    },
    {
        filter: 'Inspiration',
        name: 'MagicalFootwear',
        name_kr: '마법의 신발',
        description: `게임 시작 후 12분에 장화 무료 획득. 그 전까지 신발류 아이템 구매 불가. 챔피언 처치 관여 시마다 장화 획득 시점이 45초 앞당겨짐`,
        image: require('../../assets/lol_runes/Inspiration/MagicalFootwear.png')
    },
    {
        filter: 'Inspiration',
        name: 'CashBack',
        name_kr: '환급',
        description: `전설급 아이템 구매 시 골드 일부를 돌려받음`,
        image: require('../../assets/lol_runes/Inspiration/CashBack.png')
    },
    {
        filter: 'Inspiration',
        name: 'AlchemistCabinet',
        name_kr: '삼중 물약',
        description: `3레벨에 도달하면 탐욕의 영약을 획득합니다.6레벨에 도달하면 힘의 영약을 획득합니다.9레벨에 도달하면 숙련의 영약을 획득합니다. `,
        image: require('../../assets/lol_runes/Inspiration/AlchemistCabinet.png')
    },
    {
        filter: 'Inspiration',
        name: 'TimeWarpTonic',
        name_kr: '시간 왜곡 물약',
        description: `물약 사용 시 즉시 일정량의 체력 회복`,
        image: require('../../assets/lol_runes/Inspiration/TimeWarpTonic.png')
    },
    {
        filter: 'Inspiration',
        name: 'BiscuitDelivery',
        name_kr: '비스킷 배달',
        description: `게임 시작 후 6분까지 2분마다 비스킷 1개 획득. 비스킷 사용 또는 판매 시 체력/마나 회복 및 최대 마나 영구 증가`,
        image: require('../../assets/lol_runes/Inspiration/BiscuitDelivery.png')
    },
    {
        filter: 'Inspiration',
        name: 'CosmicInsight',
        name_kr: '우주적 통찰력',
        description: `소환사 주문 가속 +18아이템 가속 +10`,
        image: require('../../assets/lol_runes/Inspiration/CosmicInsight.png')
    },
    {
        filter: 'Inspiration',
        name: 'ApproachVelocity',
        name_kr: '쾌속 접근',
        description: `이동을 방해받은 근처 적 챔피언에게 이동할 때 이동 속도 증가. 자신이 이동 방해 스킬을 맞힌 적에게 이동할 때는 추가 증가`,
        image: require('../../assets/lol_runes/Inspiration/ApproachVelocity.png')
    },
    {
        filter: 'Inspiration',
        name: 'JackOfAllTrades',
        name_kr: '다재다능',
        description: `아이템으로 얻은 서로 다른 능력치 하나당 잭 중첩 획득. 중첩 하나당 스킬 가속 1 증가5회 및 10회 중첩 시 추가 적응형 능력치 획득`,
        image: require('../../assets/lol_runes/Inspiration/JackOfAllTrades.png')
    },
    {
        filter: 'Precision',
        name: 'PressTheAttack',
        name_kr: '집중 공격',
        description: `적 챔피언에게 공격 3회 연속 적중 시 추가 피해를 입히고 챔피언과의 전투에서 벗어날 때까지 피해량 증폭`,
        image: require('../../assets/lol_runes/Precision/PressTheAttack.png')
    },
    {
        filter: 'Precision',
        name: 'FleetFootwork',
        name_kr: '기민한 발놀림',
        description: `공격 및 이동 시 충전. 충전 중첩 100회 상태로 공격 시 체력 회복 및 이동 속도 증가`,
        image: require('../../assets/lol_runes/Precision/FleetFootwork.png')
    },
    {
        filter: 'Precision',
        name: 'Conqueror',
        name_kr: '정복자',
        description: `적 챔피언 공격 시 적응형 능력치 중첩 획득. 12회 중첩 시 챔피언 대상 피해량의 일부만큼 체력 회복`,
        image: require('../../assets/lol_runes/Precision/Conqueror.png')
    },
    {
        filter: 'Precision',
        name: 'AbsorbLife',
        name_kr: '생명 흡수',
        description: `대상 처치 시 체력 회복`,
        image: require('../../assets/lol_runes/Precision/AbsorbLife.png')
    },
    {
        filter: 'Precision',
        name: 'Triumph',
        name_kr: '승전보',
        description: `챔피언 처치 관여 시 잃은 체력의 5%를 회복하며 추가로 20골드 획득 `,
        image: require('../../assets/lol_runes/Precision/Triumph.png')
    },
    {
        filter: 'Precision',
        name: 'PresenceOfMind',
        name_kr: '침착',
        description: `적 챔피언에게 피해를 입히면 마나 또는 기력 재생량 증가. 처치 관여 시 마나 또는 기력 회복`,
        image: require('../../assets/lol_runes/Precision/PresenceOfMind.png')
    },
    {
        filter: 'Precision',
        name: 'LegendAlacrity',
        name_kr: '전설: 민첩함',
        description: `적 챔피언 처치 관여 시 영구적으로 공격 속도 증가 `,
        image: require('../../assets/lol_runes/Precision/LegendAlacrity.png')
    },
    {
        filter: 'Precision',
        name: 'LegendHaste',
        name_kr: '전설: 가속',
        description: `적 챔피언 처치 관여 시 영구적으로 기본 스킬 가속 효과 획득 `,
        image: require('../../assets/lol_runes/Precision/LegendHaste.png')
    },
    {
        filter: 'Precision',
        name: 'LegendBloodline',
        name_kr: '전설: 핏빛 길',
        description: `적 챔피언 처치 관여 시 영구적으로 생명력 흡수 효과 획득. (최대치 있음) 최대치 도달 시 최대 체력 증가. 다른 전설 룬에 비해 게임 초반에 약하고 후반에 강한 룬`,
        image: require('../../assets/lol_runes/Precision/LegendBloodline.png')
    },
    {
        filter: 'Precision',
        name: 'CoupDeGrace',
        name_kr: '최후의 일격',
        description: `체력이 낮은 적 챔피언에게 입히는 피해량 증가`,
        image: require('../../assets/lol_runes/Precision/CoupDeGrace.png')
    },
    {
        filter: 'Precision',
        name: 'CutDown',
        name_kr: '체력차 극복',
        description: `체력이 높은 적 챔피언에게 입히는 피해량 증가`,
        image: require('../../assets/lol_runes/Precision/CutDown.png')
    },
    {
        filter: 'Precision',
        name: 'LastStand',
        name_kr: '최후의 저항',
        description: `체력이 낮을 때 적 챔피언 공격 시 추가 피해`,
        image: require('../../assets/lol_runes/Precision/LastStand.png')
    },
    {
        filter: 'Resolve',
        name: 'GraspOfTheUndying',
        name_kr: '착취의 손아귀',
        description: `4초마다 적 챔피언 기본 공격 시 추가 마법 피해, 체력 회복, 체력 영구 증가`,
        image: require('../../assets/lol_runes/Resolve/GraspOfTheUndying.png')
    },
    {
        filter: 'Resolve',
        name: 'Aftershock',
        name_kr: '여진',
        description: `적 챔피언을 이동 불가 상태로 만들면 방어력/마법 저항력 증가 및 잠시 후 주변에 큰 마법 피해`,
        image: require('../../assets/lol_runes/Resolve/Aftershock.png')
    },
    {
        filter: 'Resolve',
        name: 'Guardian',
        name_kr: '수호자',
        description: `스킬 대상으로 지정한 아군이나 근처에 있는 아군을 보호. 자신 또는 보호받는 아군이 레벨에 비례하여 피해를 입으면 둘 다 보호막 획득.`,
        image: require('../../assets/lol_runes/Resolve/Guardian.png')
    },
    {
        filter: 'Resolve',
        name: 'Demolish',
        name_kr: '철거',
        description: `포탑 근처에서 포탑에 대한 강력한 공격을 충전`,
        image: require('../../assets/lol_runes/Resolve/Demolish.png')
    },
    {
        filter: 'Resolve',
        name: 'FontOfLife',
        name_kr: '생명의 샘',
        description: `적 챔피언 이동 방해 시 주위 아군 챔피언의 체력 회복 `,
        image: require('../../assets/lol_runes/Resolve/FontOfLife.png')
    },
    {
        filter: 'Resolve',
        name: 'ShieldBash',
        name_kr: '보호막 강타',
        description: `보호막을 얻으면 적 챔피언에게 다음 기본 공격 시 추가 적응형 피해`,
        image: require('../../assets/lol_runes/Resolve/ShieldBash.png')
    },
    {
        filter: 'Resolve',
        name: 'Conditioning',
        name_kr: '사전 준비',
        description: `12분 후 방어력 +8 및 마법 저항력 +8 증가와 동시에 추가 방어력 및 마법 저항력 3% 증가`,
        image: require('../../assets/lol_runes/Resolve/Conditioning.png')
    },
    {
        filter: 'Resolve',
        name: 'SecondWind',
        name_kr: '재생의 바람',
        description: `적 챔피언에게 피해를 입으면 일정 시간에 걸쳐 잃은 체력의 일부 회복 `,
        image: require('../../assets/lol_runes/Resolve/SecondWind.png')
    },
    {
        filter: 'Resolve',
        name: 'BonePlating',
        name_kr: '뼈 방패',
        description: `적 챔피언으로부터 피해를 입은 뒤 해당 적이 가하는 3회의 스킬 및 기본 공격으로부터 30~60만큼 피해를 덜 받습니다.지속시간: 1.5초재사용 대기시간: 55초`,
        image: require('../../assets/lol_runes/Resolve/BonePlating.png')
    },
    {
        filter: 'Resolve',
        name: 'Overgrowth',
        name_kr: '과잉성장',
        description: `근처에서 몬스터 또는 미니언이 죽을 때마다 최대 체력 영구 증가`,
        image: require('../../assets/lol_runes/Resolve/Overgrowth.png')
    },
    {
        filter: 'Resolve',
        name: 'Revitalize',
        name_kr: '소생',
        description: `보호막 및 체력 회복 5% 증가체력이 40% 이하인 대상에게는 자신이 사용하거나 받는 회복과 보호막 효과가 10% 강화`,
        image: require('../../assets/lol_runes/Resolve/Revitalize.png')
    },
    {
        filter: 'Resolve',
        name: 'Unflinching',
        name_kr: '불굴의 의지',
        description: `군중 제어 스킬에 영향을 받을 때 방어력과 마법 저항력이 증가합니다.`,
        image: require('../../assets/lol_runes/Resolve/Unflinching.png')
    },
    {
        filter: 'Sorcery',
        name: 'SummonAery',
        name_kr: '콩콩이 소환',
        description: `공격 또는 스킬 사용 시 대상에 콩콩이를 보내 적에게 피해를 주거나 아군에게 보호막 생성`,
        image: require('../../assets/lol_runes/Sorcery/SummonAery.png')
    },
    {
        filter: 'Sorcery',
        name: 'ArcaneComet',
        name_kr: '신비로운 유성',
        description: `챔피언에게 스킬로 피해를 주면 해당 위치에 피해를 가하는 유성 소환`,
        image: require('../../assets/lol_runes/Sorcery/ArcaneComet.png')
    },
    {
        filter: 'Sorcery',
        name: 'PhaseRush',
        name_kr: '난입',
        description: `한 챔피언에게 기본 공격 또는 개별 스킬 3회 적중 시 일시적으로 이동 속도 증가 `,
        image: require('../../assets/lol_runes/Sorcery/PhaseRush.png')
    },
    {
        filter: 'Sorcery',
        name: 'NullifyingOrb',
        name_kr: '무효화 구체',
        description: `마법 피해를 받아 체력이 낮아지면 마법 피해를 흡수하는 보호막 생성`,
        image: require('../../assets/lol_runes/Sorcery/NullifyingOrb.png')
    },
    {
        filter: 'Sorcery',
        name: 'ManaflowBand',
        name_kr: '마나순환 팔찌',
        description: `적 챔피언에게 스킬을 적중하면 최대 마나가 영구적으로 25만큼 증가합니다. (최대 마나량: 250)최대 마나량 250에 도달하면 5초마다 잃은 마나의 1%를 회복합니다.`,
        image: require('../../assets/lol_runes/Sorcery/ManaflowBand.png')
    },
    {
        filter: 'Sorcery',
        name: 'NimbusCloak',
        name_kr: '빛의 망토',
        description: `소환사 주문 사용 후 잠시 동안 이동 속도 증가 및 유닛 통과 가능`,
        image: require('../../assets/lol_runes/Sorcery/NimbusCloak.png')
    },
    {
        filter: 'Sorcery',
        name: 'Transcendence',
        name_kr: '깨달음',
        description: `다음 레벨이 되면 추가 효과 획득:5레벨: 스킬 가속 +5 8레벨: 스킬 가속 +5 11레벨: 챔피언 처치 관여 시 기본 스킬의 남은 재사용 대기시간 20% 감소`,
        image: require('../../assets/lol_runes/Sorcery/Transcendence.png')
    },
    {
        filter: 'Sorcery',
        name: 'Celerity',
        name_kr: '기민함',
        description: `모든 추가 이동 속도 효과가 7% 증가하고 이동 속도 1% 증가`,
        image: require('../../assets/lol_runes/Sorcery/Celerity.png')
    },
    {
        filter: 'Sorcery',
        name: 'AbsoluteFocus',
        name_kr: '절대 집중',
        description: `체력이 70% 이상일 경우 적응형 피해 추가 적용`,
        image: require('../../assets/lol_runes/Sorcery/AbsoluteFocus.png')
    },
    {
        filter: 'Sorcery',
        name: 'Scorch',
        name_kr: '주문 작열',
        description: `10초마다 공격 스킬 적중 시 챔피언을 불태움`,
        image: require('../../assets/lol_runes/Sorcery/Scorch.png')
    },
    {
        filter: 'Sorcery',
        name: 'Waterwalking',
        name_kr: '물 위를 걷는 자',
        description: `강에 있을 때 이동 속도를 얻고 적응형으로 주문력 또는 공격력 증가`,
        image: require('../../assets/lol_runes/Sorcery/Waterwalking.png')
    },
    {
        filter: 'Sorcery',
        name: 'GatheringStorm',
        name_kr: '폭풍의 결집',
        description: `게임이 진행됨에 따라 적응형 공격력 또는 주문력 획득량 증가`,
        image: require('../../assets/lol_runes/Sorcery/GatheringStorm.png')
    },
];

export const filterRunesByType = (type) => {
    return RUNES_DATA.filter(rune => rune.filter === type);
};