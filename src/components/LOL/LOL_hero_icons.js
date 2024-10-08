// src/components/LOL/LOL_heroes.js

export const HERO_DATA = [
    {
        numID: 1,
        id: 'Aatrox_mid_top',
        Key: '266',
        name: '아트록스',
        title: '다르킨의 검',
        lore: `한때는 공허에 맞서 싸웠던 슈리마의 명예로운 수호자 아트록스와 그의 종족은 결국 공허보다 위험한 존재가 되어 룬테라의 존속을 위협했지만, 교활한 필멸자의 마법에 속아넘어가 패배하게 되었다. 수백 년에 걸친 봉인 끝에, 아트록스는 자신의 정기가 깃든 마법 무기를 휘두르는 어리석은 자들을 타락시키고 육신을 바꾸는 것으로 다시 한번 자유의 길을 찾아내었다. 이제 이전의 잔혹한 모습을 닮은 육체를 차지한 아트록스는 세상의 종말과 오랫동안 기다려온 복수를 열망한다.`,
        blurb: `한때는 공허에 맞서 싸웠던 슈리마의 명예로운 수호자 아트록스와 그의 종족은 결국 공허보다 위험한 존재가 되어 룬테라의 존속을 위협했지만, 교활한 필멸자의 마법에 속아넘어가 패배하게 되었다. 수백 년에 걸친 봉인 끝에, 아트록스는 자신의 정기가 깃든 마법 무기를 휘두르는 어리석은 자들을 타락시키고 육신을 바꾸는 것으로 다시 한번 자유의 길을 찾아내었다. 이제 이전의 잔혹한 모습을 닮은 육체를 차지한 아트록스는 세상의 종말과 오랫동안 기다려온 복수를...`,
        image: require('../../assets/lol_hero_icons/Aatrox.png'),
        background_image: require('../../assets/lol_hero_icons/background/Aatrox.jpg'),
        stats: {"hp": 650, "hpperlevel": 114, "mp": 0, "mpperlevel": 0, "movespeed": 345, "armor": 38, "armorperlevel": 4.8, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 3, "hpregenperlevel": 0.5, "mpregen": 0, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 60, "attackdamageperlevel": 5, "attackspeedperlevel": 2.5, "attackspeed": 0.651},
        spells: [
            {
                id: 'passive',
                name: '사신 태세',
                description: `주기적으로 아트록스의 기본 공격이 대상 최대 체력에 비례하여 추가 물리 피해를 입히고 자신의 체력을 회복합니다. `,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Aatrox_Passive.png')
            },
            {
                id: 'AatroxQ',
                name: '다르킨의 검',
                description: `아트록스가 대검을 내리쳐 물리 피해를 줍니다. 세 번까지 휘두를 수 있으며 각 공격은 피해 범위가 다릅니다.`,
                cooldownBurn: '14/12/10/8/6',
                image: require('../../assets/lol_hero_icons/skills/AatroxQ.png')
            },
            {
                id: 'AatroxW',
                name: '지옥사슬',
                description: `아트록스가 지면을 내리쳐 처음 맞힌 적에게 피해를 줍니다. 대상이 챔피언 또는 대형 몬스터인 경우 일정 시간 안에 해당 지역을 벗어나지 않으면 중앙으로 끌려가 다시 피해를 받습니다.`,
                cooldownBurn: '20/18/16/14/12',
                image: require('../../assets/lol_hero_icons/skills/AatroxW.png')
            },
            {
                id: 'AatroxE',
                name: '파멸의 돌진',
                description: `기본 지속 효과로 아트록스가 적 챔피언에게 피해를 입히면 체력을 회복합니다. 사용 시, 아트록스가 지정한 방향으로 돌진합니다.`,
                cooldownBurn: '9/8/7/6/5',
                image: require('../../assets/lol_hero_icons/skills/AatroxE.png')
            },
            {
                id: 'AatroxR',
                name: '세계의 종결자',
                description: `아트록스가 악마의 힘을 해방하여 근처 적 미니언에게 공포를 주고 자신의 공격력과 체력 회복량, 이동 속도가 증가합니다. 아트록스가 챔피언 처치에 관여하면 이 효과의 지속시간이 연장됩니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/AatroxR.png')
            },
        ],
    },
    {
        numID: 2,
        id: 'Ahri_mid',
        Key: '103',
        name: '아리',
        title: '구미호',
        lore: `영혼 세계의 마법과 선천적으로 연결된 아리는 먹잇감의 감정을 조종하고 정수를 집어삼킬 수 있는 여우 모습의 바스타야로, 영혼을 먹어 치울 때마다 그 안에 담긴 지혜와 기억의 편린을 받아들인다. 강력하면서도 불안정한 포식자였던 아리는 이제 조상들의 흔적을 찾아 세상을 여행하며 지금껏 훔친 기억을 버리고 스스로 자신만의 추억을 쌓으려 한다.`,
        blurb: `영혼 세계의 마법과 선천적으로 연결된 아리는 먹잇감의 감정을 조종하고 정수를 집어삼킬 수 있는 여우 모습의 바스타야로, 영혼을 먹어 치울 때마다 그 안에 담긴 지혜와 기억의 편린을 받아들인다. 강력하면서도 불안정한 포식자였던 아리는 이제 조상들의 흔적을 찾아 세상을 여행하며 지금껏 훔친 기억을 버리고 스스로 자신만의 추억을 쌓으려 한다.`,
        image: require('../../assets/lol_hero_icons/Ahri.png'),
        background_image: require('../../assets/lol_hero_icons/background/Ahri.jpg'),
        stats: {"hp": 590, "hpperlevel": 104, "mp": 418, "mpperlevel": 25, "movespeed": 330, "armor": 21, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 2.5, "hpregenperlevel": 0.6, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 53, "attackdamageperlevel": 3, "attackspeedperlevel": 2.2, "attackspeed": 0.668},
        spells: [
            {
                id: 'passive',
                name: '정기 흡수',
                description: `아리가 미니언 또는 몬스터를 9마리 처치하면 체력을 회복합니다.아리가 적 챔피언 처치에 관여하면 더 많은 체력을 회복합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Ahri_SoulEater2.png')
            },
            {
                id: 'AhriQ',
                name: '현혹의 구슬',
                description: `아리가 구슬을 던지고 다시 받습니다. 던질 때는 마법 피해를 주며 돌아올 때는 고정 피해를 줍니다. `,
                cooldownBurn: '7',
                image: require('../../assets/lol_hero_icons/skills/AhriQ.png')
            },
            {
                id: 'AhriW',
                name: '여우불',
                description: `아리의 이동 속도가 잠시 동안 크게 증가하며 아리가 여우불 세 개를 생성하면, 각각 자동으로 적을 찾아 공격합니다.`,
                cooldownBurn: '9/8/7/6/5',
                image: require('../../assets/lol_hero_icons/skills/AhriW.png')
            },
            {
                id: 'AhriE',
                name: '매혹',
                description: `아리가 입맞춤을 날려 피해를 주며 맞은 적을 홀립니다. 홀린 적은 즉시 이동 스킬을 멈추고 아리 쪽으로 무작정 다가갑니다.`,
                cooldownBurn: '12',
                image: require('../../assets/lol_hero_icons/skills/AhriE.png')
            },
            {
                id: 'AhriR',
                name: '혼령 질주',
                description: `아리가 전방으로 질주하며 근처 적 챔피언들에게 혼령의 정기를 쏘아냅니다. 재사용 대기시간이 적용되기 전에 최대 세 번까지 사용할 수 있으며, 적 챔피언 처치 관여 시 재사용 가능 횟수가 늘어납니다.`,
                cooldownBurn: '130/115/100',
                image: require('../../assets/lol_hero_icons/skills/AhriR.png')
            },
        ],
    },
    {
        numID: 3,
        id: 'Akali_top_mid',
        Key: '84',
        name: '아칼리',
        title: '섬기는 이 없는 암살자',
        lore: `킨코우 결사단과 그림자의 권이라는 지위를 버린 아칼리는 아이오니아인들에게 필요한 강력한 무기가 되어 홀로 싸우고 있다. 스승 쉔의 가르침을 잊지 않은 채 아이오니아의 적을 하나씩 암살하기로 맹세했다. 아칼리의 살행은 은밀할지 모르나 그녀의 메시지는 대륙 전체를 뒤흔든다. ''경외하라. 나는 섬기는 이 없는 암살자다.''`,
        blurb: `킨코우 결사단과 그림자의 권이라는 지위를 버린 아칼리는 아이오니아인들에게 필요한 강력한 무기가 되어 홀로 싸우고 있다. 스승 쉔의 가르침을 잊지 않은 채 아이오니아의 적을 하나씩 암살하기로 맹세했다. 아칼리의 살행은 은밀할지 모르나 그녀의 메시지는 대륙 전체를 뒤흔든다. ''경외하라. 나는 섬기는 이 없는 암살자다.''`,
        image: require('../../assets/lol_hero_icons/Akali.png'),
        background_image: require('../../assets/lol_hero_icons/background/Akali.jpg'),
        stats: {"hp": 600, "hpperlevel": 119, "mp": 200, "mpperlevel": 0, "movespeed": 345, "armor": 23, "armorperlevel": 4.7, "spellblock": 37, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 9, "hpregenperlevel": 0.9, "mpregen": 50, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 62, "attackdamageperlevel": 3.3, "attackspeedperlevel": 3.2, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '암살자의 표식',
                description: `스킬 공격으로 챔피언에게 피해를 입히면 해당 챔피언의 주변에 원이 생깁니다. 이 원의 경계를 넘어가면 다음 기본 공격의 사거리가 길어지고 추가 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Akali_P.png')
            },
            {
                id: 'AkaliQ',
                name: '오연투척검',
                description: `아칼리가 단검 다섯 개를 던져 추가 공격력과 주문력에 비례하여 피해를 입히고 둔화시킵니다.`,
                cooldownBurn: '1.5',
                image: require('../../assets/lol_hero_icons/skills/AkaliQ.png')
            },
            {
                id: 'AkaliW',
                name: '황혼의 장막',
                description: `아칼리가 연막을 퍼뜨린 후 이동 속도가 잠시 상승합니다. 연막 안에 있는 동안 아칼리는 투명 상태가 되어 적이 스킬이나 공격 대상으로 지정할 수 없습니다. 아칼리가 공격하거나 스킬을 사용하면 순간적으로 아칼리의 모습이 드러납니다.  `,
                cooldownBurn: '20/19/18/17/16',
                image: require('../../assets/lol_hero_icons/skills/AkaliW.png')
            },
            {
                id: 'AkaliE',
                name: '표창곡예',
                description: `뒤로 공중제비를 돌며 전방으로 표창을 던져 마법 피해를 입힙니다. 처음으로 적중한 적이나 연막에 표식을 남깁니다. 스킬을 다시 사용하면 표식을 남긴 대상에게 돌진해 추가 피해를 입힙니다.`,
                cooldownBurn: '16/14.5/13/11.5/10',
                image: require('../../assets/lol_hero_icons/skills/AkaliE.png')
            },
            {
                id: 'AkaliR',
                name: '무결처형',
                description: `아칼리가 지정한 방향으로 도약해 공격이 적중한 적들에게 피해를 입힙니다. 재사용 시: 아칼리가 지정한 방향으로 돌진해 공격이 적중한 모든 적들에게 피해를 입힙니다.`,
                cooldownBurn: '120/90/60',
                image: require('../../assets/lol_hero_icons/skills/AkaliR.png')
            },
        ],
    },
    {
        numID: 4,
        id: 'Akshan_adc',
        Key: '166',
        name: '아크샨',
        title: '떠도는 감시자',
        lore: `상반신을 드러낸 아크샨은 위험에 직면하면 눈썹을 치켜올리며 당당한 카리스마, 정의로운 복수심으로 악과 맞서 싸운다. 전투에서 뛰어난 은신술을 발휘하며 적의 눈을 피한 후 제일 예기치 못한 순간 다시 모습을 드러낸다. 불타는 정의감과 죽음을 되돌리는 전설적인 무기로 룬테라의 수많은 악한들이 저지른 잘못을 바로잡으며 '멍청이가 되지 말자'라는 자신만의 도덕적 기준에 따라 살아간다.`,
        blurb: `상반신을 드러낸 아크샨은 위험에 직면하면 눈썹을 치켜올리며 당당한 카리스마, 정의로운 복수심으로 악과 맞서 싸운다. 전투에서 뛰어난 은신술을 발휘하며 적의 눈을 피한 후 제일 예기치 못한 순간 다시 모습을 드러낸다. 불타는 정의감과 죽음을 되돌리는 전설적인 무기로 룬테라의 수많은 악한들이 저지른 잘못을 바로잡으며 '멍청이가 되지 말자'라는 자신만의 도덕적 기준에 따라 살아간다.`,
        image: require('../../assets/lol_hero_icons/Akshan.png'),
        background_image: require('../../assets/lol_hero_icons/background/Akshan.jpg'),
        stats: {"hp": 630, "hpperlevel": 107, "mp": 350, "mpperlevel": 40, "movespeed": 330, "armor": 26, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 500, "hpregen": 3.75, "hpregenperlevel": 0.65, "mpregen": 8.2, "mpregenperlevel": 0.7, "crit": 0, "critperlevel": 0, "attackdamage": 52, "attackdamageperlevel": 3, "attackspeedperlevel": 4, "attackspeed": 0.638},
        spells: [
            {
                id: 'passive',
                name: '비열한 싸움',
                description: `아크샨의 기본 공격 및 스킬이 세 번 적중할 때마다 추가 물리 피해를 입힙니다. 대상이 챔피언인 경우 아크샨이 보호막을 얻습니다.아크샨이 기본 공격 후 피해량이 감소한 두 번째 공격을 발사합니다. 추가 공격을 도중에 취소하면 대신 이동 속도가 증가합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/akshan_p.png')
            },
            {
                id: 'AkshanQ',
                name: '복수의 부메랑',
                description: `아크샨이 날아가고 돌아오며 피해를 입히는 부메랑을 던집니다. 적에게 적중할 때마다 부메랑의 사거리가 증가합니다.`,
                cooldownBurn: '8/7.25/6.5/5.75/5',
                image: require('../../assets/lol_hero_icons/skills/AkshanQ.png')
            },
            {
                id: 'AkshanW',
                name: '악당 처단',
                description: `아크샨이 아군 챔피언을 처치한 적 챔피언에게 악당 표식을 남깁니다. 아크샨이 악당을 처치하면 해당 적이 처치한 아군들을 부활시키고 추가 골드를 얻으며 모든 악당 표식을 없앱니다.활성화 시 아크샨이 위장 상태에 들어가며 악당에게 다가갈 때 이동 속도와 마나 재생량이 증가합니다. 아크샨이 지형 근처나 수풀 안에 있지 않으면 위장 상태가 금방 풀립니다.`,
                cooldownBurn: '18/14/10/6/2',
                image: require('../../assets/lol_hero_icons/skills/AkshanW.png')
            },
            {
                id: 'AkshanE',
                name: '영웅의 비상',
                description: `아크샨이 갈고리총을 발사해 지형에 고정시킨 후, 갈고리에 매달린 채 가장 가까운 적을 연속으로 공격하며 이동합니다. 기동 중 챔피언이나 지형에 충돌하면 땅으로 떨어지며, 도중에 스스로 뛰어내릴 수도 있습니다.`,
                cooldownBurn: '18/16.5/15/13.5/12',
                image: require('../../assets/lol_hero_icons/skills/AkshanE.png')
            },
            {
                id: 'AkshanR',
                name: '인과응보',
                description: `아크샨이 적 챔피언을 조준하고 탄환을 저장합니다. 사격을 개시하면 저장한 탄환을 모두 발사해 처음으로 적중하는 챔피언이나 미니언이나 구조물에 잃은 체력에 비례하는 피해를 입힙니다.`,
                cooldownBurn: '100/85/70',
                image: require('../../assets/lol_hero_icons/skills/AkshanR.png')
            },
        ],
    },
    {
        numID: 5,
        id: 'Alistar_sup',
        Key: '12',
        name: '알리스타',
        title: '미노타우로스',
        lore: `비할 데 없이 강력한 전사라는 평판이 자자한 알리스타는 녹서스 제국에게 부족 전체가 몰살당한 이래 그 복수를 꿈꾸고 있다. 노예로 잡힌 후 참혹한 전투를 거듭해야 하는 검투사 신세가 되었으나, 그 누구도 꺾을 수 없는 의지가 있어 마음 깊은 곳까지 야수로 변하지는 않았다. 알리스타는 노예라는 구속에서 벗어나 자유의 몸이 된 후에도 탄압당하고 기댈 곳 없는 자들을 위해 싸우고 있다. 알리스타의 분노는 그의 뿔이나 발굽, 주먹 못지 않게 적들이 두려워하는 무기이기도 하다.`,
        blurb: `비할 데 없이 강력한 전사라는 평판이 자자한 알리스타는 녹서스 제국에게 부족 전체가 몰살당한 이래 그 복수를 꿈꾸고 있다. 노예로 잡힌 후 참혹한 전투를 거듭해야 하는 검투사 신세가 되었으나, 그 누구도 꺾을 수 없는 의지가 있어 마음 깊은 곳까지 야수로 변하지는 않았다. 알리스타는 노예라는 구속에서 벗어나 자유의 몸이 된 후에도 탄압당하고 기댈 곳 없는 자들을 위해 싸우고 있다. 알리스타의 분노는 그의 뿔이나 발굽, 주먹 못지 않게 적들이...`,
        image: require('../../assets/lol_hero_icons/Alistar.png'),
        background_image: require('../../assets/lol_hero_icons/background/Alistar.jpg'),
        stats: {"hp": 685, "hpperlevel": 120, "mp": 350, "mpperlevel": 40, "movespeed": 330, "armor": 47, "armorperlevel": 4.7, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 8.5, "hpregenperlevel": 0.85, "mpregen": 8.5, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 62, "attackdamageperlevel": 3.75, "attackspeedperlevel": 2.125, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '승리의 포효',
                description: `근처에서 적이 죽거나, 알리스타가 적 챔피언을 기절 혹은 이동시킬 때마다 포효를 중첩시킵니다. 최대치까지 중첩되면 근처의 모든 아군 챔피언과 자신의 체력을 회복시킵니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Alistar_E.png')
            },
            {
                id: 'Pulverize',
                name: '분쇄',
                description: `알리스타가 땅을 내리쳐 주변의 적에게 피해를 입히고 공중에 띄웁니다.`,
                cooldownBurn: '14/13/12/11/10',
                image: require('../../assets/lol_hero_icons/skills/Pulverize.png')
            },
            {
                id: 'Headbutt',
                name: '박치기',
                description: `알리스타가 적에게 박치기를 하여 피해를 입히고 적을 밀어냅니다.`,
                cooldownBurn: '14/13/12/11/10',
                image: require('../../assets/lol_hero_icons/skills/Headbutt.png')
            },
            {
                id: 'AlistarE',
                name: '짓밟기',
                description: `알리스타가 근처의 적 유닛을 짓밟아 적 챔피언에게 피해를 입힐 경우 중첩을 얻고, 유닛을 통과해서 다닐 수 있게 됩니다. 최대치까지 중첩되면 알리스타의 적 챔피언에 대한 다음 기본 공격이 강화되어 추가 마법 피해를 입히고 기절시킵니다.`,
                cooldownBurn: '12/11.5/11/10.5/10',
                image: require('../../assets/lol_hero_icons/skills/AlistarE.png')
            },
            {
                id: 'FerociousHowl',
                name: '꺾을 수 없는 의지',
                description: `알리스타가 거친 함성을 지르며 자신에게 걸린 모든 방해 효과를 제거하고 일정 시간 동안 적의 물리 및 마법 피해를 감소시킵니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/FerociousHowl.png')
            },
        ],
    },
    {
        numID: 6,
        id: 'Amumu_jug_sup',
        Key: '32',
        name: '아무무',
        title: '슬픈 미라',
        lore: `뼛속까지 사무치는 외로움과 쓸쓸함 속에 살아가는 아무무. 평생을 오로지 마음을 나눌 수 있는 단 한 명의 친구를 찾아 헤매는, 고대 슈리마 제국의 가엾은 영혼이다. 끔찍한 저주를 받은 아무무는 영원히 혼자인 채로 남겨졌다. 그 저주란 지독하리만큼 잔인한 것이었다. 상대가 누구든 아무무와의 신체적 접촉은 죽음을 의미했고 정서적 교류는 파멸을 불러왔다. 그의 운명을 아는 한 누구도 그를 가까이하려 들지 않았다. 간혹 아무무를 봤다는 이들은 그를 두고 '살아있는 시체'라고 표현했다. 푸르스름한 붕대로 전신을 감고 있는 작은 체구의 그 존재는 마치 미라와 같다고도 했다. 아무무에 관한 이야기는 수 세대를 거쳐 전해 내려 오면서 갖가지 신화나 설화, 그리고 구전동화 등 여러 이야기의 바탕이 되었다. 그래서 어디까지가 사실이고 어디서부터가 허구인지 분별하기란 결코 쉽지 않다.`,
        blurb: `뼛속까지 사무치는 외로움과 쓸쓸함 속에 살아가는 아무무. 평생을 오로지 마음을 나눌 수 있는 단 한 명의 친구를 찾아 헤매는, 고대 슈리마 제국의 가엾은 영혼이다. 끔찍한 저주를 받은 아무무는 영원히 혼자인 채로 남겨졌다. 그 저주란 지독하리만큼 잔인한 것이었다. 상대가 누구든 아무무와의 신체적 접촉은 죽음을 의미했고 정서적 교류는 파멸을 불러왔다. 그의 운명을 아는 한 누구도 그를 가까이하려 들지 않았다. 간혹 아무무를 봤다는 이들은 그를 두고...`,
        image: require('../../assets/lol_hero_icons/Amumu.png'),
        background_image: require('../../assets/lol_hero_icons/background/Amumu.jpg'),
        stats: {"hp": 685, "hpperlevel": 94, "mp": 285, "mpperlevel": 40, "movespeed": 335, "armor": 33, "armorperlevel": 4, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 9, "hpregenperlevel": 0.85, "mpregen": 7.4, "mpregenperlevel": 0.55, "crit": 0, "critperlevel": 0, "attackdamage": 57, "attackdamageperlevel": 3.8, "attackspeedperlevel": 2.18, "attackspeed": 0.736},
        spells: [
            {
                id: 'passive',
                name: '저주의 손길',
                description: `아무무의 기본 공격을 받은 대상은 저주에 걸려 마법 피해를 입을 때마다 추가 고정 피해를 받습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Amumu_Passive.png')
            },
            {
                id: 'BandageToss',
                name: '붕대 던지기',
                description: `아무무가 끈적끈적한 붕대를 던져 적을 기절시키고 피해를 입히며 가까이 이동합니다.`,
                cooldownBurn: '3',
                image: require('../../assets/lol_hero_icons/skills/BandageToss.png')
            },
            {
                id: 'AuraofDespair',
                name: '절망',
                description: `적이 절망으로 인해 매 초마다 최대 체력에 비례한 피해를 입고 저주가 초기화됩니다.`,
                cooldownBurn: '1',
                image: require('../../assets/lol_hero_icons/skills/AuraofDespair.png')
            },
            {
                id: 'Tantrum',
                name: '짜증내기',
                description: `아무무가 받는 물리 피해를 영구적으로 감소시킵니다. 활성화 시 아무무가 주변 적에게 분노를 방출합니다. 아무무가 공격당할 때마다 짜증내기의 재사용 대기시간이 감소합니다.`,
                cooldownBurn: '9/8/7/6/5',
                image: require('../../assets/lol_hero_icons/skills/Tantrum.png')
            },
            {
                id: 'CurseoftheSadMummy',
                name: '슬픈 미라의 저주',
                description: `아무무가 붕대로 주변 유닛을 휘감아 저주를 내리고 피해를 입히며 기절시킵니다.`,
                cooldownBurn: '150/125/100',
                image: require('../../assets/lol_hero_icons/skills/CurseoftheSadMummy.png')
            },
        ],
    },
    {
        numID: 7,
        id: 'Anivia_mid',
        Key: '34',
        name: '애니비아',
        title: '얼음불사조',
        lore: `애니비아는 삶과 죽음, 부활을 끊임없이 반복하며 프렐요드를 지키는 날개 달린 반신이다. 매섭기 짝이 없는 얼음과 칼바람에서 태어났으며, 이런 자연의 힘을 자유자재로 이용하여 자신의 고향땅을 어지럽히려 드는 무모한 자들을 응징한다. 혹한의 북쪽에 터를 잡은 부족들에게 애니비아는 그들을 이끌고 보호하는 자애로운 존재로, 희망의 상징이자 크나큰 변화를 가져오는 징조로 숭배를 받는다. 애니비아는 전장에서 죽음을 두려워하지 않고 전력을 다해 싸운다. 자신을 희생하더라도 내일이면 지금까지의 기억을 품은 채 새로이 부활하리라는 것을 잘 알기 때문이다.`,
        blurb: `애니비아는 삶과 죽음, 부활을 끊임없이 반복하며 프렐요드를 지키는 날개 달린 반신이다. 매섭기 짝이 없는 얼음과 칼바람에서 태어났으며, 이런 자연의 힘을 자유자재로 이용하여 자신의 고향땅을 어지럽히려 드는 무모한 자들을 응징한다. 혹한의 북쪽에 터를 잡은 부족들에게 애니비아는 그들을 이끌고 보호하는 자애로운 존재로, 희망의 상징이자 크나큰 변화를 가져오는 징조로 숭배를 받는다. 애니비아는 전장에서 죽음을 두려워하지 않고 전력을 다해 싸운다. 자신을...`,
        image: require('../../assets/lol_hero_icons/Anivia.png'),
        background_image: require('../../assets/lol_hero_icons/background/Anivia.jpg'),
        stats: {"hp": 550, "hpperlevel": 92, "mp": 495, "mpperlevel": 45, "movespeed": 325, "armor": 21, "armorperlevel": 4.9, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 600, "hpregen": 5.5, "hpregenperlevel": 0.55, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 51, "attackdamageperlevel": 3.2, "attackspeedperlevel": 1.68, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '환생',
                description: `애니비아는 치명적인 피해를 입으면 알 형태로 돌아가 체력을 완전히 회복한 후 환생합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Anivia_P.png')
            },
            {
                id: 'FlashFrost',
                name: '냉기 폭발',
                description: `애니비아가 날개를 모아 얼음 구체를 소환한 뒤 발사하여 명중 당한 적들을 추위에 떨게 하고 피해를 입힙니다. 폭발 시 일정 반경 안에 있는 적에게 피해를 입히고 기절시킵니다.`,
                cooldownBurn: '12/11/10/9/8',
                image: require('../../assets/lol_hero_icons/skills/FlashFrost.png')
            },
            {
                id: 'Crystallize',
                name: '결정화',
                description: `애니비아가 공기 중의 수분을 빙결시켜 지나갈 수 없는 얼음 벽을 만듭니다. 벽은 얼마 지나지 않아 녹아버립니다.`,
                cooldownBurn: '17',
                image: require('../../assets/lol_hero_icons/skills/Crystallize.png')
            },
            {
                id: 'Frostbite',
                name: '동상',
                description: `애니비아가 날개를 퍼덕이며 적에게 얼음 바람을 일으켜 피해를 입힙니다. 최근 냉기 폭발이나 최대 크기에 도달한 얼음 폭풍에 적중당한 대상이 입는 피해는 2배로 증가합니다.`,
                cooldownBurn: '4',
                image: require('../../assets/lol_hero_icons/skills/Frostbite.png')
            },
            {
                id: 'GlacialStorm',
                name: '얼음 폭풍',
                description: `애니비아가 얼음의 비와 폭풍우를 소환하여 적에게 피해를 입히고 이동 속도를 늦춥니다.`,
                cooldownBurn: '4/3/2',
                image: require('../../assets/lol_hero_icons/skills/GlacialStorm.png')
            },
        ],
    },
    {
        numID: 8,
        id: 'Annie_mid_sup',
        Key: '1',
        name: '애니',
        title: '어둠의 아이',
        lore: `순수함 속에 아이답지 않은 위험한 모습을 간직한 애니는 불을 다루는 강력한 마법사다. 녹서스 북부의 산속에서 그림자처럼 숨어 지내면서도 그녀의 마법은 두각을 드러냈다. 아기였을 때부터 예측할 수 없는 감정의 분출과 함께 타고난 화염 친화성을 보인 애니는 곧 이런 '재주'를 제어할 수 있게 되었다. 그 중 사랑하는 곰 인형 '티버'를 열렬한 수호자로 소환하는 것을 가장 좋아한다. 끝 모를 동심을 품은 애니는 언제나 어두운 숲을 거닐며 같이 놀 누군가를 찾고 있다.`,
        blurb: `순수함 속에 아이답지 않은 위험한 모습을 간직한 애니는 불을 다루는 강력한 마법사다. 녹서스 북부의 산속에서 그림자처럼 숨어 지내면서도 그녀의 마법은 두각을 드러냈다. 아기였을 때부터 예측할 수 없는 감정의 분출과 함께 타고난 화염 친화성을 보인 애니는 곧 이런 '재주'를 제어할 수 있게 되었다. 그 중 사랑하는 곰 인형 '티버'를 열렬한 수호자로 소환하는 것을 가장 좋아한다. 끝 모를 동심을 품은 애니는 언제나 어두운 숲을 거닐며 같이 놀 누군가를...`,
        image: require('../../assets/lol_hero_icons/Annie.png'),
        background_image: require('../../assets/lol_hero_icons/background/Annie.jpg'),
        stats: {"hp": 560, "hpperlevel": 102, "mp": 418, "mpperlevel": 25, "movespeed": 335, "armor": 19, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 625, "hpregen": 5.5, "hpregenperlevel": 0.55, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 50, "attackdamageperlevel": 2.65, "attackspeedperlevel": 1.36, "attackspeed": 0.61},
        spells: [
            {
                id: 'passive',
                name: '방화광',
                description: `애니가 스킬을 4번 사용한 후 다음 공격 스킬에 맞은 적은 기절합니다.애니가 게임을 시작하고 방화광을 사용할 수 있는 상태로 재생성됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Annie_Passive.png')
            },
            {
                id: 'AnnieQ',
                name: '붕괴',
                description: `애니가 마나로 가득 찬 화염구를 던져 피해를 입히고 결정타를 냈을 때 사용한 마나를 되돌려 받습니다.`,
                cooldownBurn: '4',
                image: require('../../assets/lol_hero_icons/skills/AnnieQ.png')
            },
            {
                id: 'AnnieW',
                name: '소각',
                description: `애니가 원뿔 형태의 화염을 내뿜어 해당 지역에 있는 모든 적에게 피해를 입힙니다.`,
                cooldownBurn: '8',
                image: require('../../assets/lol_hero_icons/skills/AnnieW.png')
            },
            {
                id: 'AnnieE',
                name: '용암 방패',
                description: `애니나 아군에게 보호막을 부여하고 이동 속도가 증가하며, 기본 공격이나 스킬로 공격하는 적에게 피해를 입힙니다.`,
                cooldownBurn: '12/11.5/11/10.5/10',
                image: require('../../assets/lol_hero_icons/skills/AnnieE.png')
            },
            {
                id: 'AnnieR',
                name: '소환: 티버',
                description: `애니가 자신의 곰 티버를 되살려 지정 구역에 있는 유닛에게 피해를 입힙니다. 티버는 주변의 적을 공격하거나 불태울 수도 있습니다.`,
                cooldownBurn: '130/115/100',
                image: require('../../assets/lol_hero_icons/skills/AnnieR.png')
            },
        ],
    },
    {
        numID: 9,
        id: 'Aphelios_adc',
        Key: '523',
        name: '아펠리오스',
        title: '신념의 무기',
        lore: `달그림자에서 나타나는 아펠리오스는 음울한 적막 속에서 적을 쓰러뜨린다. 정확한 조준과 총성만이 그의 목소리를 대신한다. 독에 중독되어 말을 할 수 없게 되었지만 머나먼 사원에 있는 쌍둥이 여동생 알룬이 그를 인도하며 월석의 힘을 그의 손에 쥐여 준다. 하늘에서 달이 빛나는 한 아펠리오스는 결코 혼자가 아니다.`,
        blurb: `달그림자에서 나타나는 아펠리오스는 음울한 적막 속에서 적을 쓰러뜨린다. 정확한 조준과 총성만이 그의 목소리를 대신한다. 독에 중독되어 말을 할 수 없게 되었지만 머나먼 사원에 있는 쌍둥이 여동생 알룬이 그를 인도하며 월석의 힘을 그의 손에 쥐여 준다. 하늘에서 달이 빛나는 한 아펠리오스는 결코 혼자가 아니다.`,
        image: require('../../assets/lol_hero_icons/Aphelios.png'),
        background_image: require('../../assets/lol_hero_icons/background/Aphelios.jpg'),
        stats: {"hp": 580, "hpperlevel": 102, "mp": 348, "mpperlevel": 42, "movespeed": 325, "armor": 26, "armorperlevel": 4.2, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 3.25, "hpregenperlevel": 0.55, "mpregen": 6.5, "mpregenperlevel": 0.4, "crit": 0, "critperlevel": 0, "attackdamage": 55, "attackdamageperlevel": 2.3, "attackspeedperlevel": 2.1, "attackspeed": 0.64},
        spells: [
            {
                id: 'passive',
                name: '암살자와 예언자',
                description: `아펠리오스는 쌍둥이 누이 알룬이 만든 다섯 가지의 루나리 무기를 사용합니다. 한 번에 주 무기와 보조 무기 등 총 두 가지 무기를 사용할 수 있습니다. 각 무기는 고유의 기본 공격과 스킬을 가지고 있습니다. 기본 공격과 스킬 사용 시 탄약을 소모하며, 탄약을 모두 소모하면 사용 중인 주 무기를 5개의 무기 중 다음 무기로 교체합니다. `,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/ApheliosP.png')
            },
            {
                id: 'ApheliosQ_ClientTooltipWrapper',
                name: '무기 스킬',
                description: `아펠리오스는 주 무기에 따라 5개의 스킬을 사용할 수 있습니다.만월총(소총): 원거리 공격으로 대상에게 표식을 남깁니다. 표식을 소모해 추가로 원거리 공격을 가할 수 있습니다.절단검(낫 모양 권총): 빠르게 이동하며 주 무기와 보조 무기로 주위 적들을 공격합니다.중력포(대포): 이 무기로 둔화된 모든 적을 속박합니다.화염포(화염 방사기): 원뿔 형태로 적에게 화염을 발사한 후 보조 무기로 공격합니다.반월검(투척 무기): 보조 무기와 동일한 무기를 사용하는 파수탑을 배치합니다.`,
                cooldownBurn: '9',
                image: require('../../assets/lol_hero_icons/skills/ApheliosQ_ClientTooltipWrapper.png')
            },
            {
                id: 'ApheliosW',
                name: '위상 변화',
                description: `아펠리오스가 주 무기와 보조 무기를 서로 교체해 기본 공격과 스킬을 변경합니다.`,
                cooldownBurn: '0.8',
                image: require('../../assets/lol_hero_icons/skills/ApheliosW.png')
            },
            {
                id: 'ApheliosE_ClientTooltipWrapper',
                name: '무기 교체 시스템',
                description: `아펠리오스는 세 번째 스킬이 없습니다. 이 칸은 알룬이 부여할 다음 무기를 보여 줍니다. 무기는 정해진 순서로 시작하지만, 게임이 진행되는 동안 바뀔 수 있습니다. 무기는 탄약이 떨어지면 마지막 순서로 돌아갑니다.`,
                cooldownBurn: '0',
                image: require('../../assets/lol_hero_icons/skills/ApheliosE_ClientTooltipWrapper.png')
            },
            {
                id: 'ApheliosR',
                name: '월광포화',
                description: `적 챔피언에게 적중 시 폭발하는 달빛 에너지를 발사합니다. 아펠리오스가 장착한 주 무기의 고유 효과를 적용합니다.`,
                cooldownBurn: '120/110/100',
                image: require('../../assets/lol_hero_icons/skills/ApheliosR.png')
            },
        ],
    },
    {
        numID: 10,
        id: 'Ashe_adc_sup',
        Key: '22',
        name: '애쉬',
        title: '서리 궁수',
        lore: `아바로사 부족의 냉기의 화신이자 전쟁의 어머니인 애쉬는 북방에서 가장 규모가 큰 군단을 이끌고 있다. 절제력이 뛰어나고 총명한데다 이상주의적인 면을 갖추고 있지만 지도자라는 역할을 부담스러워하기도 한다. 고대 마법의 힘이 흐르는 혈통을 이어받았기에 얼음 정수의 활을 무기로 사용할 수 있다. 아바로사 부족민들은 애쉬가 전설 속 영웅 아바로사 여왕의 화신이라고 굳게 믿으며, 애쉬는 이들과 함께 먼 옛날 자신의 부족이 살았던 영토를 되찾아 다시 한 번 프렐요드를 통일시키려 한다.`,
        blurb: `아바로사 부족의 냉기의 화신이자 전쟁의 어머니인 애쉬는 북방에서 가장 규모가 큰 군단을 이끌고 있다. 절제력이 뛰어나고 총명한데다 이상주의적인 면을 갖추고 있지만 지도자라는 역할을 부담스러워하기도 한다. 고대 마법의 힘이 흐르는 혈통을 이어받았기에 얼음 정수의 활을 무기로 사용할 수 있다. 아바로사 부족민들은 애쉬가 전설 속 영웅 아바로사 여왕의 화신이라고 굳게 믿으며, 애쉬는 이들과 함께 먼 옛날 자신의 부족이 살았던 영토를 되찾아 다시 한 번...`,
        image: require('../../assets/lol_hero_icons/Ashe.png'),
        background_image: require('../../assets/lol_hero_icons/background/Ashe.jpg'),
        stats: {"hp": 610, "hpperlevel": 101, "mp": 280, "mpperlevel": 35, "movespeed": 325, "armor": 26, "armorperlevel": 4.6, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 600, "hpregen": 3.5, "hpregenperlevel": 0.55, "mpregen": 7, "mpregenperlevel": 0.65, "crit": 0, "critperlevel": 0, "attackdamage": 59, "attackdamageperlevel": 2.95, "attackspeedperlevel": 3.33, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '서리 화살',
                description: `애쉬의 공격을 받은 대상이 느려지며, 이 대상에 대한 애쉬의 공격력이 상승합니다.애쉬의 치명타는 추가 피해를 가하지 않는 대신, 대상에게 더 강력한 둔화를 적용합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Ashe_P.png')
            },
            {
                id: 'AsheQ',
                name: '궁사의 집중',
                description: `애쉬는 공격을 계속하면 집중이 오릅니다. 집중 중첩이 최대치에 이르면 이를 모두 소모해 애쉬가 궁사의 집중을 사용할 수 있으며, 이 때 애쉬의 공격 속도가 잠시 동안 증가하고 그 동안 기본 공격이 강력한 다발 공격으로 변합니다.`,
                cooldownBurn: '0',
                image: require('../../assets/lol_hero_icons/skills/AsheQ.png')
            },
            {
                id: 'Volley',
                name: '일제 사격',
                description: `애쉬가 화살을 원뿔 모양으로 발사하여 더 큰 피해를 입힙니다. 이때 서리 화살의 효과도 적용됩니다.`,
                cooldownBurn: '18/14.5/11/7.5/4',
                image: require('../../assets/lol_hero_icons/skills/Volley.png')
            },
            {
                id: 'AsheSpiritOfTheHawk',
                name: '매 날리기',
                description: `애쉬가 매의 혼을 맵 어느 위치든 날려보내 정찰을 시킵니다.`,
                cooldownBurn: '5',
                image: require('../../assets/lol_hero_icons/skills/AsheSpiritOfTheHawk.png')
            },
            {
                id: 'EnchantedCrystalArrow',
                name: '마법의 수정화살',
                description: `애쉬가 얼음으로 된 화살을 발사합니다. 화살이 적 챔피언에 맞을 경우 피해를 입히고 화살 발사 거리에 따라 더 오랜 시간 기절시킵니다. 또한 주변 적 유닛 역시 피해를 받고 속도가 느려집니다.`,
                cooldownBurn: '100/80/60',
                image: require('../../assets/lol_hero_icons/skills/EnchantedCrystalArrow.png')
            },
        ],
    },
    {
        numID: 11,
        id: 'AurelionSol_mid',
        Key: '136',
        name: '아우렐리온 솔',
        title: '별의 창조자',
        lore: `아우렐리온 솔은 천상의 경이로운 별들을 손수 빚어 한때 텅 비어있던 광활한 우주를 수놓았다. 그러나 이제 그는 속임수로 자신을 복종시킨 우주 제국의 명령에 따라 자신의 막강한 힘을 발휘해야 하는 처지가 되었다. 별을 만들던 때로 돌아가려는 열망에 불타는 아우렐리온 솔은 자신의 자유를 되찾기 위해서라면 자신의 창조물인 별들을 하늘에서 없앨 각오마저 되어 있다.`,
        blurb: `아우렐리온 솔은 천상의 경이로운 별들을 손수 빚어 한때 텅 비어있던 광활한 우주를 수놓았다. 그러나 이제 그는 속임수로 자신을 복종시킨 우주 제국의 명령에 따라 자신의 막강한 힘을 발휘해야 하는 처지가 되었다. 별을 만들던 때로 돌아가려는 열망에 불타는 아우렐리온 솔은 자신의 자유를 되찾기 위해서라면 자신의 창조물인 별들을 하늘에서 없앨 각오마저 되어 있다.`,
        image: require('../../assets/lol_hero_icons/AurelionSol.png'),
        background_image: require('../../assets/lol_hero_icons/background/AurelionSol.jpg'),
        stats: {"hp": 620, "hpperlevel": 90, "mp": 530, "mpperlevel": 40, "movespeed": 335, "armor": 22, "armorperlevel": 4, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 5.5, "hpregenperlevel": 0.55, "mpregen": 8, "mpregenperlevel": 0.75, "crit": 0, "critperlevel": 0, "attackdamage": 58, "attackdamageperlevel": 3.2, "attackspeedperlevel": 1.5, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '우주의 창조자',
                description: `아우렐리온 솔이 스킬로 피해를 입히면 각 스킬을 영구히 강화하는 별가루를 획득합니다. `,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/AurelionSolP.png')
            },
            {
                id: 'AurelionSolQ',
                name: '빛의 숨결',
                description: `아우렐리온 솔이 몇 초 동안 용의 숨결을 내뿜어 처음 적중하는 적에게 피해를 입히고 주변 적에게는 그보다 적은 광역 피해를 입힙니다. 숨결이 적에게 적중할 때마다 매초 추가 피해를 입힙니다. 추가 피해량은 획득한 별가루 양만큼 증가합니다. 대상이 챔피언이면 별가루를 획득합니다.`,
                cooldownBurn: '3',
                image: require('../../assets/lol_hero_icons/skills/AurelionSolQ.png')
            },
            {
                id: 'AurelionSolW',
                name: '별의 비행',
                description: `아우렐리온 솔이 지정한 방향으로 날아갑니다. 이 상태에서 다른 스킬을 사용할 수 있습니다. 비행 중 빛의 숨결은 재사용 대기시간이나 최대 정신 집중 시간이 없으며 피해가 증가합니다.아우렐리온 솔이 피해를 입힌 지 얼마 되지 않은 적 챔피언이 죽을 때마다 별의 비행의 남은 재사용 대기시간이 감소합니다.별가루는 별의 비행 최대 사거리를 늘립니다.`,
                cooldownBurn: '0',
                image: require('../../assets/lol_hero_icons/skills/AurelionSolW.png')
            },
            {
                id: 'AurelionSolE',
                name: '특이점',
                description: `아우렐리온 솔이 적에게 피해를 입히며 적을 천천히 중심으로 끌어당기는 블랙홀을 소환합니다. 이 스킬은 블랙홀에 있는 적 챔피언 한 명당 매초 별가루를 부여하며 안에 있는 적이 죽을 때도 별가루를 부여합니다. 블랙홀의 중심에 있는 적은 체력이 최대 체력의 일정 비율 밑으로 떨어질 경우 처형됩니다. 별가루는 특이점의 크기와 처형 기준값을 늘립니다.`,
                cooldownBurn: '12',
                image: require('../../assets/lol_hero_icons/skills/AurelionSolE.png')
            },
            {
                id: 'AurelionSolR',
                name: '유성 / 천상 강림',
                description: `유성: 아우렐리온 솔이 땅으로 별을 떨어뜨립니다. 이 충격으로 마법 피해를 입히고 적을 기절시키며 적중한 적 챔피언 한 명당 별가루를 획득합니다. 별가루가 어느 정도 모이면 아우렐리온 솔의 다음 유성이 천상 강림으로 변합니다.천상 강림: 아우렐리온 솔이 하늘에서 충돌 범위와 피해가 커진 거대한 별을 끌어내 적을 기절시키는 대신 공중에 띄웁니다. 이후 충돌 범위 가장자리에서 충격파가 퍼지며 적중한 적에게 피해를 입히고 둔화시킵니다. 별가루는 유성과 천상 강림의 충돌 범위를 넓힙니다.`,
                cooldownBurn: '120/110/100',
                image: require('../../assets/lol_hero_icons/skills/AurelionSolR.png')
            },
        ],
    },
    {
        numID: 12,
        id: 'Aurora_top_mid',
        Key: '893',
        name: '오로라',
        title: '세계의 경계에 선 마녀',
        lore: `태어난 순간부터 오로라는 영혼 세계와 물질 세계를 넘나드는 특별한 능력으로 삶의 길을 찾았다. 영혼 세계의 주민들에 대해 더 알고 싶었던 오로라는 자신의 고향을 떠났고, 시간 속에 뒤틀리고 길을 잃어 방황하는 반신을 만났다. 그의 절박함을 목격한 오로라는 자신의 거친 친구가 잊어버린 자아를 되찾도록 도와줄 방법을 찾기로 결심했고 프렐요드의 가장 먼 곳으로 여정을 떠났다.`,
        blurb: `태어난 순간부터 오로라는 영혼 세계와 물질 세계를 넘나드는 특별한 능력으로 삶의 길을 찾았다. 영혼 세계의 주민들에 대해 더 알고 싶었던 오로라는 자신의 고향을 떠났고, 시간 속에 뒤틀리고 길을 잃어 방황하는 반신을 만났다. 그의 절박함을 목격한 오로라는 자신의 거친 친구가 잊어버린 자아를 되찾도록 도와줄 방법을 찾기로 결심했고 프렐요드의 가장 먼 곳으로 여정을 떠났다.`,
        image: require('../../assets/lol_hero_icons/Aurora.png'),
        background_image: require('../../assets/lol_hero_icons/background/Aurora.jpg'),
        stats: {"hp": 607, "hpperlevel": 110, "mp": 475, "mpperlevel": 30, "movespeed": 335, "armor": 23, "armorperlevel": 4.5, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 6, "hpregenperlevel": 0.55, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 53, "attackdamageperlevel": 3, "attackspeedperlevel": 2, "attackspeed": 0.668},
        spells: [
            {
                id: 'passive',
                name: '영혼 방호술',
                description: `오로라가 스킬 또는 공격으로 피해를 입힌 적의 영혼을 제령합니다. 제령된 영혼은 오로라 주위를 따라다니며 체력을 회복시키고 이동 속도를 높입니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/AuroraPassive.Aurora.png')
            },
            {
                id: 'AuroraQ',
                name: '이중 저주',
                description: `오로라가 적중한 적에게 저주를 내리는 에너지를 발사합니다. 재사용하면 내린 저주를 다시 불러들이며 이때 저주에 적중한 경로상의 적에게 피해를 입힙니다.`,
                cooldownBurn: '8/7.5/7/6.5/6',
                image: require('../../assets/lol_hero_icons/skills/AuroraQ.png')
            },
            {
                id: 'AuroraW',
                name: '장막 너머로',
                description: `오로라가 지정한 방향으로 뛰어올라 착지 시 영혼 세계에 진입하고 짧은 시간 동안 투명 상태가 됩니다.`,
                cooldownBurn: '22/21/20/19/18',
                image: require('../../assets/lol_hero_icons/skills/AuroraW.png')
            },
            {
                id: 'AuroraE',
                name: '마법의 문',
                description: `오로라가 세계를 합치고 영혼 마법을 발사해 적에게 피해를 입히며 둔화시킨 다음 안전한 뒤쪽으로 깡충 뜁니다.`,
                cooldownBurn: '15/14/13/12/11',
                image: require('../../assets/lol_hero_icons/skills/AuroraE.png')
            },
            {
                id: 'AuroraR',
                name: '세계의 경계',
                description: `오로라가 지정한 방향으로 뛰어올라 적중한 적에게 피해를 입히고 둔화시키는 충격파를 방출합니다. 이후 적을 내부에 가두고 오로라가 한쪽에서 반대편으로 이동할 수 있는 영역을 생성합니다.`,
                cooldownBurn: '140/120/100',
                image: require('../../assets/lol_hero_icons/skills/AuroraR.png')
            },
        ],
    },
    {
        numID: 13,
        id: 'Azir_mid',
        Key: '268',
        name: '아지르',
        title: '사막의 황제',
        lore: `불멸을 꿈꾸던 고대 슈리마의 거만한 황제, 아지르. 그의 오만은 생애 최전성기에 그를 배반과 죽음으로 몰아 넣었다. 그 후 수천 년이 흘렀고, 아지르는 가공할 힘을 지닌 초월체로 다시 태어났다. 사막 아래 묻혀 있던 그의 도시가 지표면 위로 솟아 오르는 장관을 목도하며 아지르는 슈리마 제국의 옛 영광을 되살리겠다고 다짐한다.`,
        blurb: `불멸을 꿈꾸던 고대 슈리마의 거만한 황제, 아지르. 그의 오만은 생애 최전성기에 그를 배반과 죽음으로 몰아 넣었다. 그 후 수천 년이 흘렀고, 아지르는 가공할 힘을 지닌 초월체로 다시 태어났다. 사막 아래 묻혀 있던 그의 도시가 지표면 위로 솟아 오르는 장관을 목도하며 아지르는 슈리마 제국의 옛 영광을 되살리겠다고 다짐한다.`,
        image: require('../../assets/lol_hero_icons/Azir.png'),
        background_image: require('../../assets/lol_hero_icons/background/Azir.jpg'),
        stats: {"hp": 550, "hpperlevel": 119, "mp": 320, "mpperlevel": 40, "movespeed": 335, "armor": 25, "armorperlevel": 5, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 525, "hpregen": 5, "hpregenperlevel": 0.75, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 52, "attackdamageperlevel": 3.5, "attackspeedperlevel": 6, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '슈리마의 유산',
                description: `아지르는 무너진 아군 포탑이나 적 포탑 위에 태양 포탑을 소환할 수 있습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Azir_Passive.png')
            },
            {
                id: 'AzirQWrapper',
                name: '사막의 맹습',
                description: `아지르가 모든 모래 병사를 특정 위치로 보냅니다. 모래 병사들은 통과하는 적에게 마법 피해를 입히고, 1초 둔화 효과를 적용합니다.`,
                cooldownBurn: '14/12/10/8/6',
                image: require('../../assets/lol_hero_icons/skills/AzirQWrapper.png')
            },
            {
                id: 'AzirW',
                name: '일어나라!',
                description: `아지르가 모래 병사를 소환하여 근처에 있는 대상을 공격합니다. 아지르의 기본 공격은 모래 병사의 공격 범위 내에 있는 대상에게 가해집니다. 아지르와 모래 병사의 공격은 일직선 상의 적들에게 마법 피해를 입힙니다. 일어나라!는 또한 기본 지속 효과로 아지르와 모래 병사들의 공격 속도를 상승시킵니다.`,
                cooldownBurn: '1.5',
                image: require('../../assets/lol_hero_icons/skills/AzirW.png')
            },
            {
                id: 'AzirEWrapper',
                name: '신기루',
                description: `아지르에게 잠시 보호막이 생성되고 아지르가 모래 병사 중 하나에게 질주하여 적에게 피해를 입힙니다. 적 챔피언에게 부딪친 경우에는 배치 가능한 새로운 모래 병사를 즉시 준비하고 질주를 멈춥니다.`,
                cooldownBurn: '22/20.5/19/17.5/16',
                image: require('../../assets/lol_hero_icons/skills/AzirEWrapper.png')
            },
            {
                id: 'AzirR',
                name: '황제의 진영',
                description: `아지르가 일렬 횡대의 병사들을 앞으로 돌진시켜 적들을 밀어내고 피해를 입힙니다.`,
                cooldownBurn: '120/105/90',
                image: require('../../assets/lol_hero_icons/skills/AzirR.png')
            },
        ],
    },
    {
        numID: 14,
        id: 'Bard_sup',
        Key: '432',
        name: '바드',
        title: '영겁의 수호자',
        lore: `별 너머에서 온 여행자 바드는 뜻밖의 발견과 예기치 않은 행운을 수호하며, 삶이 무심한 혼돈을 견딜 수 있도록 우주의 균형을 유지하기 위해 싸운다. 룬테라 인들은 바드가 신비하고 초월자적인 존재라는 내용의 노래를 곧잘 흥얼거리지만, 이 우주의 방랑자가 강력한 마법의 힘이 깃든 유물에 집착한다는 사실은 모든 룬테라 인이 동의하는 바다. 하지만 유익한 정령들이 내는 환희 어린 합창에 둘러싸인 바드가 악의를 지니고 있는 것은 아닐 터이다. 바드는 필멸의 존재보다 더 큰 선을 지키고자 할 뿐이다... 다만 그 방식이 기이할 뿐.`,
        blurb: `별 너머에서 온 여행자 바드는 뜻밖의 발견과 예기치 않은 행운을 수호하며, 삶이 무심한 혼돈을 견딜 수 있도록 우주의 균형을 유지하기 위해 싸운다. 룬테라 인들은 바드가 신비하고 초월자적인 존재라는 내용의 노래를 곧잘 흥얼거리지만, 이 우주의 방랑자가 강력한 마법의 힘이 깃든 유물에 집착한다는 사실은 모든 룬테라 인이 동의하는 바다. 하지만 유익한 정령들이 내는 환희 어린 합창에 둘러싸인 바드가 악의를 지니고 있는 것은 아닐 터이다. 바드는 필멸의...`,
        image: require('../../assets/lol_hero_icons/Bard.png'),
        background_image: require('../../assets/lol_hero_icons/background/Bard.jpg'),
        stats: {"hp": 630, "hpperlevel": 103, "mp": 350, "mpperlevel": 50, "movespeed": 330, "armor": 34, "armorperlevel": 5, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 500, "hpregen": 5.5, "hpregenperlevel": 0.55, "mpregen": 6, "mpregenperlevel": 0.45, "crit": 0, "critperlevel": 0, "attackdamage": 52, "attackdamageperlevel": 3, "attackspeedperlevel": 2, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '방랑자의 부름',
                description: `정령: 바드에게 이끌려 모여든 정령들이 바드의 기본 공격을 도와 추가 마법 피해를 입힙니다. 바드가 고대의 종을 충분히 모으면 정령이 일정 영역에 피해를 입히며 적중당한 적을 둔화시킵니다.고대의 종: 맵상의 무작위 장소에 바드가 모을 수 있는 고대의 종이 나타납니다. 고대의 종을 획득하면 경험치, 마나 회복 효과, 비전투 시 이동 속도를 얻습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Bard_Passive.png')
            },
            {
                id: 'BardQ',
                name: '우주의 결속',
                description: `바드가 투사체를 발사하여, 처음 적중하는 적을 둔화시키고 관통합니다. 관통한 후 벽을 맞히면 처음 적중한 적을 기절시킵니다. 관통 후 다른 적에게 적중하면 두 대상을 모두 기절시킵니다.`,
                cooldownBurn: '11/10/9/8/7',
                image: require('../../assets/lol_hero_icons/skills/BardQ.png')
            },
            {
                id: 'BardW',
                name: '수호자의 성소',
                description: `짧은 시간 동안 치유력이 증가하는 체력 회복 성소를 드러냅니다. 성소는 처음 발을 들이는 아군을 치유하고 속도를 높인 후 사라집니다.`,
                cooldownBurn: '0',
                image: require('../../assets/lol_hero_icons/skills/BardW.png')
            },
            {
                id: 'BardE',
                name: '신비한 차원문',
                description: `바드가 근처 지형지물에 차원문을 엽니다. 아군과 적 챔피언이 모두 이 차원문을 이용해 정해진 방향으로 해당 지형지물을 통과할 수 있습니다.`,
                cooldownBurn: '22/20.5/19/17.5/16',
                image: require('../../assets/lol_hero_icons/skills/BardE.png')
            },
            {
                id: 'BardR',
                name: '운명의 소용돌이',
                description: `바드가 목표 지점에 영적 에너지를 발사하여 잠시 동안 모든 유닛과 포탑을 정지시킵니다.`,
                cooldownBurn: '110/95/80',
                image: require('../../assets/lol_hero_icons/skills/BardR.png')
            },
        ],
    },
    {
        numID: 15,
        id: 'Belveth_jug',
        Key: '200',
        name: '벨베스',
        title: '공허의 여제',
        lore: `잡아먹힌 도시를 재료로 만들어진 사악한 여제 벨베스는 룬테라의 종말이자, 자신이 만든 끔찍한 현실의 시작이기도 하다. 그녀는 지상 세계의 바뀐 역사와 지식, 기억의 시대에 힘입어 새로운 경험과 감정에 대한 갈망을 채우고, 마주치는 모든 것을 집어삼킨다. 하지만 하나의 세계만으로 굶주림을 채우지 못한 벨베스는 공허의 옛 주인들에게 눈을 돌린다...`,
        blurb: `잡아먹힌 도시를 재료로 만들어진 사악한 여제 벨베스는 룬테라의 종말이자, 자신이 만든 끔찍한 현실의 시작이기도 하다. 그녀는 지상 세계의 바뀐 역사와 지식, 기억의 시대에 힘입어 새로운 경험과 감정에 대한 갈망을 채우고, 마주치는 모든 것을 집어삼킨다. 하지만 하나의 세계만으로 굶주림을 채우지 못한 벨베스는 공허의 옛 주인들에게 눈을 돌린다...`,
        image: require('../../assets/lol_hero_icons/Belveth.png'),
        background_image: require('../../assets/lol_hero_icons/background/Belveth.jpg'),
        stats: {"hp": 610, "hpperlevel": 99, "mp": 60, "mpperlevel": 0, "movespeed": 340, "armor": 32, "armorperlevel": 4.7, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 150, "hpregen": 6, "hpregenperlevel": 0.6, "mpregen": 0, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 60, "attackdamageperlevel": 1.5, "attackspeedperlevel": 0, "attackspeed": 0.85},
        spells: [
            {
                id: 'passive',
                name: '연보랏빛 죽음 ',
                description: `벨베스가 대형 미니언과 몬스터 및 챔피언 처치에 관여한 후 공격 속도 영구 중첩을 얻습니다. 또한 스킬을 사용한 후 일시적인 추가 공격 속도를 얻습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Belveth_Passive.png')
            },
            {
                id: 'BelvethQ',
                name: '공허 쇄도',
                description: `벨베스가 선택한 방향으로 돌진해 경로상의 모든 적에게 피해를 입힙니다.`,
                cooldownBurn: '1',
                image: require('../../assets/lol_hero_icons/skills/BelvethQ.png')
            },
            {
                id: 'BelvethW',
                name: '위와 아래',
                description: `벨베스가 지면에 꼬리를 내리쳐 적에게 피해를 입히며 공중으로 띄워 올리고 둔화시킵니다.`,
                cooldownBurn: '12/11/10/9/8',
                image: require('../../assets/lol_hero_icons/skills/BelvethW.png')
            },
            {
                id: 'BelvethE',
                name: '여제의 소용돌이',
                description: `벨베스가 제자리에 가만히 서서 정신을 집중하며 가장 체력이 낮은 적을 노리고 생명력 흡수와 피해량 감소 효과를 부여하는 칼바람 소용돌이를 일으킵니다.`,
                cooldownBurn: '20/19/18/17/16',
                image: require('../../assets/lol_hero_icons/skills/BelvethE.png')
            },
            {
                id: 'BelvethR',
                name: '끝없는 연회',
                description: `벨베스가 공허 산호 잔해를 소모해 본모습으로 변신하며 최대 체력, 공격 사거리, 공격 속도, 비전투 시 이동 속도가 증가합니다. 공허 에픽 몬스터의 공허 산호 잔해를 소모하면 궁극기 지속시간이 늘어나며 공허 빨판상어를 소환할 힘이 생깁니다.`,
                cooldownBurn: '1',
                image: require('../../assets/lol_hero_icons/skills/BelvethR.png')
            },
        ],
    },
    {
        numID: 16,
        id: 'Blitzcrank_sup',
        Key: '53',
        name: '블리츠크랭크',
        title: '거대 증기 골렘',
        lore: `블리츠크랭크는 지하도시 자운의 기술이 만들어낸 거대한 기계로 사실상 파괴불가능에 가깝다. 원래는 자운을 뒤덮은 유독 폐기물을 처리하기 위해 만들어진 골렘이었으나, 연약하기 짝이 없는 자운 시민들을 지키기 위해서는 폐기물을 치우는 것만으로는 모자란다고 판단하여 스스로 형체를 변형시키기에 이르렀다. 블리츠크랭크는 골렘다운 힘과 내구성을 사심 없이 활용하여 사람들을 보호하고, 말썽꾼이 눈에 띄면 강철 주먹을 내지르거나 에너지를 분출하여 진압한다.`,
        blurb: `블리츠크랭크는 지하도시 자운의 기술이 만들어낸 거대한 기계로 사실상 파괴불가능에 가깝다. 원래는 자운을 뒤덮은 유독 폐기물을 처리하기 위해 만들어진 골렘이었으나, 연약하기 짝이 없는 자운 시민들을 지키기 위해서는 폐기물을 치우는 것만으로는 모자란다고 판단하여 스스로 형체를 변형시키기에 이르렀다. 블리츠크랭크는 골렘다운 힘과 내구성을 사심 없이 활용하여 사람들을 보호하고, 말썽꾼이 눈에 띄면 강철 주먹을 내지르거나 에너지를 분출하여 진압한다.`,
        image: require('../../assets/lol_hero_icons/Blitzcrank.png'),
        background_image: require('../../assets/lol_hero_icons/background/Blitzcrank.jpg'),
        stats: {"hp": 600, "hpperlevel": 109, "mp": 267, "mpperlevel": 40, "movespeed": 325, "armor": 37, "armorperlevel": 4.7, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 7.5, "hpregenperlevel": 0.75, "mpregen": 8.5, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 62, "attackdamageperlevel": 3.5, "attackspeedperlevel": 1.13, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '마나 보호막',
                description: `체력이 낮아지면 블리츠크랭크가 마나에 비례하여 보호막을 얻습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Blitzcrank_ManaBarrier.png')
            },
            {
                id: 'RocketGrab',
                name: '로켓 손',
                description: `블리츠크랭크가 오른손을 발사하여 앞에 있는 적을 붙잡아 당기면서 피해를 입힙니다.`,
                cooldownBurn: '20/19/18/17/16',
                image: require('../../assets/lol_hero_icons/skills/RocketGrab.png')
            },
            {
                id: 'Overdrive',
                name: '폭주',
                description: `블리츠크랭크가 힘을 충전하여 이동 및 공격 속도를 크게 향상시킵니다. 이 효과가 끝나면 일시적으로 이동 속도가 느려집니다.`,
                cooldownBurn: '15',
                image: require('../../assets/lol_hero_icons/skills/Overdrive.png')
            },
            {
                id: 'PowerFist',
                name: '강철 주먹',
                description: `블리츠크랭크가 주먹에 힘을 모아 다음 공격 시 적에게 두 배의 피해를 입히고 적을 공중으로 띄웁니다.`,
                cooldownBurn: '9/8/7/6/5',
                image: require('../../assets/lol_hero_icons/skills/PowerFist.png')
            },
            {
                id: 'StaticField',
                name: '정전기장',
                description: `블리츠크랭크의 공격을 받은 적에게 표식을 남기고 1초 후 번개 피해를 입힙니다. 스킬 사용 시 주변 적의 보호막을 제거하고 피해를 입히며 잠시 침묵에 걸리게 합니다.`,
                cooldownBurn: '60/40/20',
                image: require('../../assets/lol_hero_icons/skills/StaticField.png')
            },
        ],
    },
    {
        numID: 17,
        id: 'Brand',
        Key: '63',
        name: '브랜드',
        title: '타오르는 복수',
        lore: `케간 로디는 얼음이 뒤덮인 프렐요드의 어느 부족민이었으나 거대한 힘의 유혹에 넘어가 브랜드가 되었다. 전설처럼 전해지는 세계 룬 중 하나를 찾아나선 그는 막판에 동료들을 배신하고 세계 룬을 혼자 차지했다. 그리고 다음 순간, 케간 로디는 더 이상 존재하지 않았다. 영혼은 불에 타 사라지고, 육신은 살아 있는 화염에 휩싸여 브랜드가 되어버린 것이다. 브랜드는 이제 또 다른 세계 룬을 찾아 발로란을 헤매며, 필멸자는 십여 번을 다시 태어나 산다 해도 겪지 못할 고통에 대해 복수를 다짐하고 있다.`,
        blurb: `케간 로디는 얼음이 뒤덮인 프렐요드의 어느 부족민이었으나 거대한 힘의 유혹에 넘어가 브랜드가 되었다. 전설처럼 전해지는 세계 룬 중 하나를 찾아나선 그는 막판에 동료들을 배신하고 세계 룬을 혼자 차지했다. 그리고 다음 순간, 케간 로디는 더 이상 존재하지 않았다. 영혼은 불에 타 사라지고, 육신은 살아 있는 화염에 휩싸여 브랜드가 되어버린 것이다. 브랜드는 이제 또 다른 세계 룬을 찾아 발로란을 헤매며, 필멸자는 십여 번을 다시 태어나 산다 해도...`,
        image: require('../../assets/lol_hero_icons/Brand.png'),
        background_image: require('../../assets/lol_hero_icons/background/Brand.jpg'),
        stats: {"hp": 570, "hpperlevel": 105, "mp": 469, "mpperlevel": 21, "movespeed": 340, "armor": 27, "armorperlevel": 4.2, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 5.5, "hpregenperlevel": 0.55, "mpregen": 10.65, "mpregenperlevel": 0.6, "crit": 0, "critperlevel": 0, "attackdamage": 57, "attackdamageperlevel": 3, "attackspeedperlevel": 2, "attackspeed": 0.681},
        spells: [
            {
                id: 'passive',
                name: '불길',
                description: `브랜드의 스킬이 적을 불길로 휘감아, 4초 동안 피해를 줍니다. 불길은 세 번까지 중첩되며, 적이 불타는 동안 브랜드가 적을 처치하면 마나를 회복합니다. 챔피언이나 대형 몬스터에 불길이 세 번 중첩되면 불안정해져 2초 후 폭발하고, 근처 적에게 스킬 효과를 적용하며 막대한 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/BrandP.png')
            },
            {
                id: 'BrandQ',
                name: '불태우기',
                description: `브랜드가 커다란 불덩이를 발사하여 마법 피해를 입힙니다. 만약 대상이 불타고 있다면 태우기 스킬에 당한 대상은 1.5초 동안 기절합니다.`,
                cooldownBurn: '8/7.5/7/6.5/6',
                image: require('../../assets/lol_hero_icons/skills/BrandQ.png')
            },
            {
                id: 'BrandW',
                name: '화염 기둥',
                description: `잠시 후 목표 지점에 화염 기둥을 생성하여 해당 지역에 있는 적 유닛에게 마법 피해를 입힙니다. 불이 붙은 적은 25%의 추가 피해를 받습니다.`,
                cooldownBurn: '10/9.5/9/8.5/8',
                image: require('../../assets/lol_hero_icons/skills/BrandW.png')
            },
            {
                id: 'BrandE',
                name: '발화',
                description: `브랜드가 목표에 강력한 폭발을 일으켜 마법 피해를 입힙니다. 폭발은 주변 적들에게 퍼집니다. 대상이 불타는 상태라면 발화의 전파 범위가 두 배가 됩니다.`,
                cooldownBurn: '13/12/11/10/9',
                image: require('../../assets/lol_hero_icons/skills/BrandE.png')
            },
            {
                id: 'BrandR',
                name: '파멸의 불덩이',
                description: `브랜드가 파괴적인 화염을 발사합니다. 화염은 브랜드와 주변 적들에게 최대 5번 튕기며, 튕길 때마다 마법 피해를 입힙니다. 화염은 불길 중첩이 적은 챔피언에게 우선적으로 튕깁니다. 불타고 있는 적이 파멸의 불덩이를 맞으면 잠깐 동안 이동 속도가 느려집니다.`,
                cooldownBurn: '110/100/90',
                image: require('../../assets/lol_hero_icons/skills/BrandR.png')
            },
        ],
    },
    {
        numID: 18,
        id: 'Braum_sup',
        Key: '201',
        name: '브라움',
        title: '프렐요드의 심장',
        lore: `축복받은 거대 이두박근과 그보다도 더 크고 호방한 마음을 지닌 브라움은 프렐요드 주민들이 사랑해 마지않는 영웅이다. 프로스텔드 북방에서 연회가 열리면 빠지지 않는 순서가 바로 브라움의 팔힘에 건배를 하는 것이다. 전설에 따르면 브라움은 단 하룻밤에 오크나무 숲 전체를 베어버렸고, 산 하나를 주먹으로 부수어 돌무더기로 만들어 버렸다고 한다. 마법이 깃든 동굴 문짝을 방패 삼아 들고, 근육만큼이나 커다란 콧수염 아래 사람 좋은 미소를 활짝 띤 브라움은 얼어붙은 북방을 배회한다. 도움이 필요한 이들의 진정한 친구가 되기 위해.`,
        blurb: `축복받은 거대 이두박근과 그보다도 더 크고 호방한 마음을 지닌 브라움은 프렐요드 주민들이 사랑해 마지않는 영웅이다. 프로스텔드 북방에서 연회가 열리면 빠지지 않는 순서가 바로 브라움의 팔힘에 건배를 하는 것이다. 전설에 따르면 브라움은 단 하룻밤에 오크나무 숲 전체를 베어버렸고, 산 하나를 주먹으로 부수어 돌무더기로 만들어 버렸다고 한다. 마법이 깃든 동굴 문짝을 방패 삼아 들고, 근육만큼이나 커다란 콧수염 아래 사람 좋은 미소를 활짝 띤 브라움은...`,
        image: require('../../assets/lol_hero_icons/Braum.png'),
        background_image: require('../../assets/lol_hero_icons/background/Braum.jpg'),
        stats: {"hp": 610, "hpperlevel": 112, "mp": 311, "mpperlevel": 45, "movespeed": 335, "armor": 47, "armorperlevel": 5.2, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 8.5, "hpregenperlevel": 1, "mpregen": 7, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 55, "attackdamageperlevel": 3.2, "attackspeedperlevel": 3.5, "attackspeed": 0.644},
        spells: [
            {
                id: 'passive',
                name: '뇌진탕 펀치',
                description: `브라움의 기본 공격은 뇌진탕 펀치를 적용시킵니다. 첫 번째 중첩이 적용된 후에는 아군의 기본 공격 역시 뇌진탕 펀치 중첩을 적용합니다. 중첩이 4번 쌓이면 대상은 기절하며 마법 피해를 입습니다. 다음 몇 초 동안은 중첩이 새로 쌓이지 않는 대신 브라움의 공격으로부터 추가 마법 피해를 입습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Braum_Passive.png')
            },
            {
                id: 'BraumQ',
                name: '동상',
                description: `브라움이 방패에서 빙결을 뿜어내 둔화를 적용하고 마법 피해를 입힙니다.뇌진탕 펀치 중첩이 1회 쌓입니다.`,
                cooldownBurn: '8/7.5/7/6.5/6',
                image: require('../../assets/lol_hero_icons/skills/BraumQ.png')
            },
            {
                id: 'BraumW',
                name: '내가 지킨다',
                description: `브라움이 대상 아군 챔피언이나 미니언에게 도약합니다. 대상에게 다다르면 브라움과 아군은 몇 초 동안 방어력과 마법 저항력이 오릅니다.`,
                cooldownBurn: '12/11/10/9/8',
                image: require('../../assets/lol_hero_icons/skills/BraumW.png')
            },
            {
                id: 'BraumE',
                name: '불굴',
                description: `브라움이 몇 초 동안 한 방향으로 방패를 들어 올려, 날아오는 투사체를 대신 맞고 파괴합니다. 첫 번째 공격은 아무 피해도 주지 않고, 이후 해당 방향에서 오는 공격은 피해량이 줄어듭니다.`,
                cooldownBurn: '16/14/12/10/8',
                image: require('../../assets/lol_hero_icons/skills/BraumE.png')
            },
            {
                id: 'BraumRWrapper',
                name: '빙하 균열',
                description: `브라움이 지면을 내리쳐 부근과 전방 직선상의 적들을 띄워올립니다. 이 직선을 따라 균열이 가며 적들을 둔화시킵니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/BraumRWrapper.png')
            },
        ],
    },
    {
        numID: 19,
        id: 'Briar_jug',
        Key: '233',
        name: '브라이어',
        title: '억눌린 허기',
        lore: `검은 장미단의 실패한 실험으로 탄생한 브라이어는 피를 향한 갈망을 통제할 수 없어서 특수 족쇄로 광기를 다스려야 했다. 몇 년이나 갇혀있던 끝에, 살아있는 무기인 브라이어는 구속에서 벗어나 바깥세상에 풀려났다. 브라이어는 이제 누구의 통제도 받지 않는다. 지식과 피에 목마른 브라이어는 마음껏 날뛸 기회를 마다하지 않는다. 물론 그 뒤에 광증을 억누르는 것이 쉽진 않지만.`,
        blurb: `검은 장미단의 실패한 실험으로 탄생한 브라이어는 피를 향한 갈망을 통제할 수 없어서 특수 족쇄로 광기를 다스려야 했다. 몇 년이나 갇혀있던 끝에, 살아있는 무기인 브라이어는 구속에서 벗어나 바깥세상에 풀려났다. 브라이어는 이제 누구의 통제도 받지 않는다. 지식과 피에 목마른 브라이어는 마음껏 날뛸 기회를 마다하지 않는다. 물론 그 뒤에 광증을 억누르는 것이 쉽진 않지만.`,
        image: require('../../assets/lol_hero_icons/Briar.png'),
        background_image: require('../../assets/lol_hero_icons/background/Briar.jpg'),
        stats: {"hp": 590, "hpperlevel": 95, "mp": 0, "mpperlevel": 0, "movespeed": 340, "armor": 30, "armorperlevel": 4.2, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 0, "hpregenperlevel": 0, "mpregen": 0, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 60, "attackdamageperlevel": 3, "attackspeedperlevel": 2, "attackspeed": 0.644},
        spells: [
            {
                id: 'passive',
                name: '진홍빛 저주',
                description: `브라이어는 기본 공격과 스킬로 중첩 가능한 출혈 효과를 적용하며, 출혈 피해의 일정 비율만큼 체력을 회복합니다. 늘 허기진 브라이어는 잃은 체력에 비례해 체력 회복량이 증가하는 대신 기본 체력 재생이 없습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/BriarP.png')
            },
            {
                id: 'BriarQ',
                name: '짜릿한 돌격',
                description: `브라이어가 대상에게 도약 후 (고통의) 뒤꿈치로 적을 가격해 기절시키고 방어구를 깨부숩니다.`,
                cooldownBurn: '13/12/11/10/9',
                image: require('../../assets/lol_hero_icons/skills/BriarQ.png')
            },
            {
                id: 'BriarW',
                name: '핏빛 광분 / 식욕 폭발',
                description: `브라이어가 앞으로 도약해 족쇄를 깨부수고 핏빛 광분 상태에 들어가 가장 가까운 적을 가차 없이 추격합니다. (챔피언 우선) 핏빛 광분 상태에서 공격 속도와 이동 속도가 상승하며 기본 공격으로 대상 주변에 피해를 입힙니다.이 스킬을 핏빛 광분 상태에서 재사용하면 다음 기본 공격 시 적을 베어 먹어 대상이 잃은 체력에 비례해 추가 피해를 입히고 피해량에 비례해 체력을 회복합니다.`,
                cooldownBurn: '14/13/12/11/10',
                image: require('../../assets/lol_hero_icons/skills/BriarW.png')
            },
            {
                id: 'BriarE',
                name: '오싹한 비명',
                description: `브라이어가 마음을 다잡아 핏빛 광분 상태에서 벗어나고, 힘을 모아 강력한 비명을 내질러 적에게 피해를 입히고 둔화시킵니다. 충전 중에는 받는 피해가 감소하고 최대 체력의 일정 비율만큼 회복합니다. 완전히 충전된 비명은 적을 뒤로 밀치고, 벽에 부딪히는 적에게 추가 피해를 입히며 기절시킵니다.`,
                cooldownBurn: '16',
                image: require('../../assets/lol_hero_icons/skills/BriarE.png')
            },
            {
                id: 'BriarR',
                name: '불가항력적 죽음',
                description: `브라이어가 족쇄의 혈석을 발로 찬 다음, 혈석이 첫 번째로 적중한 챔피언을 먹잇감으로 지정하고 대상을 향해 날아갑니다. 착지 시 다른 주변 적을 공포에 빠트리고 피의 갈증에 완전히 사로잡힙니다. 이후 먹잇감을 죽을 때까지 쫓으며, 핏빛 광분 효과와 방어력, 마법 저항력, 생명력 흡수, 이동 속도를 추가로 얻습니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/BriarR.png')
            },
        ],
    },
    {
        numID: 20,
        id: 'Caitlyn_adc',
        Key: '51',
        name: '케이틀린',
        title: '필트오버의 보안관',
        lore: `필트오버 제일가는 평화 수호자로 명성이 자자한 케이틀린은 이 도시에서 가장 뛰어난 명사수이기도 하다. 그 잡기 어렵다는 필트오버의 범죄 조직들도 그녀의 손에 소탕되었다. 케이틀린은 주로 바이와 짝을 이루어, 바이의 불같은 성미를 자신의 냉철함으로 보완하며 멋진 콤비로 활약한다. 케이틀린의 마법공학 소총이 독보적으로 우수한 성능인 것은 사실이지만, 정작 케이틀린의 가장 강력한 무기는 따로 있다. 필트오버에서 활개칠 생각을 할 정도로 무모한 범죄자를 정교한 덫을 놓아 잡아버리는 그녀의 우월한 지능이 바로 그것이다.`,
        blurb: `필트오버 제일가는 평화 수호자로 명성이 자자한 케이틀린은 이 도시에서 가장 뛰어난 명사수이기도 하다. 그 잡기 어렵다는 필트오버의 범죄 조직들도 그녀의 손에 소탕되었다. 케이틀린은 주로 바이와 짝을 이루어, 바이의 불같은 성미를 자신의 냉철함으로 보완하며 멋진 콤비로 활약한다. 케이틀린의 마법공학 소총이 독보적으로 우수한 성능인 것은 사실이지만, 정작 케이틀린의 가장 강력한 무기는 따로 있다. 필트오버에서 활개칠 생각을 할 정도로 무모한 범죄자를...`,
        image: require('../../assets/lol_hero_icons/Caitlyn.png'),
        background_image: require('../../assets/lol_hero_icons/background/Caitlyn.jpg'),
        stats: {"hp": 580, "hpperlevel": 107, "mp": 315, "mpperlevel": 40, "movespeed": 325, "armor": 27, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 650, "hpregen": 3.5, "hpregenperlevel": 0.55, "mpregen": 7.4, "mpregenperlevel": 0.7, "crit": 0, "critperlevel": 0, "attackdamage": 60, "attackdamageperlevel": 3.8, "attackspeedperlevel": 4, "attackspeed": 0.681},
        spells: [
            {
                id: 'passive',
                name: '헤드샷',
                description: `케이틀린은 덫 또는 투망에 걸린 대상을 공격할 때나 일정 횟수 이상의 기본 공격을 했을 때 헤드샷을 발사하여 치명타 확률에 비례한 추가 피해를 입힙니다. 덫에 걸리거나 투망에 맞은 대상에게는 케이틀린의 헤드샷 공격 사거리가 두 배가 됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Caitlyn_Headshot.png')
            },
            {
                id: 'CaitlynQ',
                name: '필트오버 피스메이커',
                description: `케이틀린이 소총을 1초 동안 조준한 후 관통하는 탄환을 발사하여 물리 피해를 입힙니다. (다음 명중하는 대상에게는 더 낮은 피해가 들어갑니다.)`,
                cooldownBurn: '10/9/8/7/6',
                image: require('../../assets/lol_hero_icons/skills/CaitlynQ.png')
            },
            {
                id: 'CaitlynW',
                name: '요들잡이 덫',
                description: `케이틀린이 함정을 설치합니다. 함정이 발동하면 함정에 걸린 적 챔피언은 1.5초간 모습이 드러나며 이동할 수 없게 되고, 케이틀린의 헤드샷이 강화됩니다.`,
                cooldownBurn: '0.5',
                image: require('../../assets/lol_hero_icons/skills/CaitlynW.png')
            },
            {
                id: 'CaitlynE',
                name: '90구경 투망',
                description: `케이틀린이 무거운 그물을 발사하여 적을 느리게 합니다. 그 반동으로 케이틀린은 뒤로 밀려납니다.`,
                cooldownBurn: '16/14/12/10/8',
                image: require('../../assets/lol_hero_icons/skills/CaitlynE.png')
            },
            {
                id: 'CaitlynR',
                name: '비장의 한 발',
                description: `케이틀린이 공을 들인 완벽한 사격을 하여 먼 거리에서 하나의 대상에게 큰 피해를 입힙니다. 적 챔피언이 자신의 아군을 위해 총알을 막아낼 수 있습니다.`,
                cooldownBurn: '90',
                image: require('../../assets/lol_hero_icons/skills/CaitlynR.png')
            },
        ],
    },
    {
        numID: 21,
        id: 'Camille_top_sup',
        Key: '164',
        name: '카밀',
        title: '강철의 그림자',
        lore: `카밀은 법이라는 테두리 밖에서 활동할 수 있도록 아예 자신의 몸을 무기화해 버렸다. 우아한 엘리트 첩보원이자 페로스 가문이 배출한 최고 정보 요원인 그녀의 임무는 고도화된 필트오버와 그 하층부의 자운이 원활하게 돌아가도록 기여하는 것이다. 적응력이 뛰어나고, 정확성을 중시하므로 엉성한 기술은 반드시 정리해 버려야 할 수치로 여긴다. 마법공학 증강을 통해 최고가 되려는 노력, 그리고 자신이 품고 있는 칼만큼이나 예리한 지성을 지닌 카밀의 모습을 보면, 그녀가 이제는 인간 여자보다는 기계에 가까운 존재가 아닌가 하는 의구심 마저 든다.`,
        blurb: `카밀은 법이라는 테두리 밖에서 활동할 수 있도록 아예 자신의 몸을 무기화해 버렸다. 우아한 엘리트 첩보원이자 페로스 가문이 배출한 최고 정보 요원인 그녀의 임무는 고도화된 필트오버와 그 하층부의 자운이 원활하게 돌아가도록 기여하는 것이다. 적응력이 뛰어나고, 정확성을 중시하므로 엉성한 기술은 반드시 정리해 버려야 할 수치로 여긴다. 마법공학 증강을 통해 최고가 되려는 노력, 그리고 자신이 품고 있는 칼만큼이나 예리한 지성을 지닌 카밀의 모습을 보면...`,
        image: require('../../assets/lol_hero_icons/Camille.png'),
        background_image: require('../../assets/lol_hero_icons/background/Camille.jpg'),
        stats: {"hp": 670, "hpperlevel": 99, "mp": 339, "mpperlevel": 52, "movespeed": 340, "armor": 35, "armorperlevel": 5, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 8.5, "hpregenperlevel": 0.8, "mpregen": 8.15, "mpregenperlevel": 0.75, "crit": 0, "critperlevel": 0, "attackdamage": 68, "attackdamageperlevel": 3.8, "attackspeedperlevel": 2.5, "attackspeed": 0.644},
        spells: [
            {
                id: 'passive',
                name: '적응형 방어 체계',
                description: `챔피언에게 기본 공격 시 잠시 동안 카밀 최대 체력의 일부에 해당하는 피해를 흡수하는 보호막이 생깁니다. 적 챔피언이 어떤 피해를 주는지에 따라 물리 혹은 마법 보호막 중 하나만 생성됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Camille_Passive.png')
            },
            {
                id: 'CamilleQ',
                name: '정확성 프로토콜',
                description: `카밀이 다음 기본 공격 시 추가 피해를 입히고 이동 속도가 증가합니다. 이 스킬은 사용 후 일정 시간 동안 재사용할 수 있으며, 잠시 기다렸다가 재사용하면 추가 피해량이 크게 증가합니다.`,
                cooldownBurn: '9/8/7/6/5',
                image: require('../../assets/lol_hero_icons/skills/CamilleQ.png')
            },
            {
                id: 'CamilleW',
                name: '전술적 휩쓸기',
                description: `카밀이 잠시 후 전방을 원뿔형으로 휩쓸어 피해를 입힙니다. 원뿔의 바깥쪽 절반에 있는 적은 이동 속도가 느려지고 추가 피해를 입으며, 카밀의 체력을 회복시킵니다.`,
                cooldownBurn: '17/15.5/14/12.5/11',
                image: require('../../assets/lol_hero_icons/skills/CamilleW.png')
            },
            {
                id: 'CamilleE',
                name: '갈고리 발사',
                description: `카밀이 벽으로 자신을 끌어당겼다가 다시 도약해 착지 시 적 챔피언들을 기절시킵니다.`,
                cooldownBurn: '16/15/14/13/12',
                image: require('../../assets/lol_hero_icons/skills/CamilleE.png')
            },
            {
                id: 'CamilleR',
                name: '마법공학 최후통첩',
                description: `카밀이 대상 챔피언에게 돌진해 일정 지역 내에 가둡니다. 대상에게 기본 공격 시 추가 마법 피해를 입힙니다.`,
                cooldownBurn: '140/115/90',
                image: require('../../assets/lol_hero_icons/skills/CamilleR.png')
            },
        ],
    },
    {
        numID: 22,
        id: 'Cassiopeia_mid',
        Key: '69',
        name: '카시오페아',
        title: '독사의 포옹',
        lore: `카시오페아는 자신의 사악한 의지대로 상대를 조종하는 치명적인 피조물이다. 녹서스의 명망 높은 뒤 쿠토 가에서 가장 아름다운 미모를 자랑하던 막내딸, 카시오페아는 고대의 힘을 찾아 슈리마 아래에 있는 지하묘실 깊은 곳으로 모험을 떠났다. 그곳에서 그녀는 소름끼치는 묘실의 수호령에게 물렸고, 몸에 독이 퍼져 독사와도 같은 포식자로 변했다. 카시오페아는 이제 밤의 장막에 숨어 교활하고 날렵하게 움직이며 사악한 시선으로 적들을 석화시킨다.`,
        blurb: `카시오페아는 자신의 사악한 의지대로 상대를 조종하는 치명적인 피조물이다. 녹서스의 명망 높은 뒤 쿠토 가에서 가장 아름다운 미모를 자랑하던 막내딸, 카시오페아는 고대의 힘을 찾아 슈리마 아래에 있는 지하묘실 깊은 곳으로 모험을 떠났다. 그곳에서 그녀는 소름끼치는 묘실의 수호령에게 물렸고, 몸에 독이 퍼져 독사와도 같은 포식자로 변했다. 카시오페아는 이제 밤의 장막에 숨어 교활하고 날렵하게 움직이며 사악한 시선으로 적들을 석화시킨다.`,
        image: require('../../assets/lol_hero_icons/Cassiopeia.png'),
        background_image: require('../../assets/lol_hero_icons/background/Cassiopeia.jpg'),
        stats: {"hp": 630, "hpperlevel": 104, "mp": 400, "mpperlevel": 40, "movespeed": 328, "armor": 18, "armorperlevel": 4.7, "spellblock": 32, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 5.5, "hpregenperlevel": 0.5, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 53, "attackdamageperlevel": 3, "attackspeedperlevel": 1.5, "attackspeed": 0.647},
        spells: [
            {
                id: 'passive',
                name: '독사의 품격',
                description: `카시오페아는 레벨에 따라 이동 속도가 증가합니다. 장화 아이템은 구매할 수 없습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Cassiopeia_Passive.png')
            },
            {
                id: 'CassiopeiaQ',
                name: '맹독 폭발',
                description: `카시오페아가 잠시 후 대상 지역에 독을 폭발시킵니다. 적 챔피언이 독에 맞을 경우 카시오페아의 이동 속도가 증가합니다.`,
                cooldownBurn: '3.5',
                image: require('../../assets/lol_hero_icons/skills/CassiopeiaQ.png')
            },
            {
                id: 'CassiopeiaW',
                name: '독기의 늪',
                description: `카시오페아가 독구름을 일으킵니다. 독구름을 통과하는 적은 약간의 피해를 입고 이동 속도가 느려지며 늪에 빠져 이동 스킬을 사용할 수 없게 됩니다.`,
                cooldownBurn: '24/22/20/18/16',
                image: require('../../assets/lol_hero_icons/skills/CassiopeiaW.png')
            },
            {
                id: 'CassiopeiaE',
                name: '쌍독니',
                description: `카시오페아가 대상에게 강력한 공격을 가하고 그 피해량에 비례해 자신의 체력을 회복합니다. 적이 독에 중독되면 피해량이 상승하며 적이 처치될 경우 카시오페아의 마나가 회복됩니다.`,
                cooldownBurn: '0.75',
                image: require('../../assets/lol_hero_icons/skills/CassiopeiaE.png')
            },
            {
                id: 'CassiopeiaR',
                name: '석화의 응시',
                description: `카시오페아가 눈에서 마법의 에너지를 발사하여 정면에서 자신을 바라보는 적을 기절시키고, 등지고 있는 적의 속도를 늦춥니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/CassiopeiaR.png')
            },
        ],
    },
    {
        numID: 23,
        id: 'Chogath_top_mid',
        Key: '31',
        name: '초가스',
        title: '공허의 공포',
        lore: `공허에서 나온 생명체 초가스는 룬테라의 따가운 햇빛 아래 처음 모습을 드러낸 순간부터, 그 무엇으로도 만족시킬 수 없는 가장 순수한 굶주림에 이끌려 움직였다. 그 존재 자체가 모든 생명체를 집어삼키려는 공허의 욕망을 온전하게 드러내는 것이다. 초가스는 복잡한 생체 활동을 통해 주변 물질에서 새로운 몸을 만들어냈고, 근육과 밀도를 키웠으며, 유기체 다이아몬드처럼 딱딱한 겉껍질로 몸을 덮었다. 하지만 몸집이 커져도 허기를 채울 수 없자, 초가스는 여분의 물질을 토해내어 면도날처럼 날카로운 등뼈를 만들었다. 먹잇감을 꼬치처럼 꿰어 두었다가 나중에 포식하기 위해서.`,
        blurb: `공허에서 나온 생명체 초가스는 룬테라의 따가운 햇빛 아래 처음 모습을 드러낸 순간부터, 그 무엇으로도 만족시킬 수 없는 가장 순수한 굶주림에 이끌려 움직였다. 그 존재 자체가 모든 생명체를 집어삼키려는 공허의 욕망을 온전하게 드러내는 것이다. 초가스는 복잡한 생체 활동을 통해 주변 물질에서 새로운 몸을 만들어냈고, 근육과 밀도를 키웠으며, 유기체 다이아몬드처럼 딱딱한 겉껍질로 몸을 덮었다. 하지만 몸집이 커져도 허기를 채울 수 없자, 초가스는 여분의...`,
        image: require('../../assets/lol_hero_icons/Chogath.png'),
        background_image: require('../../assets/lol_hero_icons/background/Chogath.jpg'),
        stats: {"hp": 644, "hpperlevel": 94, "mp": 270, "mpperlevel": 60, "movespeed": 345, "armor": 38, "armorperlevel": 5, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 9, "hpregenperlevel": 0.85, "mpregen": 7.2, "mpregenperlevel": 0.45, "crit": 0, "critperlevel": 0, "attackdamage": 69, "attackdamageperlevel": 4.2, "attackspeedperlevel": 1.44, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '육식',
                description: `초가스는 유닛을 죽이면 체력과 마나를 회복합니다. 회복량은 초가스의 레벨이 높아질수록 증가합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/GreenTerror_TailSpike.png')
            },
            {
                id: 'Rupture',
                name: '파열',
                description: `선택한 지역의 지면을 파열시켜 해당 지역에 있는 적을 공중으로 띄워 피해를 입히고 이동 속도를 늦춥니다.`,
                cooldownBurn: '6',
                image: require('../../assets/lol_hero_icons/skills/Rupture.png')
            },
            {
                id: 'FeralScream',
                name: '흉포한 울부짖음',
                description: `초가스가 원뿔 형태의 지역에 무시무시한 비명을 질러 마법 피해를 입히고 몇 초 동안 적을 침묵시킵니다.`,
                cooldownBurn: '11/10.5/10/9.5/9',
                image: require('../../assets/lol_hero_icons/skills/FeralScream.png')
            },
            {
                id: 'VorpalSpikes',
                name: '날카로운 가시',
                description: `초가스가 공격할 때마다 치명적인 가시가 발사되어 정면에 있는 모든 적에게 피해를 입히고 둔화시킵니다.`,
                cooldownBurn: '8/7/6/5/4',
                image: require('../../assets/lol_hero_icons/skills/VorpalSpikes.png')
            },
            {
                id: 'Feast',
                name: '포식',
                description: `적 유닛을 먹어치워 적의 방어력을 무시하고 큰 고정 피해를 입힙니다. 대상을 처치하면 초가스가 성장하며 최대 체력이 증가합니다.`,
                cooldownBurn: '80/70/60',
                image: require('../../assets/lol_hero_icons/skills/Feast.png')
            },
        ],
    },
    {
        numID: 24,
        id: 'Corki_mid',
        Key: '42',
        name: '코르키',
        title: '대담한 폭격수',
        lore: `요들 비행기 조종사 코르키는 다른 어떤 것보다 좋아하는 두 가지가 있다. 바로 비행과 멋들어진 콧수염이다. 좋아하는 순서대로 나열한 것은 아니지만. 코르키는 밴들 시티를 떠난 후 필트오버에 정착하며 찾아낸 경이로운 비행기와 사랑에 빠졌다. 코르키는 비행장치를 개발하기 위해 혼신의 노력을 쏟았고, 시끄러운 뱀 편대라 불리는 베테랑 공군 정예 부대를 이끌게 되었다. 포화 속에서도 평정심을 잃지 않으며 제2의 고향의 창공을 누비는 코르키에게 마음껏 미사일 포화를 퍼부어 해결하지 못했던 문제는 하나도 없다.`,
        blurb: `요들 비행기 조종사 코르키는 다른 어떤 것보다 좋아하는 두 가지가 있다. 바로 비행과 멋들어진 콧수염이다. 좋아하는 순서대로 나열한 것은 아니지만. 코르키는 밴들 시티를 떠난 후 필트오버에 정착하며 찾아낸 경이로운 비행기와 사랑에 빠졌다. 코르키는 비행장치를 개발하기 위해 혼신의 노력을 쏟았고, 시끄러운 뱀 편대라 불리는 베테랑 공군 정예 부대를 이끌게 되었다. 포화 속에서도 평정심을 잃지 않으며 제2의 고향의 창공을 누비는 코르키에게 마음껏 미사일...`,
        image: require('../../assets/lol_hero_icons/Corki.png'),
        background_image: require('../../assets/lol_hero_icons/background/Corki.jpg'),
        stats: {"hp": 610, "hpperlevel": 100, "mp": 350, "mpperlevel": 54, "movespeed": 325, "armor": 30, "armorperlevel": 4.5, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 5.5, "hpregenperlevel": 0.55, "mpregen": 7.4, "mpregenperlevel": 0.7, "crit": 0, "critperlevel": 0, "attackdamage": 52, "attackdamageperlevel": 2.5, "attackspeedperlevel": 2.8, "attackspeed": 0.644},
        spells: [
            {
                id: 'passive',
                name: '마법공학 탄약',
                description: `코르키의 기본 공격 피해량의 일부가 추가 고정 피해로 전환됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Corki_RapidReload.png')
            },
            {
                id: 'PhosphorusBomb',
                name: '인광탄',
                description: `코르키가 지정한 위치에 인광탄을 던져, 해당 지역 안의 적들에게 마법 피해를 입힙니다. 또한, 이 공격은 지속시간 동안 해당 지역의 유닛들을 드러내 줍니다.`,
                cooldownBurn: '9/8.5/8/7.5/7',
                image: require('../../assets/lol_hero_icons/skills/PhosphorusBomb.png')
            },
            {
                id: 'CarpetBomb',
                name: '발키리',
                description: `코르키가 목표 위치로 비행하며 폭탄을 투하하여 불타는 흔적을 남겨, 그 안에 있는 적에게 피해를 입힙니다.`,
                cooldownBurn: '20/18/16/14/12',
                image: require('../../assets/lol_hero_icons/skills/CarpetBomb.png')
            },
            {
                id: 'GGun',
                name: '개틀링 건',
                description: `코르키가 정면에 원뿔 형태로 개틀링 건을 발사하여 적의 방어력과 마법 저항력을 낮추고 피해를 입힙니다.`,
                cooldownBurn: '12',
                image: require('../../assets/lol_hero_icons/skills/GGun.png')
            },
            {
                id: 'MissileBarrage',
                name: '미사일 폭격',
                description: `코르키가 목표 지점에 충돌 시 폭발하는 미사일을 발사하여 해당 지역에 있는 적들에게 피해를 입힙니다. 코르키는 시간이 지날수록 미사일을 저장하여 최대치까지 장전해 둘 수 있습니다. 3번째 발사하는 미사일은 '큰 놈'으로, 추가 피해를 입힙니다.`,
                cooldownBurn: '2',
                image: require('../../assets/lol_hero_icons/skills/MissileBarrage.png')
            },
        ],
    },
    {
        numID: 25,
        id: 'Darius_top',
        Key: '122',
        name: '다리우스',
        title: '녹서스의 실력자',
        lore: `녹서스 그 자체를 상징하는 인물로 다리우스만큼 어울리는 사람도 없을 것이다. 실전에서 단련된 사령관이자 녹서스 내에서조차도 두려움의 대상이니까. 다리우스는 미천한 집안에서 태어났으나 녹서스 제국의 적들을 파죽지세로 베어넘기면서 트리파르 군단 사령관이라는 지금의 자리와 권력을 획득했다. 문제는 그 적들 다수가 녹서스 인이었다는 사실이다. 다리우스는 자신의 명분이 정당하다는 것을 한 번도 의심한 적이 없으며, 도끼를 치켜들 때에도 망설임이 없다. 그러니 다리우스에게 맞서는 자는 자비를 바랄 수 없다.`,
        blurb: `녹서스 그 자체를 상징하는 인물로 다리우스만큼 어울리는 사람도 없을 것이다. 실전에서 단련된 사령관이자 녹서스 내에서조차도 두려움의 대상이니까. 다리우스는 미천한 집안에서 태어났으나 녹서스 제국의 적들을 파죽지세로 베어넘기면서 트리파르 군단 사령관이라는 지금의 자리와 권력을 획득했다. 문제는 그 적들 다수가 녹서스 인이었다는 사실이다. 다리우스는 자신의 명분이 정당하다는 것을 한 번도 의심한 적이 없으며, 도끼를 치켜들 때에도 망설임이 없다. 그러니...`,
        image: require('../../assets/lol_hero_icons/Darius.png'),
        background_image: require('../../assets/lol_hero_icons/background/Darius.jpg'),
        stats: {"hp": 652, "hpperlevel": 114, "mp": 263, "mpperlevel": 58, "movespeed": 340, "armor": 39, "armorperlevel": 5.2, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 10, "hpregenperlevel": 0.95, "mpregen": 6.6, "mpregenperlevel": 0.35, "crit": 0, "critperlevel": 0, "attackdamage": 64, "attackdamageperlevel": 5, "attackspeedperlevel": 1, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '과다출혈',
                description: `다리우스의 기본 공격과 스킬 공격은 적에게 출혈을 일으켜 5초 동안 물리 피해를 입힙니다. 최대 5회까지 중첩됩니다. 최대 중첩 시 다리우스가 분노하며 공격력이 크게 증가합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Darius_Icon_Hemorrhage.png')
            },
            {
                id: 'DariusCleave',
                name: '학살',
                description: `다리우스가 도끼를 큰 원의 형태로 휘두릅니다. 도끼날에 맞은 적들은 도끼자루에 맞은 적들보다 더 큰 피해를 입습니다. 다리우스는 도끼날에 맞은 적 챔피언과 대형 몬스터의 수에 비례하여 체력이 회복됩니다.`,
                cooldownBurn: '9/8/7/6/5',
                image: require('../../assets/lol_hero_icons/skills/DariusCleave.png')
            },
            {
                id: 'DariusNoxianTacticsONH',
                name: '마비의 일격',
                description: `다리우스의 다음 공격은 적의 대동맥을 가격합니다. 적들이 출혈을 일으키면서 이동 속도가 감소합니다.`,
                cooldownBurn: '5',
                image: require('../../assets/lol_hero_icons/skills/DariusNoxianTacticsONH.png')
            },
            {
                id: 'DariusAxeGrabCone',
                name: '포획',
                description: `다리우스가 도끼날을 날카롭게 세워, 물리 피해를 가할 때 대상의 방어력 중 일정 비율을 무시합니다. 스킬을 사용하면 다리우스가 도끼의 갈고리 부분으로 적들을 휘감아 자기 쪽으로 끌어당깁니다.`,
                cooldownBurn: '24/21.5/19/16.5/14',
                image: require('../../assets/lol_hero_icons/skills/DariusAxeGrabCone.png')
            },
            {
                id: 'DariusExecute',
                name: '녹서스의 단두대',
                description: `다리우스가 적 챔피언에게 뛰어올라 치명적 타격을 가해 고정 피해를 입힙니다. 대상에 중첩된 과다출혈에 비례하여 피해량이 증가합니다. 녹서스의 단두대로 적을 처치하는 경우, 잠시 동안 재사용 대기시간이 초기화됩니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/DariusExecute.png')
            },
        ],
    },
    {
        numID: 26,
        id: 'Diana_mid_jug',
        Key: '131',
        name: '다이애나',
        title: '차가운 달의 분노',
        lore: `다이애나는 오늘날 거의 사멸된 고대 종교 '루나리'의 전사이자, 은빛 달의 화신 그 자체다. 그녀는 드높은 타곤 산 꼭대기에 떠오른 천체들의 기운을 온몸으로 받아들였고, 겨울 밤 설원처럼 은은하게 빛나는 갑옷과 초승달 검으로 무장했다. 그러나 인간을 초월한 그녀의 힘이 무엇을 위한 것인지는 아직까지 분명하지 않다. 다이애나는 이 세상에서 자신에게 부여된 사명이 무엇인지 알아내려 애쓰고 있다.`,
        blurb: `다이애나는 오늘날 거의 사멸된 고대 종교 '루나리'의 전사이자, 은빛 달의 화신 그 자체다. 그녀는 드높은 타곤 산 꼭대기에 떠오른 천체들의 기운을 온몸으로 받아들였고, 겨울 밤 설원처럼 은은하게 빛나는 갑옷과 초승달 검으로 무장했다. 그러나 인간을 초월한 그녀의 힘이 무엇을 위한 것인지는 아직까지 분명하지 않다. 다이애나는 이 세상에서 자신에게 부여된 사명이 무엇인지 알아내려 애쓰고 있다.`,
        image: require('../../assets/lol_hero_icons/Diana.png'),
        background_image: require('../../assets/lol_hero_icons/background/Diana.jpg'),
        stats: {"hp": 640, "hpperlevel": 109, "mp": 375, "mpperlevel": 25, "movespeed": 345, "armor": 31, "armorperlevel": 4.3, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 150, "hpregen": 6.5, "hpregenperlevel": 0.85, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 57, "attackdamageperlevel": 3, "attackspeedperlevel": 2, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '서늘한 달빛 검',
                description: `3번째 공격마다 근처 적들을 베어 추가 마법 피해를 입힙니다. 스킬 사용 후 5초 동안 공격 속도가 증가합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Diana_Passive_LunarBlade.png')
            },
            {
                id: 'DianaQ',
                name: '초승달 검기',
                description: `달 에너지를 휘어지게 발사하여 마법 피해를 입힙니다.적중당한 적들은 은신 상태가 아닐 경우 달빛을 받아 3초 동안 위치가 노출됩니다.`,
                cooldownBurn: '8/7.5/7/6.5/6',
                image: require('../../assets/lol_hero_icons/skills/DianaQ.png')
            },
            {
                id: 'DianaOrbs',
                name: '은빛 가호',
                description: `다이애나가 주위를 돌면서 적에게 접촉하면 폭발하여 해당 지역에 피해를 주는 세 개의 구체를 생성합니다. 또한 잠시 동안 피해를 흡수하는 보호막을 얻습니다. 보호막은 세 번째 구체가 폭발하면 위력이 더 커집니다.`,
                cooldownBurn: '15/13.5/12/10.5/9',
                image: require('../../assets/lol_hero_icons/skills/DianaOrbs.png')
            },
            {
                id: 'DianaTeleport',
                name: '월광 쇄도',
                description: `복수심에 불타는 달의 화신이 되어, 적에게 돌진하여 마법 피해를 입힙니다.달빛 효과를 받고 있는 대상에게 돌진한 경우, 월광 쇄도를 즉시 한 번 더 사용할 수 있습니다. 이 때, 다른 모든 적들은 월광 쇄도의 대상이 아니었더라도 달빛 효과가 사라집니다.`,
                cooldownBurn: '22/20/18/16/14',
                image: require('../../assets/lol_hero_icons/skills/DianaTeleport.png')
            },
            {
                id: 'DianaR',
                name: '달빛 낙하',
                description: `다이애나가 주위 모든 적을 드러내 끌어당긴 다음 이동 속도를 늦춥니다.다이애나가 한 명 이상의 적 챔피언을 끌어당기면 잠시 후 달빛을 받아 자신의 주변 지역에 마법 피해를 입힙니다. 이 효과는 적 한 명을 추가로 끌어당길 때마다 피해량이 증가합니다.`,
                cooldownBurn: '100/90/80',
                image: require('../../assets/lol_hero_icons/skills/DianaR.png')
            },
        ],
    },
    {
        numID: 27,
        id: 'Draven_adc',
        Key: '119',
        name: '드레이븐',
        title: '화려한 처형자',
        lore: `녹서스에서는 경기장에서 피를 흘리며 싸우고 힘을 겨루는 전사들이 있다. 검투사로 알려진 이들 중 드레이븐만큼 많은 환호를 받은 전사는 없었다. 전직 군인인 드레이븐은 극적으로 회전 도끼를 던지는 화려하고 독보적인 기술에 관중들이 환호한다는 것을 알아차렸다. 드레이븐은 요란하고도 완벽한 구경거리를 만들어내는 자신의 기술에 도취되어, 드레이븐이라는 이름을 녹서스 제국에 길이 남기기 위해 누구든 쓰러뜨리겠다고 다짐했다.`,
        blurb: `녹서스에서는 경기장에서 피를 흘리며 싸우고 힘을 겨루는 전사들이 있다. 검투사로 알려진 이들 중 드레이븐만큼 많은 환호를 받은 전사는 없었다. 전직 군인인 드레이븐은 극적으로 회전 도끼를 던지는 화려하고 독보적인 기술에 관중들이 환호한다는 것을 알아차렸다. 드레이븐은 요란하고도 완벽한 구경거리를 만들어내는 자신의 기술에 도취되어, 드레이븐이라는 이름을 녹서스 제국에 길이 남기기 위해 누구든 쓰러뜨리겠다고 다짐했다.`,
        image: require('../../assets/lol_hero_icons/Draven.png'),
        background_image: require('../../assets/lol_hero_icons/background/Draven.jpg'),
        stats: {"hp": 675, "hpperlevel": 104, "mp": 361, "mpperlevel": 39, "movespeed": 330, "armor": 29, "armorperlevel": 4.5, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 3.75, "hpregenperlevel": 0.7, "mpregen": 8.05, "mpregenperlevel": 0.65, "crit": 0, "critperlevel": 0, "attackdamage": 62, "attackdamageperlevel": 3.6, "attackspeedperlevel": 2.7, "attackspeed": 0.679},
        spells: [
            {
                id: 'passive',
                name: '드레이븐의 리그',
                description: `드레이븐이 회전 도끼를 받아내거나 미니언 또는 몬스터를 처치하고 포탑을 철거하면 팬들의 환호를 받습니다. 적 챔피언을 처치하면 지금까지 얻은 팬들의 환호에 비례해 추가 골드를 획득합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Draven_passive.png')
            },
            {
                id: 'DravenSpinning',
                name: '회전 도끼',
                description: `드레이븐의 다음 공격이 추가 물리 피해를 입힙니다. 이 도끼는 대상에게 맞고 튕겨 나가 공중에 뜹니다. 공중에 뜬 도끼를 회수하면 자동으로 회전 도끼를 재사용할 수 있게 됩니다. 드레이븐은 한번에 2개의 도끼를 사용할 수 있습니다.`,
                cooldownBurn: '12/11/10/9/8',
                image: require('../../assets/lol_hero_icons/skills/DravenSpinning.png')
            },
            {
                id: 'DravenFury',
                name: '광기의 피',
                description: `드레이븐의 이동 속도와 공격 속도가 증가합니다. 이동 속도 증가 효과는 시간이 지날수록 급격하게 감소합니다. 드레이븐이 회전 도끼를 회수하면 광기의 피 재사용 대기시간이 초기화됩니다.`,
                cooldownBurn: '12',
                image: require('../../assets/lol_hero_icons/skills/DravenFury.png')
            },
            {
                id: 'DravenDoubleShot',
                name: '비켜서라',
                description: `드레이븐이 도끼를 던져 물리 피해를 입히며, 도끼에 맞은 적들을 옆으로 밀어냅니다. 타격을 받은 대상들은 이동 속도가 감소합니다.`,
                cooldownBurn: '18/17/16/15/14',
                image: require('../../assets/lol_hero_icons/skills/DravenDoubleShot.png')
            },
            {
                id: 'DravenRCast',
                name: '죽음의 소용돌이',
                description: `드레이븐이 두 개의 거대한 도끼를 던져 맞은 적 각각에게 물리 피해를 입힙니다. 죽음의 소용돌이는 적 챔피언을 하나 맞힌 다음 서서히 방향을 바꿔 드레이븐에게 돌아옵니다. 도끼가 나아가는 동안 스킬을 재사용하면 더 빠르게 회수할 수 있습니다. 유닛 하나를 관통할 때마다 피해량이 줄어들지만, 되돌아올 때는 피해량이 최대로 회복됩니다. 팬들의 환호 중첩 수보다 체력이 낮은 적은 처형됩니다.`,
                cooldownBurn: '100/90/80',
                image: require('../../assets/lol_hero_icons/skills/DravenRCast.png')
            },
        ],
    },
    {
        numID: 28,
        id: 'DrMundo_top',
        Key: '36',
        name: '문도 박사',
        title: '자운의 광인',
        lore: `완전히 미쳐버린 비참한 살인마이자 오싹한 보라색 괴물로 변한 문도 박사는 많은 자운 시민이 특히나 어두운 밤에 외출을 피하는 이유이다. 현재 의사를 자처하는 그는 한때 자운에서 가장 악명 높은 정신 병원에 수용된 환자였다. 모든 의료진을 '치료'하고 나서, 문도 박사는 자신이 치료받았던 빈 병원에서 의사가 된 뒤 본인이 수없이 당한 몹시 부도덕한 치료법을 따라 하기 시작했다. 의약품은 많지만 의학 지식은 전혀 없는 문도 박사는 약물을 주사할 때마다 더욱더 괴물처럼 변해 그의 진료실 주변을 헤매는 불운한 '환자'들을 두려움에 빠트린다.`,
        blurb: `완전히 미쳐버린 비참한 살인마이자 오싹한 보라색 괴물로 변한 문도 박사는 많은 자운 시민이 특히나 어두운 밤에 외출을 피하는 이유이다. 현재 의사를 자처하는 그는 한때 자운에서 가장 악명 높은 정신 병원에 수용된 환자였다. 모든 의료진을 '치료'하고 나서, 문도 박사는 자신이 치료받았던 빈 병원에서 의사가 된 뒤 본인이 수없이 당한 몹시 부도덕한 치료법을 따라 하기 시작했다. 의약품은 많지만 의학 지식은 전혀 없는 문도 박사는 약물을 주사할 때마다...`,
        image: require('../../assets/lol_hero_icons/DrMundo.png'),
        background_image: require('../../assets/lol_hero_icons/background/DrMundo.jpg'),
        stats: {"hp": 613, "hpperlevel": 103, "mp": 0, "mpperlevel": 0, "movespeed": 345, "armor": 32, "armorperlevel": 3.7, "spellblock": 29, "spellblockperlevel": 2.3, "attackrange": 125, "hpregen": 7, "hpregenperlevel": 0.5, "mpregen": 0, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 61, "attackdamageperlevel": 2.5, "attackspeedperlevel": 3.3, "attackspeed": 0.67},
        spells: [
            {
                id: 'passive',
                name: '가고 싶은 데로 간다',
                description: `문도 박사가 처음으로 적중하는 이동 불가 효과에 저항하며, 체력을 잃고 근처에 화학 물질이 든 통을 떨어뜨립니다. 통 위로 이동하면 통을 주워 체력을 회복하고 이 스킬의 재사용 대기시간을 줄입니다.또한 문도 박사의 체력 재생이 크게 증가합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/DrMundo_P.png')
            },
            {
                id: 'DrMundoQ',
                name: '오염된 뼈톱',
                description: `문도 박사가 오염된 뼈톱을 던져 처음 맞는 적에게 적 현재 체력에 비례한 피해를 입히고 둔화 효과를 적용합니다.`,
                cooldownBurn: '4',
                image: require('../../assets/lol_hero_icons/skills/DrMundoQ.png')
            },
            {
                id: 'DrMundoW',
                name: '심장 전기 충격',
                description: `문도 박사가 스스로를 감전시켜 주변 적에게 지속 피해를 입히고 자신이 입는 피해의 일부를 저장합니다. 지속시간이 끝나거나 다시 사용하면 주변 적에게 큰 피해를 입힙니다. 적에게 적중 시 저장한 피해의 일부를 체력으로 회복합니다.`,
                cooldownBurn: '17/16.5/16/15.5/15',
                image: require('../../assets/lol_hero_icons/skills/DrMundoW.png')
            },
            {
                id: 'DrMundoE',
                name: '둔기에 의한 외상',
                description: `기본 지속 효과 - 문도 박사가 최대 체력에 비례하여 추가 공격력을 얻습니다.사용 시 - 문도 박사가 적에게 왕진 가방을 내리쳐 자신이 잃은 체력에 비례한 추가 피해를 입힙니다. 이때 처치된 적은 밀려나며 지나치는 적에게 피해를 입힙니다.`,
                cooldownBurn: '9/8.25/7.5/6.75/6',
                image: require('../../assets/lol_hero_icons/skills/DrMundoE.png')
            },
            {
                id: 'DrMundoR',
                name: '최대 투여량',
                description: `문도 박사가 화학 물질을 투여하여 잃은 체력의 일부를 즉시 회복합니다. 이후 이동 속도를 얻고, 긴 지속시간에 걸쳐 최대 체력의 일부만큼 체력을 회복합니다.`,
                cooldownBurn: '120',
                image: require('../../assets/lol_hero_icons/skills/DrMundoR.png')
            },
        ],
    },
    {
        numID: 29,
        id: 'Ekko_mid_jug',
        Key: '245',
        name: '에코',
        title: '시간을 달리는 소년',
        lore: `자운 뒷골목 출신의 천재 소년 에코는 언제든 자신에게 유리하게 시간을 조작할 수 있다. 그는 직접 발명한 Z 드라이브를 이용해 다양한 시공간의 무한한 가능성을 탐험하며 완벽한 순간을 포착한다. 누구보다도 자유로운 영혼을 가졌지만 소중한 친구들을 구하기 위해서라면 어떤 위험도 무릅쓴다. 에코를 잘 모르는 사람들은 그가 어떻게 한 번의 시행착오도 없이 매번 완벽하게 불가능한 일을 해내는지 놀라움을 금치 못한다.`,
        blurb: `자운 뒷골목 출신의 천재 소년 에코는 언제든 자신에게 유리하게 시간을 조작할 수 있다. 그는 직접 발명한 Z 드라이브를 이용해 다양한 시공간의 무한한 가능성을 탐험하며 완벽한 순간을 포착한다. 누구보다도 자유로운 영혼을 가졌지만 소중한 친구들을 구하기 위해서라면 어떤 위험도 무릅쓴다. 에코를 잘 모르는 사람들은 그가 어떻게 한 번의 시행착오도 없이 매번 완벽하게 불가능한 일을 해내는지 놀라움을 금치 못한다.`,
        image: require('../../assets/lol_hero_icons/Ekko.png'),
        background_image: require('../../assets/lol_hero_icons/background/Ekko.jpg'),
        stats: {"hp": 655, "hpperlevel": 99, "mp": 280, "mpperlevel": 70, "movespeed": 340, "armor": 32, "armorperlevel": 4.2, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 9, "hpregenperlevel": 0.9, "mpregen": 7, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 58, "attackdamageperlevel": 3, "attackspeedperlevel": 3.3, "attackspeed": 0.688},
        spells: [
            {
                id: 'passive',
                name: 'Z 드라이브 공진',
                description: `같은 대상에 대한 세 번째 기본 공격 및 스킬 공격마다 추가 마법 피해를 입힙니다. 대상이 챔피언일 경우, 에코의 이동 속도가 상승합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Ekko_P.png')
            },
            {
                id: 'EkkoQ',
                name: '시간의 톱니바퀴',
                description: `에코가 적 챔피언에게 맞으면 펼쳐져서 시간 왜곡 지대를 만들고, 지대 안에 있는 적 모두를 둔화시키며 피해를 입히는 시간 톱니바퀴를 던집니다. 잠시 후 톱니바퀴는 되감겨 에코에게 돌아오며, 경로 상에 있는 적에게 피해를 입힙니다.`,
                cooldownBurn: '9/8.5/8/7.5/7',
                image: require('../../assets/lol_hero_icons/skills/EkkoQ.png')
            },
            {
                id: 'EkkoW',
                name: '평행 시간 교차',
                description: `에코의 기본 공격이 체력이 낮은 적에게 추가 마법 피해를 입힙니다. 에코가 평행 시간 교차를 사용하면 시간의 균열을 열어 몇 초 후에 퍼져나가는 불안정한 특이점을 만들어내며, 이 안에 갇힌 적들을 둔화시킵니다. 에코가 특이점 안에 들어가면 자신은 보호막을 얻으며, 적들의 시간을 멈추며 기절시킵니다.`,
                cooldownBurn: '22/20/18/16/14',
                image: require('../../assets/lol_hero_icons/skills/EkkoW.png')
            },
            {
                id: 'EkkoE',
                name: '시간 도약',
                description: `에코가 회피하며 굴러 Z 드라이브를 충전합니다. 다음 번 공격은 추가 피해를 입히며 시공간을 왜곡하여 에코가 대상 쪽으로 순간이동합니다.`,
                cooldownBurn: '9/8.5/8/7.5/7',
                image: require('../../assets/lol_hero_icons/skills/EkkoE.png')
            },
            {
                id: 'EkkoR',
                name: '시공간 붕괴',
                description: `에코가 시공간을 붕괴시켜 대상으로 지정할 수 없게 되며 더 유리한 지점으로 시간을 되돌립니다. 몇 초 전 아무 때로나 돌아가며, 이 동안 입은 피해의 일부가 회복됩니다. 에코가 착지하는 지역 부근의 적들은 큰 피해를 입습니다.`,
                cooldownBurn: '110/80/50',
                image: require('../../assets/lol_hero_icons/skills/EkkoR.png')
            },
        ],
    },
    {
        numID: 30,
        id: 'Elise_jug',
        Key: '60',
        name: '엘리스',
        title: '거미 여왕',
        lore: `엘리스는 녹서스 불멸의 요새 깊숙한 곳에 있는 저택에서 빛을 차단하고 은둔해 사는 치명적인 포식자다. 필멸자 시절 그녀는 명문가의 안주인이였지만 끔찍한 반신에 물린 후 매혹적이면서도 무자비한 거미와 같은 존재가 되어 먹잇감을 거미줄로 끌어들였다. 영원한 젊음을 유지하기 위해 엘리스는 거부하기 힘든 유혹을 펼치며 무고한 이들을 사냥한다.`,
        blurb: `엘리스는 녹서스 불멸의 요새 깊숙한 곳에 있는 저택에서 빛을 차단하고 은둔해 사는 치명적인 포식자다. 필멸자 시절 그녀는 명문가의 안주인이였지만 끔찍한 반신에 물린 후 매혹적이면서도 무자비한 거미와 같은 존재가 되어 먹잇감을 거미줄로 끌어들였다. 영원한 젊음을 유지하기 위해 엘리스는 거부하기 힘든 유혹을 펼치며 무고한 이들을 사냥한다.`,
        image: require('../../assets/lol_hero_icons/Elise.png'),
        background_image: require('../../assets/lol_hero_icons/background/Elise.jpg'),
        stats: {"hp": 650, "hpperlevel": 109, "mp": 324, "mpperlevel": 50, "movespeed": 330, "armor": 30, "armorperlevel": 5.2, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 5.5, "hpregenperlevel": 0.6, "mpregen": 6, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 55, "attackdamageperlevel": 3, "attackspeedperlevel": 1.75, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '거미 여왕',
                description: `인간 형태: 엘리스의 스킬이 적에 적중하면 휴면 상태의 새끼 거미가 생깁니다.거미 형태: 기본 공격 시 추가 마법 피해를 입히고, 엘리스의 체력이 회복됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/ElisePassive.png')
            },
            {
                id: 'EliseHumanQ',
                name: '신경독 / 독이빨',
                description: `인간 형태: 대상 적의 체력에 비례하여 피해를 입힙니다.거미 형태: 적 하나를 덮쳐, 적이 잃은 체력에 비례하여 피해를 입힙니다.`,
                cooldownBurn: '6',
                image: require('../../assets/lol_hero_icons/skills/EliseHumanQ.png')
            },
            {
                id: 'EliseHumanW',
                name: '위험한 새끼 거미 / 광란의 질주',
                description: `인간 형태: 독을 품은 새끼 거미를 풀어놓으면 대상 적 근처에 가서 터집니다.거미 형태: 엘리스와 새끼 거미들의 공격 속도가 상승합니다.`,
                cooldownBurn: '12',
                image: require('../../assets/lol_hero_icons/skills/EliseHumanW.png')
            },
            {
                id: 'EliseHumanE',
                name: '고치 / 줄타기',
                description: `인간 형태: 처음 적중한 적 유닛을 기절시키고 은신 상태가 아닐 경우 모습을 드러내 줍니다.거미 형태: 엘리스와 새끼 거미들이 공중으로 올라간 다음 적에게 하강해 덮칩니다. 적을 덮친 후 거미 여왕의 추가 피해량과 회복량이 증가합니다.`,
                cooldownBurn: '12/11.5/11/10.5/10',
                image: require('../../assets/lol_hero_icons/skills/EliseHumanE.png')
            },
            {
                id: 'EliseR',
                name: '거미 형태',
                description: `무서운 거미로 변해 공격 사거리가 줄어드는 대신 이동 속도가 상승하며, 새로운 스킬을 사용하고, 새끼 거미 떼가 적을 공격합니다.`,
                cooldownBurn: '4',
                image: require('../../assets/lol_hero_icons/skills/EliseR.png')
            },
        ],
    },
    {
        numID: 31,
        id: 'Evelynn_jug',
        Key: '28',
        name: '이블린',
        title: '고통스런 포옹',
        lore: `룬테라의 어두운 경계선 안에서, 악마 이블린은 다음 먹잇감을 찾고 있다. 먼저 관능적인 인간 여성의 얼굴로 사냥감을 유혹한다. 희생자가 그 매력에 넘어오면, 이블린은 악마의 참모습을 드러낸다. 이블린은 희생자에게 말로 형언할 수 없는 고통을 안기고, 자신은 그 고통에 희열을 느낀다. 이블린이라는 악마에게는 이것이 한바탕 즐기는 유희일 뿐이지만, 룬테라 주민에게는 엇나간 욕망을 발산했다가는 그 대가로 끔찍한 종말을 맞게 되리라는 교훈을 되새겨주는 무시무시한 이야기이다.`,
        blurb: `룬테라의 어두운 경계선 안에서, 악마 이블린은 다음 먹잇감을 찾고 있다. 먼저 관능적인 인간 여성의 얼굴로 사냥감을 유혹한다. 희생자가 그 매력에 넘어오면, 이블린은 악마의 참모습을 드러낸다. 이블린은 희생자에게 말로 형언할 수 없는 고통을 안기고, 자신은 그 고통에 희열을 느낀다. 이블린이라는 악마에게는 이것이 한바탕 즐기는 유희일 뿐이지만, 룬테라 주민에게는 엇나간 욕망을 발산했다가는 그 대가로 끔찍한 종말을 맞게 되리라는 교훈을 되새겨주는...`,
        image: require('../../assets/lol_hero_icons/Evelynn.png'),
        background_image: require('../../assets/lol_hero_icons/background/Evelynn.jpg'),
        stats: {"hp": 642, "hpperlevel": 98, "mp": 315, "mpperlevel": 42, "movespeed": 335, "armor": 37, "armorperlevel": 4.7, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 8.5, "hpregenperlevel": 0.75, "mpregen": 8.11, "mpregenperlevel": 0.6, "crit": 0, "critperlevel": 0, "attackdamage": 61, "attackdamageperlevel": 3, "attackspeedperlevel": 2.1, "attackspeed": 0.667},
        spells: [
            {
                id: 'passive',
                name: '악의 장막',
                description: `이블린은 전투에서 벗어나 있을 때 악의 장막에 휩싸입니다. 악의 장막에 싸이면 낮은 체력에서 체력이 회복되며 6레벨부터는 위장 효과도 제공합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Evelynn_Passive.png')
            },
            {
                id: 'EvelynnQ',
                name: '증오의 가시',
                description: `이블린이 가시를 발사해 처음 적중한 유닛에게 피해를 줍니다. 그다음 근처 적에게 일직선상의 가시를 세 번까지 발사할 수 있습니다.`,
                cooldownBurn: '4',
                image: require('../../assets/lol_hero_icons/skills/EvelynnQ.png')
            },
            {
                id: 'EvelynnW',
                name: '황홀한 저주',
                description: `이블린이 대상에게 저주를 겁니다. 이 대상에게 공격 또는 스킬을 시전하면 잠시 후 매혹 효과가 발동되며 대상의 마법 저항력이 감소합니다.`,
                cooldownBurn: '15/14/13/12/11',
                image: require('../../assets/lol_hero_icons/skills/EvelynnW.png')
            },
            {
                id: 'EvelynnE',
                name: '채찍유린',
                description: `이블린이 대상을 가격하여 피해를 줍니다. 이후 짧은 시간 동안 이동 속도가 증가합니다.`,
                cooldownBurn: '8',
                image: require('../../assets/lol_hero_icons/skills/EvelynnE.png')
            },
            {
                id: 'EvelynnR',
                name: '최후의 포옹',
                description: `이블린이 잠시 대상으로 지정할 수 없게 되며 전방 범위 내의 적에게 피해를 준 다음 순간적으로 뒤쪽으로 이동합니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/EvelynnR.png')
            },
        ],
    },
    {
        numID: 32,
        id: 'Ezreal_mid_adc',
        Key: '81',
        name: '이즈리얼',
        title: '무모한 탐험가',
        lore: `마법에 타고난 재능을 가진 멋진 모험가 이즈리얼은 오래전에 사라진 지하 묘지를 탐험하고 고대 저주에 맞서 싸우며 힘든 역경을 손쉽게 극복한다. 끝없는 용기와 무모함을 지닌 그는 어떠한 상황에서도 즉흥적으로 헤쳐나가는 것을 선호한다. 기지를 발휘할 때도 있지만, 대부분은 파괴적이고 불가사의한 폭발을 일으키는 슈리마의 신비한 장갑에 의지한다. 한 가지 분명한 사실은 이즈리얼이 가는 곳에 말썽이 있다는 것이다. 혹은 눈앞에 있거나. 아마 사방에 있을지도 모른다.`,
        blurb: `마법에 타고난 재능을 가진 멋진 모험가 이즈리얼은 오래전에 사라진 지하 묘지를 탐험하고 고대 저주에 맞서 싸우며 힘든 역경을 손쉽게 극복한다. 끝없는 용기와 무모함을 지닌 그는 어떠한 상황에서도 즉흥적으로 헤쳐나가는 것을 선호한다. 기지를 발휘할 때도 있지만, 대부분은 파괴적이고 불가사의한 폭발을 일으키는 슈리마의 신비한 장갑에 의지한다. 한 가지 분명한 사실은 이즈리얼이 가는 곳에 말썽이 있다는 것이다. 혹은 눈앞에 있거나. 아마 사방에 있을지도...`,
        image: require('../../assets/lol_hero_icons/Ezreal.png'),
        background_image: require('../../assets/lol_hero_icons/background/Ezreal.jpg'),
        stats: {"hp": 600, "hpperlevel": 102, "mp": 375, "mpperlevel": 70, "movespeed": 325, "armor": 24, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 4, "hpregenperlevel": 0.65, "mpregen": 8.5, "mpregenperlevel": 1, "crit": 0, "critperlevel": 0, "attackdamage": 60, "attackdamageperlevel": 2.75, "attackspeedperlevel": 2.5, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '끓어오르는 주문의 힘',
                description: `이즈리얼이 스킬을 적중시킬 때마다 공격 속도가 증가합니다. (최대 5회 중첩)`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Ezreal_RisingSpellForce.png')
            },
            {
                id: 'EzrealQ',
                name: '신비한 화살',
                description: `이즈리얼이 에너지로 이루어진 화살을 발사합니다. 적 유닛에게 명중하면 모든 스킬의 재사용 대기시간이 약간 감소합니다.`,
                cooldownBurn: '5.5/5.25/5/4.75/4.5',
                image: require('../../assets/lol_hero_icons/skills/EzrealQ.png')
            },
            {
                id: 'EzrealW',
                name: '정수의 흐름',
                description: `이즈리얼이 구체를 발사해 처음으로 적중한 챔피언이나 목표물에 남아있게 합니다. 구체에 적중된 적을 공격하면 구체가 폭발하며 피해를 입힙니다.`,
                cooldownBurn: '8',
                image: require('../../assets/lol_hero_icons/skills/EzrealW.png')
            },
            {
                id: 'EzrealE',
                name: '비전 이동',
                description: `이즈리얼이 목표 위치로 순간이동하여 가장 가까운 적을 향해 유도 화살을 발사합니다. 정수의 흐름에 맞은 대상을 우선적으로 공격합니다.`,
                cooldownBurn: '26/23/20/17/14',
                image: require('../../assets/lol_hero_icons/skills/EzrealE.png')
            },
            {
                id: 'EzrealR',
                name: '정조준 일격',
                description: `이즈리얼이 힘을 모은 후 강력한 에너지를 발사해 관통하는 적 모두에게 큰 피해를 입힙니다. (에픽 몬스터를 제외한 몬스터와 미니언 대상으로는 피해량이 감소합니다.)`,
                cooldownBurn: '120/105/90',
                image: require('../../assets/lol_hero_icons/skills/EzrealR.png')
            },
        ],
    },
    {
        numID: 33,
        id: 'Fiddlesticks_mid_sup',
        Key: '9',
        name: '피들스틱',
        title: '오래된 공포',
        lore: `룬테라에 무시무시한 고대의 무언가가 깨어났다. 시간을 초월한 공포의 존재 피들스틱은 불안에 동요하는 인간 사회의 끝자락에 나타나 겁먹은 희생자들을 양분으로 삼는다. 앙상하고 투박한 모습의 이 생물은 삐죽삐죽한 낫을 휘두르며 공포를 거둬들이고, 살아남은 불행한 자들의 정신을 산산이 조각낸다. 까마귀 울음소리와 인간을 닮은 형상의 속삭임을 조심하라... 피들스틱이 돌아온 것이다.`,
        blurb: `룬테라에 무시무시한 고대의 무언가가 깨어났다. 시간을 초월한 공포의 존재 피들스틱은 불안에 동요하는 인간 사회의 끝자락에 나타나 겁먹은 희생자들을 양분으로 삼는다. 앙상하고 투박한 모습의 이 생물은 삐죽삐죽한 낫을 휘두르며 공포를 거둬들이고, 살아남은 불행한 자들의 정신을 산산이 조각낸다. 까마귀 울음소리와 인간을 닮은 형상의 속삭임을 조심하라... 피들스틱이 돌아온 것이다.`,
        image: require('../../assets/lol_hero_icons/Fiddlesticks.png'),
        background_image: require('../../assets/lol_hero_icons/background/Fiddlesticks.jpg'),
        stats: {"hp": 650, "hpperlevel": 106, "mp": 500, "mpperlevel": 28, "movespeed": 335, "armor": 34, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 480, "hpregen": 5.5, "hpregenperlevel": 0.6, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 55, "attackdamageperlevel": 2.65, "attackspeedperlevel": 2.11, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '무해한 허수아비',
                description: `피들스틱의 장신구는 허수아비로 대체됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/FiddlesticksP.png')
            },
            {
                id: 'FiddleSticksQ',
                name: '공포',
                description: `피들스틱이 적의 시야에 보이지 않을 때 적에게 스킬로 피해를 입히거나 공포를 사용하면 대상을 공포에 질리게 하여 일정 시간 도망치게 합니다.`,
                cooldownBurn: '15/14.5/14/13.5/13',
                image: require('../../assets/lol_hero_icons/skills/FiddleSticksQ.png')
            },
            {
                id: 'FiddleSticksW',
                name: '풍작',
                description: `피들스틱이 주변 적의 체력을 흡수합니다. 지속시간이 끝날 때 잃은 체력에 비례한 추가 피해를 입힙니다.`,
                cooldownBurn: '10/9.5/9/8.5/8',
                image: require('../../assets/lol_hero_icons/skills/FiddleSticksW.png')
            },
            {
                id: 'FiddleSticksE',
                name: '수확',
                description: `피들스틱이 넓은 범위를 낫으로 베어 적중한 모든 적을 둔화시키고 가운데에 있는 적을 침묵시킵니다.`,
                cooldownBurn: '10/9/8/7/6',
                image: require('../../assets/lol_hero_icons/skills/FiddleSticksE.png')
            },
            {
                id: 'FiddleSticksR',
                name: '까마귀 폭풍',
                description: `피들스틱 주변을 까마귀 떼가 헤집고 다니며 매초 해당 지역에 있는 모든 적 유닛에게 피해를 입힙니다.`,
                cooldownBurn: '140/110/80',
                image: require('../../assets/lol_hero_icons/skills/FiddleSticksR.png')
            },
        ],
    },
    {
        numID: 34,
        id: 'Fiora_top',
        Key: '114',
        name: '피오라',
        title: '결투의 대가',
        lore: `발로란을 통틀어 가장 무시무시한 데마시아 왕국의 결투가, 피오라. 푸른 강철 레이피어를 다루는 솜씨만큼이나 가차없는 태도와 재빠른 머리 회전으로 유명한 그녀는 아버지가 일으킨 스캔들로 집안의 명성이 땅에 떨어진 후 가문의 지배권을 넘겨받았다. 로렌트 가문의 명성은 더럽혀진 지 오래지만, 피오라는 가문의 명예를 되찾고 데마시아의 위대한 가문으로 일궈온 자리를 되찾기 위해 온 힘을 다하고 있다.`,
        blurb: `발로란을 통틀어 가장 무시무시한 데마시아 왕국의 결투가, 피오라. 푸른 강철 레이피어를 다루는 솜씨만큼이나 가차없는 태도와 재빠른 머리 회전으로 유명한 그녀는 아버지가 일으킨 스캔들로 집안의 명성이 땅에 떨어진 후 가문의 지배권을 넘겨받았다. 로렌트 가문의 명성은 더럽혀진 지 오래지만, 피오라는 가문의 명예를 되찾고 데마시아의 위대한 가문으로 일궈온 자리를 되찾기 위해 온 힘을 다하고 있다.`,
        image: require('../../assets/lol_hero_icons/Fiora.png'),
        background_image: require('../../assets/lol_hero_icons/background/Fiora.jpg'),
        stats: {"hp": 620, "hpperlevel": 99, "mp": 300, "mpperlevel": 60, "movespeed": 345, "armor": 33, "armorperlevel": 4.7, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 150, "hpregen": 8.5, "hpregenperlevel": 0.55, "mpregen": 8, "mpregenperlevel": 0.7, "crit": 0, "critperlevel": 0, "attackdamage": 66, "attackdamageperlevel": 3.3, "attackspeedperlevel": 3.2, "attackspeed": 0.69},
        spells: [
            {
                id: 'passive',
                name: '치명적인 검무',
                description: `피오라가 챔피언의 급소 하나를 드러냅니다. 급소를 가격하면 체력을 회복하고 이동 속도가 상승합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Fiora_P.png')
            },
            {
                id: 'FioraQ',
                name: '찌르기',
                description: `피오라가 한 방향으로 돌진하며 근처 적 하나를 찔러 물리 피해를 입히고 적중 시 효과를 적용합니다.`,
                cooldownBurn: '13/11.25/9.5/7.75/6',
                image: require('../../assets/lol_hero_icons/skills/FioraQ.png')
            },
            {
                id: 'FioraW',
                name: '응수',
                description: `피오라가 잠시 동안 받는 모든 공격과 이동 불가 효과를 막아낸 다음 대상이 있는 방향으로 검을 찌릅니다. 이 공격은 처음 맞은 적 챔피언을 둔화시키고, 피오라가 이동 불가 효과를 막아낼 경우 공격한 상대를 기절시킵니다.`,
                cooldownBurn: '24/22/20/18/16',
                image: require('../../assets/lol_hero_icons/skills/FioraW.png')
            },
            {
                id: 'FioraE',
                name: '대가의 검술',
                description: `피오라는 다음 두 번의 공격에 대해 공격 속도가 상승합니다. 첫 번째 공격은 대상을 둔화시키고, 두 번째 공격은 치명타가 됩니다.`,
                cooldownBurn: '11/10/9/8/7',
                image: require('../../assets/lol_hero_icons/skills/FioraE.png')
            },
            {
                id: 'FioraR',
                name: '대결투',
                description: `피오라가 적 챔피언의 급소 네 군데를 모두 드러내고 해당 적 근처에서 이동 속도가 증가합니다. 피오라가 급소 네 군데를 모두 가격하거나 한 군데라도 가격한 후 대상이 죽으면 다음 몇 초 동안 피오라와 주변 지역에 있는 아군이 치유됩니다.`,
                cooldownBurn: '110/90/70',
                image: require('../../assets/lol_hero_icons/skills/FioraR.png')
            },
        ],
    },
    {
        numID: 35,
        id: 'Fizz_mid',
        Key: '105',
        name: '피즈',
        title: '대양의 말썽꾸러기',
        lore: `바다와 육지에서 살 수 있는 요들족 피즈는 빌지워터를 둘러싼 산호초에서 살고 있다. 종종 미신을 믿는 선장들이 바다에 바치는 돈을 주워 돌려주기도 하지만, 아무리 신경질적인 뱃사람들이라도 피즈를 화나게 할 만큼 어리석지는 않다. 이 미끈거리는 생명체를 얕잡아본 사람들이 어떻게 되었는지에 대해 수많은 이야기가 전해지고 있기 때문이리라. 이따금 변덕스러운 바다 정령으로 오해받기도 하는 피즈는 바닷속 깊은 곳에 사는 괴물을 부릴 수 있으며, 적과 아군을 모두 놀리면서 즐거워한다고 한다.`,
        blurb: `바다와 육지에서 살 수 있는 요들족 피즈는 빌지워터를 둘러싼 산호초에서 살고 있다. 종종 미신을 믿는 선장들이 바다에 바치는 돈을 주워 돌려주기도 하지만, 아무리 신경질적인 뱃사람들이라도 피즈를 화나게 할 만큼 어리석지는 않다. 이 미끈거리는 생명체를 얕잡아본 사람들이 어떻게 되었는지에 대해 수많은 이야기가 전해지고 있기 때문이리라. 이따금 변덕스러운 바다 정령으로 오해받기도 하는 피즈는 바닷속 깊은 곳에 사는 괴물을 부릴 수 있으며, 적과 아군을...`,
        image: require('../../assets/lol_hero_icons/Fizz.png'),
        background_image: require('../../assets/lol_hero_icons/background/Fizz.jpg'),
        stats: {"hp": 640, "hpperlevel": 106, "mp": 317, "mpperlevel": 52, "movespeed": 335, "armor": 22, "armorperlevel": 4.6, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 8, "hpregenperlevel": 0.7, "mpregen": 6, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 58, "attackdamageperlevel": 3, "attackspeedperlevel": 3.1, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '영리한 싸움꾼',
                description: `피즈는 유닛을 통과할 수 있으며 모든 공격으로부터 받는 피해가 고정된 수치만큼 감소합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Fizz_P.png')
            },
            {
                id: 'FizzQ',
                name: '성게 찌르기',
                description: `피즈가 대상을 뚫고 지나가며 마법 피해를 줍니다. 적중 시 효과도 적용됩니다.`,
                cooldownBurn: '8/7.5/7/6.5/6',
                image: require('../../assets/lol_hero_icons/skills/FizzQ.png')
            },
            {
                id: 'FizzW',
                name: '심해석 삼지창',
                description: `피즈가 적을 공격하면 출혈 효과가 적용되어 몇 초 동안 마법 피해를 입힙니다. 피즈의 다음 기본 공격이 추가 피해를 입히며, 이후 공격이 잠시 동안 강화됩니다.`,
                cooldownBurn: '7/6.5/6/5.5/5',
                image: require('../../assets/lol_hero_icons/skills/FizzW.png')
            },
            {
                id: 'FizzE',
                name: '장난치기 / 재간둥이',
                description: `피즈가 자신의 창 위로 뛰어올라 목표로 지정할 수 없게 됩니다. 이 상태에서 피즈는 땅을 내리치거나 다시금 뛰어오를 수 있습니다.`,
                cooldownBurn: '16/14/12/10/8',
                image: require('../../assets/lol_hero_icons/skills/FizzE.png')
            },
            {
                id: 'FizzR',
                name: '미끼 뿌리기',
                description: `피즈가 지정한 방향으로 마법 물고기를 풀어놓으면, 이 물고기를 건드리는 챔피언에게 들러붙어 이동 속도를 늦춥니다. 잠시 후 상어가 땅 밑에서 튀어나와 대상을 띄워올리며 주변에 있는 적은 옆으로 밀어냅니다. 상어에게 맞은 적은 모두 마법 피해를 입으며 속도가 느려집니다.`,
                cooldownBurn: '100/85/70',
                image: require('../../assets/lol_hero_icons/skills/FizzR.png')
            },
        ],
    },
    {
        numID: 36,
        id: 'Galio_mid_sup',
        Key: '3',
        name: '갈리오',
        title: '위대한 석상',
        lore: `아스라한 빛의 도시 데마시아의 성문 밖, 거대한 석상 갈리오가 경계의 눈을 늦추지 않고 서 있다. 마법사의 공격으로부터 데마시아를 수호하기 위해 만들어진 갈리오는 강력한 마법의 힘이 그를 깨울 때까지 수십 년, 때로는 수백 년 동안 한자리에 미동도 없이 서있다. 일단 깨어나면 전투의 아찔한 스릴과 데마시아인들을 구한다는 자부심을 음미하며 1분 1초도 허투루 쓰는 법이 없다. 그러나 그가 쟁취한 승리의 향기는 결코 달콤하지만은 않다. 아이러니하게도 그가 물리친 마법의 힘이 그에게 생명을 준 원천이기에 전쟁을 승리로 장식한 후에는 다시 깊은 잠으로 빠져든다.`,
        blurb: `아스라한 빛의 도시 데마시아의 성문 밖, 거대한 석상 갈리오가 경계의 눈을 늦추지 않고 서 있다. 마법사의 공격으로부터 데마시아를 수호하기 위해 만들어진 갈리오는 강력한 마법의 힘이 그를 깨울 때까지 수십 년, 때로는 수백 년 동안 한자리에 미동도 없이 서있다. 일단 깨어나면 전투의 아찔한 스릴과 데마시아인들을 구한다는 자부심을 음미하며 1분 1초도 허투루 쓰는 법이 없다. 그러나 그가 쟁취한 승리의 향기는 결코 달콤하지만은 않다. 아이러니하게도...`,
        image: require('../../assets/lol_hero_icons/Galio.png'),
        background_image: require('../../assets/lol_hero_icons/background/Galio.jpg'),
        stats: {"hp": 632, "hpperlevel": 126, "mp": 500, "mpperlevel": 40, "movespeed": 340, "armor": 24, "armorperlevel": 4.7, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 150, "hpregen": 8, "hpregenperlevel": 0.8, "mpregen": 9.5, "mpregenperlevel": 0.7, "crit": 0, "critperlevel": 0, "attackdamage": 59, "attackdamageperlevel": 3.5, "attackspeedperlevel": 1.5, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '석상의 강타',
                description: `몇 초마다 갈리오의 다음 기본 공격이 일정 영역에 추가 마법 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Galio_Passive.png')
            },
            {
                id: 'GalioQ',
                name: '전장의 돌풍',
                description: `갈리오가 두 개의 돌풍을 발사해 지속 피해를 입히는 거대한 소용돌이를 만듭니다.`,
                cooldownBurn: '11/10/9/8/7',
                image: require('../../assets/lol_hero_icons/skills/GalioQ.png')
            },
            {
                id: 'GalioW',
                name: '듀란드의 방패',
                description: `갈리오가 방어 태세를 갖추며 움직임이 느려집니다. 스킬을 다시 사용하면 근처의 적을 모두 도발하고 피해를 줍니다.`,
                cooldownBurn: '18/17/16/15/14',
                image: require('../../assets/lol_hero_icons/skills/GalioW.png')
            },
            {
                id: 'GalioE',
                name: '정의의 주먹',
                description: `갈리오가 잠시 뒤로 물러났다가 돌진하며 처음으로 충돌한 적 챔피언을 공중으로 띄웁니다.`,
                cooldownBurn: '11/10/9/8/7',
                image: require('../../assets/lol_hero_icons/skills/GalioE.png')
            },
            {
                id: 'GalioR',
                name: '영웅출현',
                description: `갈리오가 아군이 있는 위치를 착지 지점으로 정해, 해당 지점 주변의 모든 아군에게 마법 보호막을 씌웁니다. 잠시 후 해당 지역에 착지하여 근처의 적을 공중으로 띄웁니다.`,
                cooldownBurn: '180/160/140',
                image: require('../../assets/lol_hero_icons/skills/GalioR.png')
            },
        ],
    },
    {
        numID: 37,
        id: 'Gangplank_top',
        Key: '41',
        name: '갱플랭크',
        title: '바다의 무법자',
        lore: `몰락한 해적왕 갱플랭크는 잔인한 성격에다 종잡을 수 없으며 사악함은 타의 추종을 불허한다. 과거 항구도시 빌지워터를 힘으로 장악했으나 지금은 영향력을 잃었다. 하지만 사람들은 그렇기 때문에 오히려 갱플랭크가 더 미쳐 날뛰리라고 생각한다. 갱플랭크는 빌지워터를 다른 사람에게 넘기느니 다시 한 번 피바다로 만들어 버릴 인물이니까. 그리고 이제, 권총, 해적검, 화약통으로 무장한 갱플랭크가 잃었던 패권을 되찾기 위한 준비를 끝냈다.`,
        blurb: `몰락한 해적왕 갱플랭크는 잔인한 성격에다 종잡을 수 없으며 사악함은 타의 추종을 불허한다. 과거 항구도시 빌지워터를 힘으로 장악했으나 지금은 영향력을 잃었다. 하지만 사람들은 그렇기 때문에 오히려 갱플랭크가 더 미쳐 날뛰리라고 생각한다. 갱플랭크는 빌지워터를 다른 사람에게 넘기느니 다시 한 번 피바다로 만들어 버릴 인물이니까. 그리고 이제, 권총, 해적검, 화약통으로 무장한 갱플랭크가 잃었던 패권을 되찾기 위한 준비를 끝냈다.`,
        image: require('../../assets/lol_hero_icons/Gangplank.png'),
        background_image: require('../../assets/lol_hero_icons/background/Gangplank.jpg'),
        stats: {"hp": 630, "hpperlevel": 114, "mp": 280, "mpperlevel": 60, "movespeed": 345, "armor": 31, "armorperlevel": 4.7, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 6, "hpregenperlevel": 0.6, "mpregen": 7.5, "mpregenperlevel": 0.7, "crit": 0, "critperlevel": 0, "attackdamage": 64, "attackdamageperlevel": 3.7, "attackspeedperlevel": 3.2, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '불의 심판',
                description: `몇 초에 한 번씩 갱플랭크의 근접 공격이 적에게 불을 붙입니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Gangplank_Passive.png')
            },
            {
                id: 'GangplankQWrapper',
                name: '혀어어어업상',
                description: `대상에게 총을 발사해 처치한 적 유닛마다 골드를 약탈합니다.`,
                cooldownBurn: '4.5',
                image: require('../../assets/lol_hero_icons/skills/GangplankQWrapper.png')
            },
            {
                id: 'GangplankW',
                name: '괴혈병 치료',
                description: `귤을 먹어서 군중 제어 효과를 제거하고 체력을 회복합니다.`,
                cooldownBurn: '22/20/18/16/14',
                image: require('../../assets/lol_hero_icons/skills/GangplankW.png')
            },
            {
                id: 'GangplankE',
                name: '화약통',
                description: `갱플랭크가 대상 위치에 화약통을 비치합니다. 갱플랭크가 이 통을 공격하면 폭발하여 주위 적들에게 피해를 입히며 둔화를 적용합니다.`,
                cooldownBurn: '0',
                image: require('../../assets/lol_hero_icons/skills/GangplankE.png')
            },
            {
                id: 'GangplankR',
                name: '포탄 세례',
                description: `갱플랭크가 특정 지역을 포격하도록 배에 신호하여 적의 이동 속도를 늦추며 피해를 입힙니다.`,
                cooldownBurn: '170/150/130',
                image: require('../../assets/lol_hero_icons/skills/GangplankR.png')
            },
        ],
    },
    {
        numID: 38,
        id: 'Garen_top_mid',
        Key: '86',
        name: '가렌',
        title: '데마시아의 힘',
        lore: `가렌은 불굴의 선봉대를 이끄는 고결하고 자긍심 강한 전사다. 선봉대 내에서 인망이 두터울 뿐 아니라 심지어 적에게도 존경을 받지만, 그가 대대로 데마시아와 데마시아의 이상을 수호하는 임무를 맡은 크라운가드 가문의 자손이기 때문은 아니다. 가렌은 마법 저항력을 갖춘 방어구와 거대한 대검으로 무장하고, 언제라도 마법사에 맞서 정당한 검으로 진정한 칼바람을 일으킬 준비가 되어 있다.`,
        blurb: `가렌은 불굴의 선봉대를 이끄는 고결하고 자긍심 강한 전사다. 선봉대 내에서 인망이 두터울 뿐 아니라 심지어 적에게도 존경을 받지만, 그가 대대로 데마시아와 데마시아의 이상을 수호하는 임무를 맡은 크라운가드 가문의 자손이기 때문은 아니다. 가렌은 마법 저항력을 갖춘 방어구와 거대한 대검으로 무장하고, 언제라도 마법사에 맞서 정당한 검으로 진정한 칼바람을 일으킬 준비가 되어 있다.`,
        image: require('../../assets/lol_hero_icons/Garen.png'),
        background_image: require('../../assets/lol_hero_icons/background/Garen.jpg'),
        stats: {"hp": 690, "hpperlevel": 98, "mp": 0, "mpperlevel": 0, "movespeed": 340, "armor": 38, "armorperlevel": 4.2, "spellblock": 32, "spellblockperlevel": 1.55, "attackrange": 175, "hpregen": 8, "hpregenperlevel": 0.5, "mpregen": 0, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 69, "attackdamageperlevel": 4.5, "attackspeedperlevel": 3.65, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '인내심',
                description: `가렌이 잠시 적의 기본 공격 및 스킬 공격에 맞지 않으면 1초마다 총 체력의 일정 비율씩 회복됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Garen_Passive.png')
            },
            {
                id: 'GarenQ',
                name: '결정타',
                description: `가렌의 이동 속도가 큰 폭으로 증가하고 현재 걸려 있는 모든 둔화 효과가 제거됩니다. 가렌의 다음 공격은 적의 급소를 가격하여 추가 피해를 입히고 침묵시킵니다.`,
                cooldownBurn: '8',
                image: require('../../assets/lol_hero_icons/skills/GarenQ.png')
            },
            {
                id: 'GarenW',
                name: '용기',
                description: `가렌은 적을 처치하면 기본 지속 효과로 방어력과 마법 저항력이 증가합니다. 또한 효과가 활성화되면 잠시 동안 보호막과 강인함이 부여되며 이후에는 좀 더 긴 시간 동안 받는 피해량 감소 효과가 약하게 적용됩니다.`,
                cooldownBurn: '23/21/19/17/15',
                image: require('../../assets/lol_hero_icons/skills/GarenW.png')
            },
            {
                id: 'GarenE',
                name: '심판',
                description: `가렌이 검을 들고 빠르게 회전하여 주변 적에게 물리 피해를 입힙니다.`,
                cooldownBurn: '9',
                image: require('../../assets/lol_hero_icons/skills/GarenE.png')
            },
            {
                id: 'GarenR',
                name: '데마시아의 정의',
                description: `가렌이 적 챔피언을 처단할 데마시아의 힘을 소환합니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/GarenR.png')
            },
        ],
    },
    {
        numID: 39,
        id: 'Gnar_top',
        Key: '150',
        name: '나르',
        title: '잃어버린 고리',
        lore: `고대 요들인 나르는 익살스러운 장난을 치다가도 어린아이 같은 변덕을 부려 벌컥 화를 내며, 그럴 때면 순식간에 거대한 몸집의 야수로 변하여 주변을 마구 때려부순다. 수천 년 동안이나 얼음 정수에 갇혀 있다가 풀려난 터라, 지금의 세계는 나르에게 진기하고 경이로운 세상이다. 호기심 많은 나르는 위험이 닥치면 오히려 즐거워하며, 뼈이빨 부메랑이든 옆에 서 있는 건물이든 닥치는 대로 집어들어 적에게 던진다.`,
        blurb: `고대 요들인 나르는 익살스러운 장난을 치다가도 어린아이 같은 변덕을 부려 벌컥 화를 내며, 그럴 때면 순식간에 거대한 몸집의 야수로 변하여 주변을 마구 때려부순다. 수천 년 동안이나 얼음 정수에 갇혀 있다가 풀려난 터라, 지금의 세계는 나르에게 진기하고 경이로운 세상이다. 호기심 많은 나르는 위험이 닥치면 오히려 즐거워하며, 뼈이빨 부메랑이든 옆에 서 있는 건물이든 닥치는 대로 집어들어 적에게 던진다.`,
        image: require('../../assets/lol_hero_icons/Gnar.png'),
        background_image: require('../../assets/lol_hero_icons/background/Gnar.jpg'),
        stats: {"hp": 540, "hpperlevel": 79, "mp": 100, "mpperlevel": 0, "movespeed": 335, "armor": 32, "armorperlevel": 3.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 175, "hpregen": 4.5, "hpregenperlevel": 1.25, "mpregen": 0, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 60, "attackdamageperlevel": 3.2, "attackspeedperlevel": 6, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '분노 유전자',
                description: `나르는 전투 중 분노가 생성됩니다. 분노가 최고치에 도달하면 다음번 스킬을 사용할 때 메가 나르로 변신하여 생존력이 커지고 스킬이 바뀝니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Gnar_Passive.png')
            },
            {
                id: 'GnarQ',
                name: '부메랑 던지기 / 돌덩이 던지기',
                description: `나르가 부메랑을 던지면 맞힌 적에게 피해를 입히고 속도를 늦춘 다음 나르에게 돌아옵니다. 나르가 부메랑을 받으면 재사용 대기시간이 감소합니다.메가 나르는 돌덩어리를 던져 주위 모두에게 피해를 입히고 속도를 늦춥니다. 던져진 돌덩어리는 적에게 맞으면 그 자리에 멈추며, 메가 나르가 다시 집어들면 재사용 대기시간이 감소합니다.`,
                cooldownBurn: '20/17.5/15/12.5/10',
                image: require('../../assets/lol_hero_icons/skills/GnarQ.png')
            },
            {
                id: 'GnarW',
                name: '슝슝 / 쿵쾅',
                description: `나르는 기본 공격과 스킬 공격을 하면 신이 나서 추가 피해를 입히며 이동 속도가 상승합니다.메가 나르는 너무 분노해 있어서, 뒷발로 일어나서 전방을 꽝 내리치며 일정 범위 안의 적들을 기절시킵니다.`,
                cooldownBurn: '7',
                image: require('../../assets/lol_hero_icons/skills/GnarW.png')
            },
            {
                id: 'GnarE',
                name: '폴짝 / 우지끈',
                description: `나르가 대상 지점으로 폴짝 뛰며, 유닛의 머리 위에 착지하는 경우에는 튕겨서 더 멀리 날아갑니다.메가 나르는 튕겨가기에는 너무 커서, 대신 착지한 지면에 균열을 일으키고 주위 일정 반경에 피해를 입힙니다.`,
                cooldownBurn: '22/19.5/17/14.5/12',
                image: require('../../assets/lol_hero_icons/skills/GnarE.png')
            },
            {
                id: 'GnarR',
                name: '나르!',
                description: `메가 나르가 선택한 방향으로 주위 모두를 집어던져 피해를 입히고 속도를 늦춥니다. 벽에 부딪힌 적은 기절하며 추가 피해를 입습니다.`,
                cooldownBurn: '90/60/30',
                image: require('../../assets/lol_hero_icons/skills/GnarR.png')
            },
        ],
    },
    {
        numID: 40,
        id: 'Gragas_top_jug',
        Key: '79',
        name: '그라가스',
        title: '술취한 난동꾼',
        lore: `그라가스는 몸집이 크고 소란스러워서 한 번 보면 잊기 힘든 쾌활한 주조가로, 완벽한 술을 만들기 위한 여정을 떠나게 되었다. 그라가스가 어디서 왔는지는 아무도 모르지만, 프렐요드의 때묻지 않은 불모지를 뒤지며 희귀한 재료를 찾아 주조법을 하나씩 시험해 보고 있다. 대부분 술에 취해 있어 극도로 충동적인 그라가스는 소동을 일으키는 데에는 전설적인 소질이 있는데, 그 소동은 밤샘 파티와 엄청난 기물 파손으로 이어지기 일쑤다. 그라가스를 보게 된다면 곧 음주, 그리고 파괴가 잇따를 것이라고 생각해도 좋다.`,
        blurb: `그라가스는 몸집이 크고 소란스러워서 한 번 보면 잊기 힘든 쾌활한 주조가로, 완벽한 술을 만들기 위한 여정을 떠나게 되었다. 그라가스가 어디서 왔는지는 아무도 모르지만, 프렐요드의 때묻지 않은 불모지를 뒤지며 희귀한 재료를 찾아 주조법을 하나씩 시험해 보고 있다. 대부분 술에 취해 있어 극도로 충동적인 그라가스는 소동을 일으키는 데에는 전설적인 소질이 있는데, 그 소동은 밤샘 파티와 엄청난 기물 파손으로 이어지기 일쑤다. 그라가스를 보게 된다면 곧...`,
        image: require('../../assets/lol_hero_icons/Gragas.png'),
        background_image: require('../../assets/lol_hero_icons/background/Gragas.jpg'),
        stats: {"hp": 640, "hpperlevel": 115, "mp": 400, "mpperlevel": 47, "movespeed": 330, "armor": 38, "armorperlevel": 5, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 5.5, "hpregenperlevel": 0.5, "mpregen": 6, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 64, "attackdamageperlevel": 3.5, "attackspeedperlevel": 2.05, "attackspeed": 0.675},
        spells: [
            {
                id: 'passive',
                name: '서비스 시간',
                description: `그라가스가 스킬을 사용하면 주기적으로 체력을 회복합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/GragasPassiveHeal.png')
            },
            {
                id: 'GragasQ',
                name: '술통 굴리기',
                description: `그라가스가 술통을 굴려 폭발시킵니다. 술통은 4초 뒤 자동으로 폭발하며 스킬을 다시 사용하여 직접 폭발시킬 수도 있습니다. 술통이 오래 남아 있을수록 위력이 증가하며, 폭발에 맞은 적은 둔화됩니다.`,
                cooldownBurn: '10/9/8/7/6',
                image: require('../../assets/lol_hero_icons/skills/GragasQ.png')
            },
            {
                id: 'GragasW',
                name: '취중 분노',
                description: `그라가스가 1초 동안 술통에 든 술을 마십니다. 술에 취한 그라가스는 매우 강해져 받는 피해가 줄어들고 다음번 기본 공격 시 근처의 모든 대상에게 추가 마법 피해를 입힙니다.`,
                cooldownBurn: '5',
                image: require('../../assets/lol_hero_icons/skills/GragasW.png')
            },
            {
                id: 'GragasE',
                name: '몸통 박치기',
                description: `그라가스가 지정한 위치로 몸을 날려 가장 먼저 부딪히는 적과 그 주변의 다른 적 유닛에게 피해를 주며 기절시킵니다.`,
                cooldownBurn: '14/13.5/13/12.5/12',
                image: require('../../assets/lol_hero_icons/skills/GragasE.png')
            },
            {
                id: 'GragasR',
                name: '술통 폭발',
                description: `그라가스가 술통을 지정한 위치에 던져, 폭발 반경 내의 적들에게 피해를 입히고 멀리 밀어냅니다.`,
                cooldownBurn: '100/85/70',
                image: require('../../assets/lol_hero_icons/skills/GragasR.png')
            },
        ],
    },
    {
        numID: 41,
        id: 'Graves_top_mid_jug',
        Key: '104',
        name: '그레이브즈',
        title: '무법자',
        lore: `말콤 그레이브즈는 명성이 자자한 용병, 도박사, 도적으로, 그가 한 번이라도 발을 들였던 모든 도시와 제국에서 수배령이 떨어져 있을 정도다. 그레이브즈는 성미가 불 같지만, 범죄의 명예에 엄격한 면이 있어 자신의 이중 총열 산탄총 '운명'으로 마무리를 하는 경우가 잦다. 최근에는 트위스티드 페이트와 함께 바람 잘 날 없던 파트너 관계를 다시 맺고, 범죄의 냄새가 나는 빌지워터의 그늘진 곳에서 벌어지는 소동을 다시 한 번 주름잡고 있다.`,
        blurb: `말콤 그레이브즈는 명성이 자자한 용병, 도박사, 도적으로, 그가 한 번이라도 발을 들였던 모든 도시와 제국에서 수배령이 떨어져 있을 정도다. 그레이브즈는 성미가 불 같지만, 범죄의 명예에 엄격한 면이 있어 자신의 이중 총열 산탄총 '운명'으로 마무리를 하는 경우가 잦다. 최근에는 트위스티드 페이트와 함께 바람 잘 날 없던 파트너 관계를 다시 맺고, 범죄의 냄새가 나는 빌지워터의 그늘진 곳에서 벌어지는 소동을 다시 한 번 주름잡고 있다.`,
        image: require('../../assets/lol_hero_icons/Graves.png'),
        background_image: require('../../assets/lol_hero_icons/background/Graves.jpg'),
        stats: {"hp": 625, "hpperlevel": 106, "mp": 325, "mpperlevel": 40, "movespeed": 340, "armor": 33, "armorperlevel": 4.6, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 425, "hpregen": 8, "hpregenperlevel": 0.7, "mpregen": 8, "mpregenperlevel": 0.7, "crit": 0, "critperlevel": 0, "attackdamage": 68, "attackdamageperlevel": 4, "attackspeedperlevel": 3, "attackspeed": 0.475},
        spells: [
            {
                id: 'passive',
                name: '새로운 운명',
                description: `그레이브즈의 산탄총에는 몇 가지 특징이 있습니다. 총탄이 떨어지면 총을 새로 장전해야 합니다. 공격 시 4개의 탄환이 발사되며 유닛을 관통해서 공격할 수 없습니다. 챔피언이 아닌 유닛이 탄환을 여러 개 맞으면 뒤로 밀려납니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/GravesTrueGrit.png')
            },
            {
                id: 'GravesQLineSpell',
                name: '화약 역류',
                description: `그레이브즈가 탄환을 발사합니다. 탄환은 발사 2초 뒤, 지형에 충돌 시 0.2초 뒤 폭발합니다.`,
                cooldownBurn: '13/11.25/9.5/7.75/6',
                image: require('../../assets/lol_hero_icons/skills/GravesQLineSpell.png')
            },
            {
                id: 'GravesSmokeGrenade',
                name: '연막탄',
                description: `그레이브즈가 목표 지점에 연막탄을 발사하여 시야를 좁히는 연기 구름을 만들어냅니다. 처음으로 연막탄에 맞은 적은 마법 피해를 입고 잠시 동안 이동 속도가 감소합니다.`,
                cooldownBurn: '26/24/22/20/18',
                image: require('../../assets/lol_hero_icons/skills/GravesSmokeGrenade.png')
            },
            {
                id: 'GravesMove',
                name: '빨리 뽑기',
                description: `그레이브즈가 전방으로 돌진하여 몇 초 동안 방어력이 상승하며, 적 챔피언을 향해 돌진할 경우에는 진정한 용기가 두 번 중첩됩니다. 기본 공격으로 적을 명중시키면 스킬 재사용 대기시간이 감소하고 추가 방어력 및 마법 저항력 지속시간이 초기화됩니다.`,
                cooldownBurn: '16/15/14/13/12',
                image: require('../../assets/lol_hero_icons/skills/GravesMove.png')
            },
            {
                id: 'GravesChargeShot',
                name: '무고한 희생자',
                description: `그레이브즈가 폭발성 탄환을 발사하여 처음 맞은 챔피언에게 큰 피해를 입힙니다. 탄환은 챔피언을 맞히거나 사거리 끝까지 날아간 다음 폭발하여 원뿔 형태의 범위에 피해를 줍니다.`,
                cooldownBurn: '100/80/60',
                image: require('../../assets/lol_hero_icons/skills/GravesChargeShot.png')
            },
        ],
    },
    {
        numID: 42,
        id: 'Gwen_jug_top',
        Key: '887',
        name: '그웬',
        title: '신성한 재봉사',
        lore: `마법의 힘으로 살아나 인간이 된 인형 그웬은 한때 자신을 만들었던 도구를 휘두른다. 발걸음을 내디딜 때마다 자신을 만든 창조자의 사랑을 느끼며 모든 것을 감사히 여긴다. 그웬이 부리는 신성한 안개는 그웬의 가위와 바늘, 실에 축복을 내린 고대의 보호 마법이다. 모든 게 새로운 것으로 가득하지만, 그웬은 망가진 세상에서 살아남은 선한 이들을 위해 기꺼이 싸우러 나선다.`,
        blurb: `마법의 힘으로 살아나 인간이 된 인형 그웬은 한때 자신을 만들었던 도구를 휘두른다. 발걸음을 내디딜 때마다 자신을 만든 창조자의 사랑을 느끼며 모든 것을 감사히 여긴다. 그웬이 부리는 신성한 안개는 그웬의 가위와 바늘, 실에 축복을 내린 고대의 보호 마법이다. 모든 게 새로운 것으로 가득하지만, 그웬은 망가진 세상에서 살아남은 선한 이들을 위해 기꺼이 싸우러 나선다.`,
        image: require('../../assets/lol_hero_icons/Gwen.png'),
        background_image: require('../../assets/lol_hero_icons/background/Gwen.jpg'),
        stats: {"hp": 620, "hpperlevel": 115, "mp": 330, "mpperlevel": 40, "movespeed": 340, "armor": 39, "armorperlevel": 5.2, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 150, "hpregen": 9, "hpregenperlevel": 0.9, "mpregen": 7.5, "mpregenperlevel": 0.7, "crit": 0, "critperlevel": 0, "attackdamage": 63, "attackdamageperlevel": 3, "attackspeedperlevel": 2.25, "attackspeed": 0.69},
        spells: [
            {
                id: 'passive',
                name: '가위 난도질',
                description: `그웬의 기본 공격이 대상의 체력에 비례해 추가 마법 피해를 입힙니다. 챔피언을 상대로 기본 공격 시 해당 피해의 일부만큼 체력을 회복합니다. `,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Gwen_Passive.png')
            },
            {
                id: 'GwenQ',
                name: '싹둑싹둑!',
                description: `그웬이 최대 6회까지 가위질하여 원뿔 범위에 마법 피해를 입힙니다. 중앙에 있는 유닛에게는 고정 피해를 입히고 적중할 때마다 기본 지속 효과를 적용합니다.`,
                cooldownBurn: '6.5/5.75/5/4.25/3.5',
                image: require('../../assets/lol_hero_icons/skills/GwenQ.png')
            },
            {
                id: 'GwenW',
                name: '신성한 안개',
                description: `그웬이 안개를 소환하여 안개 밖에 있는 적으로부터 자신을 보호합니다. 안개에 들어오는 적만이 그웬을 대상으로 지정할 수 있습니다.`,
                cooldownBurn: '22/21/20/19/18',
                image: require('../../assets/lol_hero_icons/skills/GwenW.png')
            },
            {
                id: 'GwenE',
                name: '돌격가위',
                description: `짧은 거리를 돌진한 후 몇 초 동안 그웬의 공격 속도, 공격 사거리, 적중 시 마법 피해가 증가합니다. 이때 적에게 공격을 적중시키면 이 스킬의 재사용 대기시간을 일부 돌려받습니다. `,
                cooldownBurn: '13/12.5/12/11.5/11',
                image: require('../../assets/lol_hero_icons/skills/GwenE.png')
            },
            {
                id: 'GwenR',
                name: '바느질',
                description: `그웬이 바늘을 던져 적중한 적에게 마법 피해를 입히고 둔화시킵니다. 챔피언에게 적중 시 가위 난도질을 적용합니다. 이 스킬은 최대 2회 더 사용할 수 있으며, 재사용할 때마다 추가 바늘을 던져 더 많은 피해를 입힙니다. 스킬 사용 후 그웬이 적에게 공격이나 스킬을 적중시켜야 이 스킬을 재사용할 수 있습니다. `,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/GwenR.png')
            },
        ],
    },
    {
        numID: 43,
        id: 'Hecarim_jug',
        Key: '120',
        name: '헤카림',
        title: '전쟁의 전조',
        lore: `헤카림은 말과 인간이 한 몸인 반인반수 유령으로, 산 자들의 영혼을 끝없이 추적하는 저주를 받았다. 원래는 자존심 강한 기사로 자신의 기사단을 이끌었으나, 축복의 빛 군도에 그림자가 드리울 때 대몰락의 파괴 에너지에 휩쓸려 최후를 맞았다. 그 이후 헤카림과 기사단은 타고 있던 말과 한 몸이 되어, 검은 안개가 룬테라에 깔릴 때면 무자비한 돌격을 일삼는다. 이제 그에게 남은 쾌락이란 적을 학살하고 철갑을 두른 말발굽 아래 그 시체를 깔아뭉개는 것뿐이다.`,
        blurb: `헤카림은 말과 인간이 한 몸인 반인반수 유령으로, 산 자들의 영혼을 끝없이 추적하는 저주를 받았다. 원래는 자존심 강한 기사로 자신의 기사단을 이끌었으나, 축복의 빛 군도에 그림자가 드리울 때 대몰락의 파괴 에너지에 휩쓸려 최후를 맞았다. 그 이후 헤카림과 기사단은 타고 있던 말과 한 몸이 되어, 검은 안개가 룬테라에 깔릴 때면 무자비한 돌격을 일삼는다. 이제 그에게 남은 쾌락이란 적을 학살하고 철갑을 두른 말발굽 아래 그 시체를 깔아뭉개는 것뿐이다.`,
        image: require('../../assets/lol_hero_icons/Hecarim.png'),
        background_image: require('../../assets/lol_hero_icons/background/Hecarim.jpg'),
        stats: {"hp": 625, "hpperlevel": 106, "mp": 280, "mpperlevel": 40, "movespeed": 345, "armor": 32, "armorperlevel": 5.45, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 7, "hpregenperlevel": 0.75, "mpregen": 7, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 66, "attackdamageperlevel": 3.7, "attackspeedperlevel": 2.5, "attackspeed": 0.67},
        spells: [
            {
                id: 'passive',
                name: '출정',
                description: `헤카림의 공격력이 추가 이동 속도의 일정 비율만큼 증가합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Hecarim_Passive.png')
            },
            {
                id: 'HecarimRapidSlash',
                name: '회오리 베기',
                description: `헤카림이 주변 적을 베어 물리 피해를 입힙니다. 한 명의 적이라도 적중 시 다음 회오리 베기의 피해량이 증가하며 재사용 대기시간이 감소합니다.`,
                cooldownBurn: '4',
                image: require('../../assets/lol_hero_icons/skills/HecarimRapidSlash.png')
            },
            {
                id: 'HecarimW',
                name: '공포의 망령',
                description: `헤카림이 방어력과 마법 저항력을 얻습니다. 주변 적들에게 마법 피해를 입히고, 적들이 입은 피해의 일정 비율에 해당하는 체력을 회복합니다.`,
                cooldownBurn: '14',
                image: require('../../assets/lol_hero_icons/skills/HecarimW.png')
            },
            {
                id: 'HecarimRamp',
                name: '파멸의 돌격',
                description: `잠깐 동안 헤카림의 이동 속도가 빨라지고 다른 유닛을 통과해 이동할 수 있습니다. 다음번 공격은 대상을 뒤로 밀어내고, 스킬을 사용한 후 이동한 거리에 비례하여 추가 물리 피해를 입힙니다.`,
                cooldownBurn: '20/19/18/17/16',
                image: require('../../assets/lol_hero_icons/skills/HecarimRamp.png')
            },
            {
                id: 'HecarimUlt',
                name: '그림자의 맹습',
                description: `헤카림이 유령 기수들을 소환하며 전방으로 돌진해 일직선 상에 마법 피해를 입힙니다. 헤카림이 돌격을 멈추면 충격파가 발생하여, 주변 적들이 공포에 사로잡혀 달아납니다.`,
                cooldownBurn: '140/120/100',
                image: require('../../assets/lol_hero_icons/skills/HecarimUlt.png')
            },
        ],
    },
    {
        numID: 44,
        id: 'Heimerdinger_mid_top_sup',
        Key: '74',
        name: '하이머딩거',
        title: '위대한 발명가',
        lore: `아주 명석하지만 괴짜 성향이 다분한 요들 과학자 세실 B. 하이머딩거 교수. 그는 필트오버가 배출한 가장 혁신적인 인재 가운데 한 명으로 모든 이의 존경을 받는 발명가다. 자신의 일에 있어서는 과할 정도로 집요하게 파고드는 탓에 신경증적 강박관념이 있을 정도인 하이머딩거는 좀처럼 이해하기 어려웠던 문제들을 하나둘 풀어내고 있다. 그의 이론은 때로 불분명하고 난해해 보이기도 하지만, 하이머딩거는 필트오버에서 가장 기적적이고 치명적인 여러 기계를 발명했고, 그 효율을 더욱 높이기 위해 꾸준히 연구하고 있다.`,
        blurb: `아주 명석하지만 괴짜 성향이 다분한 요들 과학자 세실 B. 하이머딩거 교수. 그는 필트오버가 배출한 가장 혁신적인 인재 가운데 한 명으로 모든 이의 존경을 받는 발명가다. 자신의 일에 있어서는 과할 정도로 집요하게 파고드는 탓에 신경증적 강박관념이 있을 정도인 하이머딩거는 좀처럼 이해하기 어려웠던 문제들을 하나둘 풀어내고 있다. 그의 이론은 때로 불분명하고 난해해 보이기도 하지만, 하이머딩거는 필트오버에서 가장 기적적이고 치명적인 여러 기계를...`,
        image: require('../../assets/lol_hero_icons/Heimerdinger.png'),
        background_image: require('../../assets/lol_hero_icons/background/Heimerdinger.jpg'),
        stats: {"hp": 558, "hpperlevel": 101, "mp": 385, "mpperlevel": 20, "movespeed": 340, "armor": 19, "armorperlevel": 4.2, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 7, "hpregenperlevel": 0.55, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 56, "attackdamageperlevel": 2.7, "attackspeedperlevel": 1.36, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '마법공학 전문가',
                description: `아군 포탑이나 하이머딩거가 설치한 포탑 주변에서 이동 속도가 증가합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Heimerdinger_Passive.png')
            },
            {
                id: 'HeimerdingerQ',
                name: 'H-28 G 진화형 포탑',
                description: `하이머딩거가 관통 광선 공격이 추가된 속사포 포탑을 설치합니다. (하이머딩거의 포탑은 적 포탑에 절반의 피해만 줍니다.)`,
                cooldownBurn: '1',
                image: require('../../assets/lol_hero_icons/skills/HeimerdingerQ.png')
            },
            {
                id: 'HeimerdingerW',
                name: '마법공학 초소형 로켓',
                description: `하이머딩거가 마우스 커서 위치로 모이는 초소형 로켓들을 발사합니다.`,
                cooldownBurn: '11/10/9/8/7',
                image: require('../../assets/lol_hero_icons/skills/HeimerdingerW.png')
            },
            {
                id: 'HeimerdingerE',
                name: 'CH-2 전자폭풍 수류탄',
                description: `하이머딩거가 목표 위치에 수류탄을 던져 적에게 피해를 입힙니다. 수류탄에 직격당한 적은 기절하며, 빗겨맞은 유닛은 느려집니다.`,
                cooldownBurn: '11',
                image: require('../../assets/lol_hero_icons/skills/HeimerdingerE.png')
            },
            {
                id: 'HeimerdingerR',
                name: '업그레이드!!!',
                description: `하이머딩거가 업그레이드를 개발하여, 다음 스킬의 효과가 증가합니다. `,
                cooldownBurn: '100/85/70',
                image: require('../../assets/lol_hero_icons/skills/HeimerdingerR.png')
            },
        ],
    },
    {
        numID: 45,
        id: 'Hwei_mid_sup',
        Key: '910',
        name: '흐웨이',
        title: '몽상가',
        lore: `음울한 화가 흐웨이는 찬란한 그림을 그려 아이오니아의 범죄자에게 맞서고, 희생자들에게는 위안을 선사한다. 우울한 겉모습 아래에는 갈가리 찢어진 감성이 자리를 잡고 있다. 그리고 자신의 상상력에서 비롯된 생생한 환상과 끔찍한 사원 학살극의 기억은 흐웨이를 쫓아다니며 괴롭힌다. 흐웨이의 목표는 이 명암을 이해하고, 종국에는 자신을 찢어발긴 예술가에게 닿는 것이다. 붓과 팔레트에서 피어나는 가능성이 흐웨이의 앞길을 인도한다. 그 끝이 절망의 극복일지, 포용일지는 아직은 알 수 없는 일이다.`,
        blurb: `음울한 화가 흐웨이는 찬란한 그림을 그려 아이오니아의 범죄자에게 맞서고, 희생자들에게는 위안을 선사한다. 우울한 겉모습 아래에는 갈가리 찢어진 감성이 자리를 잡고 있다. 그리고 자신의 상상력에서 비롯된 생생한 환상과 끔찍한 사원 학살극의 기억은 흐웨이를 쫓아다니며 괴롭힌다. 흐웨이의 목표는 이 명암을 이해하고, 종국에는 자신을 찢어발긴 예술가에게 닿는 것이다. 붓과 팔레트에서 피어나는 가능성이 흐웨이의 앞길을 인도한다. 그 끝이 절망의 극복일지...`,
        image: require('../../assets/lol_hero_icons/Hwei.png'),
        background_image: require('../../assets/lol_hero_icons/background/Hwei.jpg'),
        stats: {"hp": 580, "hpperlevel": 109, "mp": 480, "mpperlevel": 30, "movespeed": 330, "armor": 21, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 5.5, "hpregenperlevel": 0.55, "mpregen": 7.5, "mpregenperlevel": 0.75, "crit": 0, "critperlevel": 0, "attackdamage": 54, "attackdamageperlevel": 3.3, "attackspeedperlevel": 2.5, "attackspeed": 0.69},
        spells: [
            {
                id: 'passive',
                name: '몽상가의 서명',
                description: `흐웨이가 스킬로 적 챔피언에게 피해를 입히면 서명으로 마무리할 준비를 합니다.다시 한번 적에게 스킬로 피해를 입히면 서명이 완성되어 발밑에 남습니다. 발밑에 남겨진 서명은 잠시 후에 폭발해 사거리 내 모든 적에게 마법 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/HweiPassive.png')
            },
            {
                id: 'HweiQ',
                name: '주제: 참사',
                description: `흐웨이가 일련의 참사를 상상하며 파괴적인 일격을 그립니다.흐웨이의 스킬을 공격 스킬인 파멸의 화염, 절단의 번개, 녹아내린 균열로 교체합니다.`,
                cooldownBurn: '10/9/8/7/6',
                image: require('../../assets/lol_hero_icons/skills/HweiQ.png')
            },
            {
                id: 'HweiW',
                name: '주제: 평온',
                description: `흐웨이가 일련의 평온을 상상하며 힘을 북돋는 배경을 그립니다.흐웨이의 스킬을 보조 스킬인 쏜살같은 물살, 반사의 웅덩이, 요동치는 빛으로 교체합니다.`,
                cooldownBurn: '18/17.5/17/16.5/16',
                image: require('../../assets/lol_hero_icons/skills/HweiW.png')
            },
            {
                id: 'HweiE',
                name: '주제: 고통',
                description: `흐웨이가 일련의 고통을 상상하며 제어하는 형상을 그립니다.흐웨이의 스킬을 군중 제어 스킬인 암울한 형상, 심연의 응시, 파괴의 아귀로 교체합니다.`,
                cooldownBurn: '12/11.5/11/10.5/10',
                image: require('../../assets/lol_hero_icons/skills/HweiE.png')
            },
            {
                id: 'HweiR',
                name: '절망의 소용돌이',
                description: `흐웨이가 순수한 절망의 환상을 그립니다. 처음 맞은 적을 중심으로 그림이 점점 커지며 주변 적을 둔화시키고 피해를 입힙니다. 환상은 최대 크기가 되거나 챔피언이 죽으면 폭발합니다.`,
                cooldownBurn: '140/115/80',
                image: require('../../assets/lol_hero_icons/skills/HweiR.png')
            },
        ],
    },
    {
        numID: 46,
        id: 'Illaoi_top',
        Key: '420',
        name: '일라오이',
        title: '크라켄의 여사제',
        lore: `대 크라켄 신의 여사제, 나가카보로스 신을 섬기는 '진리의 사도' 일라오이는 건장한 체격만큼이나 굳건한 신앙심을 지녔다. 거대한 황금빛 성상을 솜인형처럼 가볍게 다루며 상대의 몸과 영혼을 분리하는 모습은 보는 이를 압도하고 적들의 얼을 빼놓기에 충분하다. 그래도 전장에서 일라오이에게 덤벼보겠다면, 바다뱀 군도의 신이 그녀와 함께 한다는 사실을 명심해야 한다.`,
        blurb: `대 크라켄 신의 여사제, 나가카보로스 신을 섬기는 '진리의 사도' 일라오이는 건장한 체격만큼이나 굳건한 신앙심을 지녔다. 거대한 황금빛 성상을 솜인형처럼 가볍게 다루며 상대의 몸과 영혼을 분리하는 모습은 보는 이를 압도하고 적들의 얼을 빼놓기에 충분하다. 그래도 전장에서 일라오이에게 덤벼보겠다면, 바다뱀 군도의 신이 그녀와 함께 한다는 사실을 명심해야 한다.`,
        image: require('../../assets/lol_hero_icons/Illaoi.png'),
        background_image: require('../../assets/lol_hero_icons/background/Illaoi.jpg'),
        stats: {"hp": 656, "hpperlevel": 115, "mp": 350, "mpperlevel": 60, "movespeed": 350, "armor": 35, "armorperlevel": 5, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 9.5, "hpregenperlevel": 0.8, "mpregen": 7.5, "mpregenperlevel": 0.75, "crit": 0, "critperlevel": 0, "attackdamage": 68, "attackdamageperlevel": 5, "attackspeedperlevel": 2.5, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '고대신의 예언자',
                description: `일라오이와 그녀의 숙주는 근처의 통과할 수 없는 지형에 촉수를 소환합니다. 촉수는 영혼과 숙주, 그리고 혹독한 가르침 스킬의 희생양을 공격합니다. 촉수에게 맞는 적들은 물리 피해를 입습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Illaoi_P.png')
            },
            {
                id: 'IllaoiQ',
                name: '촉수 강타',
                description: `촉수의 피해량이 증가합니다. 사용 시 일라오이가 촉수로 내리쳐 물리 피해를 입힙니다.`,
                cooldownBurn: '10/9/8/7/6',
                image: require('../../assets/lol_hero_icons/skills/IllaoiQ.png')
            },
            {
                id: 'IllaoiW',
                name: '혹독한 가르침',
                description: `일라오이가 대상으로 도약해 물리 피해를 입히며, 근처의 촉수 또한 대상을 공격합니다.`,
                cooldownBurn: '4',
                image: require('../../assets/lol_hero_icons/skills/IllaoiW.png')
            },
            {
                id: 'IllaoiE',
                name: '영혼의 시험',
                description: `일라오이가 적의 몸에서 영혼을 분리해 자신의 앞에 서게 만듭니다. 영혼은 자신이 입는 피해량의 일부를 원래의 대상에게 돌려줍니다. 대상이 처치되거나 영혼에서 너무 멀어지면, 대상은 숙주가 되어 촉수를 소환하기 시작합니다.`,
                cooldownBurn: '16/15/14/13/12',
                image: require('../../assets/lol_hero_icons/skills/IllaoiE.png')
            },
            {
                id: 'IllaoiR',
                name: '믿음의 도약',
                description: `일라오이가 자신의 성상을 바닥에 내리쳐 근처 적들에게 물리 피해를 입힙니다. 피해를 입는 적 챔피언 한 명당 하나의 촉수가 소환됩니다.`,
                cooldownBurn: '120/95/70',
                image: require('../../assets/lol_hero_icons/skills/IllaoiR.png')
            },
        ],
    },
    {
        numID: 47,
        id: 'Irelia_mid_top',
        Key: '39',
        name: '이렐리아',
        title: '칼날 무희',
        lore: `녹서스에게 침략당한 후 아이오니아에서는 수많은 영웅이 등장했지만, 나보리 출신의 젊은 이렐리아만큼 독특한 영웅은 없다. 이렐리아는 고향 나보리에 전해 내려오는 고대의 춤을 익혔고, 아이오니아가 침략당하자 그 능력을 전쟁터에서의 기술로 삼았다. 치명적인 위력의 칼날들을 공중에 띄우고 자유자재로 조종하며 싸우는 그녀의 모습은 우아하고 신중하며 군더더기라고는 없었다. 훌륭한 투사임을 입증한 이렐리아는 원하는 바는 아니었으나 아이오니아 저항 세력을 선두에서 이끄는 역할을 맡게 되었고, 지금까지도 고향 땅을 지키고 보존하는 일에 헌신하고 있다.`,
        blurb: `녹서스에게 침략당한 후 아이오니아에서는 수많은 영웅이 등장했지만, 나보리 출신의 젊은 이렐리아만큼 독특한 영웅은 없다. 이렐리아는 고향 나보리에 전해 내려오는 고대의 춤을 익혔고, 아이오니아가 침략당하자 그 능력을 전쟁터에서의 기술로 삼았다. 치명적인 위력의 칼날들을 공중에 띄우고 자유자재로 조종하며 싸우는 그녀의 모습은 우아하고 신중하며 군더더기라고는 없었다. 훌륭한 투사임을 입증한 이렐리아는 원하는 바는 아니었으나 아이오니아 저항 세력을 선두에서...`,
        image: require('../../assets/lol_hero_icons/Irelia.png'),
        background_image: require('../../assets/lol_hero_icons/background/Irelia.jpg'),
        stats: {"hp": 630, "hpperlevel": 115, "mp": 350, "mpperlevel": 50, "movespeed": 335, "armor": 36, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 2.05, "attackrange": 200, "hpregen": 6, "hpregenperlevel": 0.85, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 65, "attackdamageperlevel": 3.5, "attackspeedperlevel": 2.5, "attackspeed": 0.656},
        spells: [
            {
                id: 'passive',
                name: '아이오니아의 열정',
                description: `이렐리아의 스킬이 적에게 적중하면 중첩이 쌓이며, 중첩에 따라 추가 공격 속도가 적용됩니다. 최대 중첩이 쌓이면 적중 시 피해도 증가합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Irelia_Passive.png')
            },
            {
                id: 'IreliaQ',
                name: '칼날 쇄도',
                description: `이렐리아가 돌진해 대상을 공격하고 체력을 회복합니다. 대상에게 표식이 있거나 칼날 쇄도로 적을 처치하면 칼날 쇄도의 재사용 대기시간이 초기화됩니다.`,
                cooldownBurn: '11/10/9/8/7',
                image: require('../../assets/lol_hero_icons/skills/IreliaQ.png')
            },
            {
                id: 'IreliaW',
                name: '저항의 춤',
                description: `이렐리아가 칼날에 힘을 충전한 뒤 공격합니다. 충전 중에는 이렐리아가 받는 물리 피해량이 감소하며 충전을 오래 할수록 공격이 강력해집니다.`,
                cooldownBurn: '20/18/16/14/12',
                image: require('../../assets/lol_hero_icons/skills/IreliaW.png')
            },
            {
                id: 'IreliaE',
                name: '쌍검협무',
                description: `이렐리아가 칼날 두 개를 던진 후 두 칼날이 서로를 향해 날아갑니다. 날아가는 칼날에 맞은 적은 피해를 입으며 기절한 뒤 표식이 생깁니다.`,
                cooldownBurn: '16/15/14/13/12',
                image: require('../../assets/lol_hero_icons/skills/IreliaE.png')
            },
            {
                id: 'IreliaR',
                name: '선봉진격검',
                description: `이렐리아가 칼날 다발을 발사합니다. 적 챔피언에게 적중하면 칼날 다발이 넓게 펼쳐지며 이때 칼날에 적중한 모든 적에게 피해를 주고 표식을 남깁니다. 또한 칼날이 형성한 결계를 적이 통과하면 피해를 입고 둔화됩니다.`,
                cooldownBurn: '125/105/85',
                image: require('../../assets/lol_hero_icons/skills/IreliaR.png')
            },
        ],
    },
    {
        numID: 48,
        id: 'Ivern_jug',
        Key: '427',
        name: '아이번',
        title: '자연의 아버지',
        lore: `자연의 아버지로 잘 알려진 아이번 브램블풋은 룬테라 전역의 숲을 돌아다니며 생명을 가꾼다. 반은 인간, 반은 나무의 형상을 한 그는 자연의 비밀을 속속들이 알고 있을 뿐 아니라 땅에서 자라고, 하늘을 날고, 초원을 달리는 모든 것과 깊은 친분을 맺고 있다. 아이번은 자연 속에서 만나는 모든 이에게 자신만의 지혜를 나누어 주고, 숲을 풍성하게 가꾸며, 때로는 입이 가벼운 나비들에게 비밀을 맡기기도 한다.`,
        blurb: `자연의 아버지로 잘 알려진 아이번 브램블풋은 룬테라 전역의 숲을 돌아다니며 생명을 가꾼다. 반은 인간, 반은 나무의 형상을 한 그는 자연의 비밀을 속속들이 알고 있을 뿐 아니라 땅에서 자라고, 하늘을 날고, 초원을 달리는 모든 것과 깊은 친분을 맺고 있다. 아이번은 자연 속에서 만나는 모든 이에게 자신만의 지혜를 나누어 주고, 숲을 풍성하게 가꾸며, 때로는 입이 가벼운 나비들에게 비밀을 맡기기도 한다.`,
        image: require('../../assets/lol_hero_icons/Ivern.png'),
        background_image: require('../../assets/lol_hero_icons/background/Ivern.jpg'),
        stats: {"hp": 630, "hpperlevel": 99, "mp": 450, "mpperlevel": 60, "movespeed": 330, "armor": 27, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 475, "hpregen": 7, "hpregenperlevel": 0.85, "mpregen": 6, "mpregenperlevel": 0.75, "crit": 0, "critperlevel": 0, "attackdamage": 50, "attackdamageperlevel": 3, "attackspeedperlevel": 3.4, "attackspeed": 0.644},
        spells: [
            {
                id: 'passive',
                name: '숲의 친구',
                description: `아이번은 에픽 몬스터를 제외한 몬스터와는 서로 공격할 수 없지만, 대신 정글 캠프에 마법의 덤불을 심을 수 있습니다. 덤불은 시간이 지나면서 점점 자라나고, 완전히 자라난 후 클릭하면 몬스터가 풀려나며 아이번은 골드와 경험치를 얻게 됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/IvernP.png')
            },
            {
                id: 'IvernQ',
                name: '덩굴뿌리',
                description: `아이번이 덩굴뿌리를 던져 적중한 적을 속박하고 피해를 입힙니다. 아군은 속박된 대상에게 돌진할 수 있습니다.`,
                cooldownBurn: '14/13/12/11/10',
                image: require('../../assets/lol_hero_icons/skills/IvernQ.png')
            },
            {
                id: 'IvernW',
                name: '수풀 가꾸기',
                description: `아이번과 주변 아군이 수풀 속에 있으면 기본 공격 시 추가 마법 피해를 입힙니다. 이 스킬을 사용하면 수풀을 심을 수 있습니다.`,
                cooldownBurn: '0.5',
                image: require('../../assets/lol_hero_icons/skills/IvernW.png')
            },
            {
                id: 'IvernE',
                name: '보호의 씨앗',
                description: `아이번이 아군에게 보호막을 씌웁니다. 보호막은 잠시 후 폭발하며 적에게 피해를 입히고 둔화시킵니다. 적중한 적이 없으면 보호막이 재생성됩니다.`,
                cooldownBurn: '11/10/9/8/7',
                image: require('../../assets/lol_hero_icons/skills/IvernE.png')
            },
            {
                id: 'IvernR',
                name: '데이지!',
                description: `아이번이 파수꾼 친구 데이지를 소환해 함께 싸우도록 합니다. 다시 사용하면 데이지에게 공격 또는 이동을 지시합니다.`,
                cooldownBurn: '140/130/120',
                image: require('../../assets/lol_hero_icons/skills/IvernR.png')
            },
        ],
    },
    {
        numID: 49,
        id: 'Janna_sup',
        Key: '40',
        name: '잔나',
        title: '폭풍의 분노',
        lore: `룬테라의 돌풍이라는 강력한 무기를 지닌, 그러나 모든 것이 베일에 싸인 잔나. 그녀는 이제 폐허가 되어버린 자운을 지키는 바람의 정령이다. 그런 그녀를 두고 떠도는 이야기는 많다. 그중에서 가장 그럴듯한 설은 바로 수호신으로서의 잔나. 악천후 속에서 폭풍우를 뚫고 나아가며 부디 순항할 수 있기를 기원하는 룬테라 선원들의 간구 속에서 등장했다고 여기는 것이다. 사람들은 잔나가 남다른 애정으로 자운의 선원들을 보호한다고 믿었다. 잔나와 자운, 이 둘의 관계가 결코 뗄 수 없을 정도로 가까워진 데에는 바로 이러한 사연이 있다고 생각했다. 그 결과 잔나는 도움의 손길이 필요한 모든 자운 사람들에게 있어 마치 등대와 같은 역할을 하게 되었다. 그런 그녀가 언제 어디서 나타날지는 아무도 모른다. 하지만 도움이 필요한 순간에는 어김없이 나타나 구원의 손길을 내밀었다.`,
        blurb: `룬테라의 돌풍이라는 강력한 무기를 지닌, 그러나 모든 것이 베일에 싸인 잔나. 그녀는 이제 폐허가 되어버린 자운을 지키는 바람의 정령이다. 그런 그녀를 두고 떠도는 이야기는 많다. 그중에서 가장 그럴듯한 설은 바로 수호신으로서의 잔나. 악천후 속에서 폭풍우를 뚫고 나아가며 부디 순항할 수 있기를 기원하는 룬테라 선원들의 간구 속에서 등장했다고 여기는 것이다. 사람들은 잔나가 남다른 애정으로 자운의 선원들을 보호한다고 믿었다. 잔나와 자운, 이 둘의...`,
        image: require('../../assets/lol_hero_icons/Janna.png'),
        background_image: require('../../assets/lol_hero_icons/background/Janna.jpg'),
        stats: {"hp": 570, "hpperlevel": 90, "mp": 360, "mpperlevel": 50, "movespeed": 325, "armor": 28, "armorperlevel": 4.5, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 5.5, "hpregenperlevel": 0.55, "mpregen": 11.5, "mpregenperlevel": 0.4, "crit": 0, "critperlevel": 0, "attackdamage": 47, "attackdamageperlevel": 2.5, "attackspeedperlevel": 3, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '순풍',
                description: `아군이 잔나를 향해 움직일 때 이동 속도가 증가합니다.잔나가 적중 시 및 서풍으로 추가 이동 속도의 일정 비율만큼 추가 마법 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Janna_Tailwind.png')
            },
            {
                id: 'HowlingGale',
                name: '울부짖는 돌풍',
                description: `잔나가 기압과 온도를 국지적으로 변경하여 시간이 지나면 점점 커지는 작은 폭풍을 생성합니다. 스킬을 다시 사용하면 폭풍을 날려보낼 수 있습니다. 폭풍은 스킬을 사용한 방향으로 날아가며, 경로에 있는 적들에게 피해를 입히고 공중으로 띄워 올립니다.`,
                cooldownBurn: '14',
                image: require('../../assets/lol_hero_icons/skills/HowlingGale.png')
            },
            {
                id: 'SowTheWind',
                name: '서풍',
                description: `잔나가 기본 지속 효과로 정령을 소환하여 이동 속도를 높이고 다른 유닛 사이로 지나갈 수 있게 됩니다. 스킬을 활성화할 경우 적에게 피해를 입히고 이동 속도를 늦출 수 있습니다.`,
                cooldownBurn: '8/7.5/7/6.5/6',
                image: require('../../assets/lol_hero_icons/skills/SowTheWind.png')
            },
            {
                id: 'EyeOfTheStorm',
                name: '폭풍의 눈',
                description: `잔나가 방어용 광풍을 만들어 아군 챔피언이나 포탑을 공격에서 보호하고 공격력을 높여줍니다.`,
                cooldownBurn: '16/15/14/13/12',
                image: require('../../assets/lol_hero_icons/skills/EyeOfTheStorm.png')
            },
            {
                id: 'ReapTheWhirlwind',
                name: '계절풍',
                description: `잔나가 자신을 마법의 폭풍으로 둘러싸며 적을 뒤로 밀어냅니다. 폭풍이 잦아들면 능력의 효과가 끝날 때까지 부드러운 바람이 아군을 치료합니다.`,
                cooldownBurn: '130/115/100',
                image: require('../../assets/lol_hero_icons/skills/ReapTheWhirlwind.png')
            },
        ],
    },
    {
        numID: 50,
        id: 'JarvanIV_jug_sup',
        Key: '59',
        name: '자르반 4세',
        title: '데마시아의 귀감',
        lore: `라이트실드 왕조의 자손인 자르반 왕자는 데마시아의 왕좌를 물려받을 후계자이다. 데마시아의 덕목을 대표하는 귀감으로 자라난 자르반 왕자는 자신의 어깨에 짊어진 큰 기대와 전선에서 싸우고 싶다는 개인적 욕망 사이에서 갈등해야 했다. 자르반 왕자는 가공할 만한 용기와 자신을 돌보지 않는 투지로 병사들을 고무시키며, 데마시아의 기치를 높이 들고 자신의 백성을 이끄는 미래의 지도자로서 진정한 힘을 뿜어낸다.`,
        blurb: `라이트실드 왕조의 자손인 자르반 왕자는 데마시아의 왕좌를 물려받을 후계자이다. 데마시아의 덕목을 대표하는 귀감으로 자라난 자르반 왕자는 자신의 어깨에 짊어진 큰 기대와 전선에서 싸우고 싶다는 개인적 욕망 사이에서 갈등해야 했다. 자르반 왕자는 가공할 만한 용기와 자신을 돌보지 않는 투지로 병사들을 고무시키며, 데마시아의 기치를 높이 들고 자신의 백성을 이끄는 미래의 지도자로서 진정한 힘을 뿜어낸다.`,
        image: require('../../assets/lol_hero_icons/JarvanIV.png'),
        background_image: require('../../assets/lol_hero_icons/background/JarvanIV.jpg'),
        stats: {"hp": 640, "hpperlevel": 104, "mp": 300, "mpperlevel": 55, "movespeed": 340, "armor": 36, "armorperlevel": 5.2, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 8, "hpregenperlevel": 0.7, "mpregen": 6.5, "mpregenperlevel": 0.45, "crit": 0, "critperlevel": 0, "attackdamage": 64, "attackdamageperlevel": 3, "attackspeedperlevel": 2.5, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '전장의 군가',
                description: `자르반의 첫 기본 공격이 적의 현재 체력에 비례하여 추가 물리 피해를 입힙니다. 이 효과에 이미 당한 적은 몇 초 동안 이 효과로 인한 피해를 다시 받지 않습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/JarvanIVP.png')
            },
            {
                id: 'JarvanIVDragonStrike',
                name: '용의 일격',
                description: `자르반 4세가 창을 길게 늘여 창에 맞는 적에게 물리 피해를 입히고 방어력을 낮춥니다. 또한 이 스킬을 데마시아의 깃발에게 사용하면 자르반이 깃발 쪽으로 이동하며, 그 과정에서 부딪히는 적들을 모두 공중에 띄웁니다.`,
                cooldownBurn: '10/9/8/7/6',
                image: require('../../assets/lol_hero_icons/skills/JarvanIVDragonStrike.png')
            },
            {
                id: 'JarvanIVGoldenAegis',
                name: '황금빛 방패',
                description: `자르반 4세가 데마시아의 고대 왕들의 힘을 빌려 피해를 흡수하는 보호막을 소환하고 주변 적의 이동 속도를 늦춥니다.`,
                cooldownBurn: '9',
                image: require('../../assets/lol_hero_icons/skills/JarvanIVGoldenAegis.png')
            },
            {
                id: 'JarvanIVDemacianStandard',
                name: '데마시아의 깃발',
                description: `데마시아의 긍지를 품은 자르반 4세의 공격 속도가 상승합니다. 데마시아의 깃발을 사용하면 자르반 4세가 데마시아의 깃발을 꽂아 마법 피해를 가하며, 주변 아군 챔피언의 공격 속도를 올려 줍니다.`,
                cooldownBurn: '12/11.5/11/10.5/10',
                image: require('../../assets/lol_hero_icons/skills/JarvanIVDemacianStandard.png')
            },
            {
                id: 'JarvanIVCataclysm',
                name: '대격변',
                description: `자르반 4세가 적을 향해 엄청난 기세로 뛰어들어 주변 지역을 투기장으로 만들어버립니다. 착지하는 순간 주위 적들에게 피해를 입힙니다.`,
                cooldownBurn: '120/105/90',
                image: require('../../assets/lol_hero_icons/skills/JarvanIVCataclysm.png')
            },
        ],
    },
    {
        numID: 51,
        id: 'Jax_top',
        Key: '24',
        name: '잭스',
        title: '무기의 달인',
        lore: `독특한 무기와 날카로운 독설 모두 따라올 자가 없는 잭스는 이케시아에서 마지막으로 알려진 무기의 달인이다. 풀려난 공허의 잔해로 조국이 기울자, 잭스와 그 무리는 조국의 남은 부분이나마 수호하기로 맹세했다. 마법이 강해지고 잠재하는 위협이 다시금 태동하자, 잭스는 발로란을 떠돌며 만나는 모든 전사에게 이케시아의 마지막 불빛을 휘두른다. 그와 견줄 수 있을 정도로 강한지 시험하기 위해.`,
        blurb: `독특한 무기와 날카로운 독설 모두 따라올 자가 없는 잭스는 이케시아에서 마지막으로 알려진 무기의 달인이다. 풀려난 공허의 잔해로 조국이 기울자, 잭스와 그 무리는 조국의 남은 부분이나마 수호하기로 맹세했다. 마법이 강해지고 잠재하는 위협이 다시금 태동하자, 잭스는 발로란을 떠돌며 만나는 모든 전사에게 이케시아의 마지막 불빛을 휘두른다. 그와 견줄 수 있을 정도로 강한지 시험하기 위해.`,
        image: require('../../assets/lol_hero_icons/Jax.png'),
        background_image: require('../../assets/lol_hero_icons/background/Jax.jpg'),
        stats: {"hp": 665, "hpperlevel": 100, "mp": 339, "mpperlevel": 52, "movespeed": 350, "armor": 36, "armorperlevel": 4.2, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 8.5, "hpregenperlevel": 0.55, "mpregen": 7.6, "mpregenperlevel": 0.7, "crit": 0, "critperlevel": 0, "attackdamage": 68, "attackdamageperlevel": 4.25, "attackspeedperlevel": 3.4, "attackspeed": 0.638},
        spells: [
            {
                id: 'passive',
                name: '가차없는 맹공',
                description: `잭스가 연속해서 기본 공격을 가하면 공격 속도가 상승합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Armsmaster_MasterOfArms.png')
            },
            {
                id: 'JaxQ',
                name: '도약 공격',
                description: `잭스가 목표 유닛을 향해 뛰어오릅니다. 대상이 적일 경우 무기로 내려칩니다.`,
                cooldownBurn: '8/7.5/7/6.5/6',
                image: require('../../assets/lol_hero_icons/skills/JaxQ.png')
            },
            {
                id: 'JaxW',
                name: '무기 강화',
                description: `잭스가 무기에 힘을 모아 다음 번 적을 공격할 때 강력한 추가 피해를 입힙니다.`,
                cooldownBurn: '7/6/5/4/3',
                image: require('../../assets/lol_hero_icons/skills/JaxW.png')
            },
            {
                id: 'JaxE',
                name: '반격',
                description: `잭스가 뛰어난 전투 실력으로 짧은 시간동안 적의 공격을 모두 피할 수 있게 됩니다. 공격을 피한 뒤에는 재빨리 반격해 주변의 적을 모두 기절시킵니다.`,
                cooldownBurn: '17/15/13/11/9',
                image: require('../../assets/lol_hero_icons/skills/JaxE.png')
            },
            {
                id: 'JaxR',
                name: '무기의 달인',
                description: `매 세 번째 연속 공격마다 추가 마법 피해를 줍니다. 또 잭스는 이 스킬을 통해 자신의 주변에 피해를 입히고 결의를 다져, 잠깐 동안 방어력과 마법 저항력이 상승합니다.`,
                cooldownBurn: '100/90/80',
                image: require('../../assets/lol_hero_icons/skills/JaxR.png')
            },
        ],
    },
    {
        numID: 52,
        id: 'Jayce_mid_adc',
        Key: '126',
        name: '제이스',
        title: '미래의 수호자',
        lore: `영민한 발명가 제이스는 필트오버의 수호와 진보를 위해서라면 무엇이든 할 수 있는 필트오버의 영웅이다. 마법공학 변신 해머를 전용무기로 사용하는 그는 자신의 힘과 용기, 지능을 언제든 조국을 위해 바칠 각오가 되어있다. 필트오버의 전 국민이 제이스를 영웅으로 추대하지만 정작 그는 이러한 관심을 반기지 않는다. 그에 대한 국민들의 칭송과 감탄이 적을 도발할 수 있다는 것을 누구보다 잘 알고 있기 때문이다. 조국에 대한 제이스의 충성심을 모르는 사람은 아무도 없으며 그의 능력을 시기하는 이들조차 진보의 도시를 수호하는 제이스의 노고에 감사를 표한다.`,
        blurb: `영민한 발명가 제이스는 필트오버의 수호와 진보를 위해서라면 무엇이든 할 수 있는 필트오버의 영웅이다. 마법공학 변신 해머를 전용무기로 사용하는 그는 자신의 힘과 용기, 지능을 언제든 조국을 위해 바칠 각오가 되어있다. 필트오버의 전 국민이 제이스를 영웅으로 추대하지만 정작 그는 이러한 관심을 반기지 않는다. 그에 대한 국민들의 칭송과 감탄이 적을 도발할 수 있다는 것을 누구보다 잘 알고 있기 때문이다. 조국에 대한 제이스의 충성심을 모르는 사람은...`,
        image: require('../../assets/lol_hero_icons/Jayce.png'),
        background_image: require('../../assets/lol_hero_icons/background/Jayce.jpg'),
        stats: {"hp": 590, "hpperlevel": 109, "mp": 375, "mpperlevel": 45, "movespeed": 335, "armor": 22, "armorperlevel": 5, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 125, "hpregen": 6, "hpregenperlevel": 0.6, "mpregen": 6, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 59, "attackdamageperlevel": 4.25, "attackspeedperlevel": 3, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '마법공학 축전기',
                description: `제이스가 무기를 바꾸면 잠시 동안 이동 속도가 증가합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Jayce_Passive.png')
            },
            {
                id: 'JayceToTheSkies',
                name: '하늘로! / 전격 폭발',
                description: `해머 사용 시: 공중으로 도약해 적들에게 물리 피해를 입히고 이동 속도를 감소시킵니다.캐논 사용 시: 적을 맞히거나 사거리 끝에 닿으면 폭발하는 전기 구체를 발사해 맞은 적 모두에게 물리 피해를 입힙니다.`,
                cooldownBurn: '16/14/12/10/8/6',
                image: require('../../assets/lol_hero_icons/skills/JayceToTheSkies.png')
            },
            {
                id: 'JayceStaticField',
                name: '전류 역장 / 초전하',
                description: `해머 사용 시: 기본 지속 효과: 매 공격 시마다 마나가 회복됩니다. 사용 시: 몇 초 동안 주위 적에게 피해를 입히는 전류 역장을 생성합니다.캐논 사용 시: 동력이 대폭 증가하여 다음 몇 차례의 공격에 대한 공격 속도가 최대로 증가합니다.`,
                cooldownBurn: '10',
                image: require('../../assets/lol_hero_icons/skills/JayceStaticField.png')
            },
            {
                id: 'JayceThunderingBlow',
                name: '천둥 강타 / 가속 관문',
                description: `해머 사용 시: 적에게 마법 피해를 가하고 짧은 거리 만큼 뒤로 밀쳐냅니다.캐논 사용 시: 가속 관문을 열어, 이 관문을 통과하는 모든 아군 챔피언의 이동 속도를 증가시킵니다. 이 관문을 통해 전격 폭발을 발사할 경우 전기 구체의 이동 속도와 사거리가 증가하며, 피해량 또한 증가합니다.`,
                cooldownBurn: '20/18/16/14/12/10',
                image: require('../../assets/lol_hero_icons/skills/JayceThunderingBlow.png')
            },
            {
                id: 'JayceStanceHtG',
                name: '머큐리 캐논 / 머큐리 해머',
                description: `해머 사용 시: 머큐리 해머를 머큐리 캐논으로 변환하여 새로운 스킬을 사용하며 사거리가 늘어납니다. 변환 후 첫 번째 공격은 적의 방어력과 마법 저항력을 감소시킵니다.캐논 사용 시: 머큐리 캐논을 머큐리 해머로 변환하여 새로운 스킬을 사용하며 방어력과 마법 저항력이 증가합니다. 변환 후 첫 번째 공격은 추가 마법 피해를 입힙니다.`,
                cooldownBurn: '6',
                image: require('../../assets/lol_hero_icons/skills/JayceStanceHtG.png')
            },
        ],
    },
    {
        numID: 53,
        id: 'Jhin_adc',
        Key: '202',
        name: '진',
        title: '잔혹극의 거장',
        lore: `진은 살인이 예술이라고 믿는 주도면밀한 사이코패스 살인범이다. 원래는 아이오니아의 감옥에 수감되어 있었는데, 아이오니아 평의회 내에서 암약하는 어두운 세력의 힘으로 풀려난 이후 그 파벌의 자객으로 일하고 있다. 진은 총을 붓 삼아 잔혹한 그림을 그리는 화가이자, 소름끼치는 작품을 무대에 올리며 쾌락을 느끼는 극작가다. 그 솜씨를 접하는 피해자와 목격자들은 모두 얼어붙을 수밖에 없다. 누군가에게 '공포'라는 강렬한 메시지를 전하고 싶다면, 진이야말로 그 일을 맡길 최고의 적임자일 것이다.`,
        blurb: `진은 살인이 예술이라고 믿는 주도면밀한 사이코패스 살인범이다. 원래는 아이오니아의 감옥에 수감되어 있었는데, 아이오니아 평의회 내에서 암약하는 어두운 세력의 힘으로 풀려난 이후 그 파벌의 자객으로 일하고 있다. 진은 총을 붓 삼아 잔혹한 그림을 그리는 화가이자, 소름끼치는 작품을 무대에 올리며 쾌락을 느끼는 극작가다. 그 솜씨를 접하는 피해자와 목격자들은 모두 얼어붙을 수밖에 없다. 누군가에게 '공포'라는 강렬한 메시지를 전하고 싶다면, 진이야말로...`,
        image: require('../../assets/lol_hero_icons/Jhin.png'),
        background_image: require('../../assets/lol_hero_icons/background/Jhin.jpg'),
        stats: {"hp": 655, "hpperlevel": 107, "mp": 300, "mpperlevel": 50, "movespeed": 330, "armor": 24, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 3.75, "hpregenperlevel": 0.55, "mpregen": 6, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 59, "attackdamageperlevel": 4.7, "attackspeedperlevel": 0, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '속삭임',
                description: `'속삭임'이라고 불리는 진의 총은 우월한 살상력을 위해 설계된 정밀 기계입니다. 발사 속도는 고정되어 있으며 총탄은 네 발만 장전됩니다. 네 발째 총탄은 진의 어두운 마법에 물들어 항상 치명타를 입히며 잃은 체력에 비례한 피해를 추가로 입힙니다. 속삭임으로 치명타를 발동시키면, 진의 이동 속도가 잠깐 동안 크게 상승합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Jhin_P.png')
            },
            {
                id: 'JhinQ',
                name: '춤추는 유탄',
                description: `진이 마법 폭탄을 적에게 던집니다. 최대 네 명의 대상에게 적중하며, 적을 처치할 때마다 피해량이 증가합니다.`,
                cooldownBurn: '7/6.5/6/5.5/5',
                image: require('../../assets/lol_hero_icons/skills/JhinQ.png')
            },
            {
                id: 'JhinW',
                name: '살상연희',
                description: `진이 지휘봉을 휘두르며 엄청난 사거리를 지닌 한 발의 탄환을 발사합니다. 미니언과 몬스터는 관통하지만 챔피언에 맞으면 정지합니다. 적중한 대상이 좀 전에 연꽃 함정에 걸렸거나 진의 아군 또는 진에게 피해를 입었다면 속박됩니다.`,
                cooldownBurn: '12',
                image: require('../../assets/lol_hero_icons/skills/JhinW.png')
            },
            {
                id: 'JhinE',
                name: '강제 관람',
                description: `진이 은신 상태에 있다가 밟으면 작동하는 연꽃 함정을 설치합니다. 함정이 작동하면 주위 적을 둔화시킨 후 날카로운 꽃잎들이 폭발하며 피해를 입힙니다.죽음의 미학 - 진이 적 챔피언을 처치하면 사망한 챔피언 주위에 연꽃 함정이 피어납니다.`,
                cooldownBurn: '2',
                image: require('../../assets/lol_hero_icons/skills/JhinE.png')
            },
            {
                id: 'JhinR',
                name: '커튼 콜',
                description: `진이 정신 집중을 해 속삭임을 견착식 저격포로 변신시킵니다. 엄청난 사거리에서 4발의 강력한 탄환을 발사하며, 탄환은 미니언과 몬스터는 관통하지만 챔피언에 맞으면 정지합니다. 적중당한 적은 둔화되며 잃은 체력에 비례한 추가 피해를 입습니다. 특별히 완벽하게 세공된 4번째 탄환은 더욱 강력하여 항상 치명타가 적용됩니다.`,
                cooldownBurn: '120/105/90',
                image: require('../../assets/lol_hero_icons/skills/JhinR.png')
            },
        ],
    },
    {
        numID: 54,
        id: 'Jinx_adc',
        Key: '222',
        name: '징크스',
        title: '난폭한 말괄량이',
        lore: `자운 출신의 충동적이고 격정적인 범죄자 징크스. 난장판을 벌이는 재미로 살며, 결과 따위는 안중에 없다. 살상 무기를 다수 보유한 그녀가 떠난 자리는 화려하고 요란한 폭발로 공포의 아수라장이 된다. 징크스는 지루함을 끔찍이 싫어하고 가는 곳 어디에나 특유의 대혼란을 화끈하게 일으킨다.`,
        blurb: `자운 출신의 충동적이고 격정적인 범죄자 징크스. 난장판을 벌이는 재미로 살며, 결과 따위는 안중에 없다. 살상 무기를 다수 보유한 그녀가 떠난 자리는 화려하고 요란한 폭발로 공포의 아수라장이 된다. 징크스는 지루함을 끔찍이 싫어하고 가는 곳 어디에나 특유의 대혼란을 화끈하게 일으킨다.`,
        image: require('../../assets/lol_hero_icons/Jinx.png'),
        background_image: require('../../assets/lol_hero_icons/background/Jinx.jpg'),
        stats: {"hp": 630, "hpperlevel": 105, "mp": 260, "mpperlevel": 50, "movespeed": 325, "armor": 26, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 525, "hpregen": 3.75, "hpregenperlevel": 0.5, "mpregen": 6.7, "mpregenperlevel": 1, "crit": 0, "critperlevel": 0, "attackdamage": 59, "attackdamageperlevel": 2.9, "attackspeedperlevel": 1.4, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '신난다!',
                description: `징크스는 적 챔피언이나 에픽 정글 몬스터 처치에 관여하거나 구조물 파괴를 도우면 이동 속도와 공격 속도가 대폭 상승합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Jinx_Passive.png')
            },
            {
                id: 'JinxQ',
                name: '휘릭휘릭!',
                description: `징크스는 '빵야빵야' 미니건과 '생선대가리' 로켓 런처 중에서 원하는 것을 선택하여 기본 공격을 변경할 수 있습니다. 미니건으로 공격하면 공격 속도가 상승하고, 로켓 런처로 공격하면 광역 피해를 입히고 사거리가 증가하지만 마나가 소모되고 공격 속도가 느려집니다.`,
                cooldownBurn: '0.9',
                image: require('../../assets/lol_hero_icons/skills/JinxQ.png')
            },
            {
                id: 'JinxW',
                name: '빠직!',
                description: `징크스가 빠직!으로 전기 충격파를 발사해 처음 적중한 적을 둔화시키고 위치를 드러내며 피해를 입힙니다.`,
                cooldownBurn: '8/7/6/5/4',
                image: require('../../assets/lol_hero_icons/skills/JinxW.png')
            },
            {
                id: 'JinxE',
                name: '와작와작 뻥!',
                description: `징크스가 와작와작 지뢰를 일렬로 던지면 5초 후에 폭발하며 주변 적들을 불태웁니다. 와작와작 지뢰는 적 챔피언이 밟으면 물어뜯어 제자리에 묶습니다.`,
                cooldownBurn: '24/20.5/17/13.5/10',
                image: require('../../assets/lol_hero_icons/skills/JinxE.png')
            },
            {
                id: 'JinxR',
                name: '초강력 초토화 로켓!',
                description: `징크스가 맵을 가로지르는 강력한 로켓을 발사합니다. 발사 후 비행 거리에 비례해 로켓의 피해량이 증가합니다. 로켓은 적 챔피언과 충돌하면 폭발하며, 해당 챔피언과 주위의 적에게 잃은 체력에 비례하여 피해를 입힙니다.`,
                cooldownBurn: '85/65/45',
                image: require('../../assets/lol_hero_icons/skills/JinxR.png')
            },
        ],
    },
    {
        numID: 55,
        id: 'Kaisa_adc',
        Key: '145',
        name: '카이사',
        title: '공허의 딸',
        lore: `카이사는 어린아이에 불과했을 때 공허에 끌려들어 갔지만 불굴의 의지와 집요한 노력 끝에 간신히 살아남을 수 있었다. 이때의 경험으로 카이사는 치명적인 위력의 사냥꾼이 되었다. 어떤 이들에게는 차라리 죽어서 보지 않는 게 나을 정도로 끔찍한 미래를 암시하는 징조로 여겨지기도 한다. 카이사는 이제 그녀의 두 번째 피부가 된 공허충의 껍질을 덮어쓰고 불유쾌한 공생 관계를 유지해야 하는 것은 물론, 머지않은 미래에 결단을 내려야만 한다. 자신을 괴물이라고 부르는 필멸의 존재들을 용서하고 점점 다가오는 어둠을 함께 물리칠 것인지, 아니면 필멸의 존재 따위는 무시하고 자신을 버린 세계를 공허가 집어삼키는 것을 못 본 척할 것인지...`,
        blurb: `카이사는 어린아이에 불과했을 때 공허에 끌려들어 갔지만 불굴의 의지와 집요한 노력 끝에 간신히 살아남을 수 있었다. 이때의 경험으로 카이사는 치명적인 위력의 사냥꾼이 되었다. 어떤 이들에게는 차라리 죽어서 보지 않는 게 나을 정도로 끔찍한 미래를 암시하는 징조로 여겨지기도 한다. 카이사는 이제 그녀의 두 번째 피부가 된 공허충의 껍질을 덮어쓰고 불유쾌한 공생 관계를 유지해야 하는 것은 물론, 머지않은 미래에 결단을 내려야만 한다. 자신을 괴물이라고...`,
        image: require('../../assets/lol_hero_icons/Kaisa.png'),
        background_image: require('../../assets/lol_hero_icons/background/Kaisa.jpg'),
        stats: {"hp": 640, "hpperlevel": 102, "mp": 345, "mpperlevel": 40, "movespeed": 335, "armor": 25, "armorperlevel": 4.2, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 525, "hpregen": 3.5, "hpregenperlevel": 0.55, "mpregen": 8.2, "mpregenperlevel": 0.7, "crit": 0, "critperlevel": 0, "attackdamage": 59, "attackdamageperlevel": 2.6, "attackspeedperlevel": 1.8, "attackspeed": 0.644},
        spells: [
            {
                id: 'passive',
                name: '두 번째 피부',
                description: `카이사는 기본 공격으로 플라즈마 중첩을 쌓아 그에 따른 추가 마법 피해를 입힙니다. 아군의 이동 불가 효과가 적에게 적용됐을 때에도 플라즈마 중첩이 쌓입니다. 살아있는 무기 효과는 카이사가 구입하는 아이템에 따라 스킬을 강화시킵니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Kaisa_Passive.png')
            },
            {
                id: 'KaisaQ',
                name: '이케시아 폭우',
                description: `카이사가 근처 적들을 추격하는 미사일 세례를 퍼붓습니다.살아있는 무기: 이케시아 폭우가 발사하는 미사일 개수가 증가합니다.`,
                cooldownBurn: '10/9/8/7/6',
                image: require('../../assets/lol_hero_icons/skills/KaisaQ.png')
            },
            {
                id: 'KaisaW',
                name: '공허추적자',
                description: `카이사가 장거리 광선을 발사하며, 광선에 적중한 적에게 플라즈마 중첩이 쌓입니다.살아있는 무기: 공허추적자 적중 시 플라즈마 중첩이 추가로 쌓이며 챔피언에게 적중 시 재사용 대기시간이 감소합니다.`,
                cooldownBurn: '22/20/18/16/14',
                image: require('../../assets/lol_hero_icons/skills/KaisaW.png')
            },
            {
                id: 'KaisaE',
                name: '고속 충전',
                description: `카이사의 이동 속도가 잠시 동안 증가한 뒤 공격 속도가 증가합니다.살아있는 무기: 고속 충전을 사용하면 잠시 투명 상태가 됩니다.`,
                cooldownBurn: '16/14.5/13/11.5/10',
                image: require('../../assets/lol_hero_icons/skills/KaisaE.png')
            },
            {
                id: 'KaisaR',
                name: '사냥본능',
                description: `카이사가 적 챔피언 근처로 돌진합니다.`,
                cooldownBurn: '130/100/70',
                image: require('../../assets/lol_hero_icons/skills/KaisaR.png')
            },
        ],
    },
    {
        numID: 56,
        id: 'Kalista_adc_top',
        Key: '429',
        name: '칼리스타',
        title: '복수의 화신',
        lore: `칼리스타, 영원불멸하는 복수의 화신이자 분노에 찬 응징의 혼. 그림자 군도에서 소환되는 칼리스타는 배신자와 반역자들에겐 악몽이 그 자체로 갑옷을 두르고 현실화한 듯한 존재이다. 배신당한 이들이 피맺힌 외침으로 복수를 갈망할 때, 영혼도 기꺼이 내놓겠다는 자들에겐 칼리스타의 응답이 들린다. 그 분노의 표적이 된 자는 결코 무사할 수 없다. 칼리스타는 무자비한 추격자이며, 복수의 계약을 끝낼 수 있는 것은 영혼을 꿰뚫는 창날의 차가운 불꽃뿐이기 때문이다.`,
        blurb: `칼리스타, 영원불멸하는 복수의 화신이자 분노에 찬 응징의 혼. 그림자 군도에서 소환되는 칼리스타는 배신자와 반역자들에겐 악몽이 그 자체로 갑옷을 두르고 현실화한 듯한 존재이다. 배신당한 이들이 피맺힌 외침으로 복수를 갈망할 때, 영혼도 기꺼이 내놓겠다는 자들에겐 칼리스타의 응답이 들린다. 그 분노의 표적이 된 자는 결코 무사할 수 없다. 칼리스타는 무자비한 추격자이며, 복수의 계약을 끝낼 수 있는 것은 영혼을 꿰뚫는 창날의 차가운 불꽃뿐이기 때문이다.`,
        image: require('../../assets/lol_hero_icons/Kalista.png'),
        background_image: require('../../assets/lol_hero_icons/background/Kalista.jpg'),
        stats: {"hp": 600, "hpperlevel": 114, "mp": 300, "mpperlevel": 45, "movespeed": 330, "armor": 24, "armorperlevel": 5.2, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 525, "hpregen": 4, "hpregenperlevel": 0.75, "mpregen": 6.3, "mpregenperlevel": 0.4, "crit": 0, "critperlevel": 0, "attackdamage": 59, "attackdamageperlevel": 3.25, "attackspeedperlevel": 4.5, "attackspeed": 0.694},
        spells: [
            {
                id: 'passive',
                name: '전투 태세',
                description: `칼리스타가 기본 공격이나 꿰뚫는 창의 준비 동작을 하는 동안 이동 명령을 하면, 칼리스타가 기본 공격과 함께 해당 위치로 도약합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Kalista_Passive.png')
            },
            {
                id: 'KalistaMysticShot',
                name: '꿰뚫는 창',
                description: `칼리스타가 빠르게 날아가는 창을 던집니다. 적이 처치될 경우 관통해 날아갑니다.`,
                cooldownBurn: '8',
                image: require('../../assets/lol_hero_icons/skills/KalistaMysticShot.png')
            },
            {
                id: 'KalistaW',
                name: '감시하는 혼',
                description: `칼리스타와 계약을 맺은 아군이 같은 대상을 공격하면 추가 피해를 입힙니다. 사용 시 혼이 일정한 경로를 순찰하며 자기 앞의 지역을 드러냅니다.`,
                cooldownBurn: '30',
                image: require('../../assets/lol_hero_icons/skills/KalistaW.png')
            },
            {
                id: 'KalistaExpungeWrapper',
                name: '뽑아 찢기',
                description: `공격 시 대상을 창으로 꿰뚫습니다. 재시전하면 대상에 박힌 창을 뜯어내서 둔화시키며, 주는 피해량이 증가합니다.`,
                cooldownBurn: '0',
                image: require('../../assets/lol_hero_icons/skills/KalistaExpungeWrapper.png')
            },
            {
                id: 'KalistaRx',
                name: '운명의 부름',
                description: `칼리스타가 계약을 맺은 아군을 자신에게로 순간 이동시킵니다. 계약자는 지정한 위치로 돌진하여 적 챔피언을 뒤로 밀어내는 스킬을 사용할 수 있습니다.`,
                cooldownBurn: '160/140/120',
                image: require('../../assets/lol_hero_icons/skills/KalistaRx.png')
            },
        ],
    },
    {
        numID: 57,
        id: 'Karma_sup',
        Key: '43',
        name: '카르마',
        title: '깨우친 자',
        lore: `아이오니아의 영적인 전통을 카르마보다 잘 나타내는 필멸자가 있을까. 카르마는 지난 시간 동안 축적된 기억을 새로운 생명으로 온존하며 수없이 부활한 고대 영혼의 살아있는 현신으로, 극소수만이 깨우칠 수 있는 힘을 손에 넣었다. 최근 위기가 닥쳤을 때 최선을 다해 자신을 따르는 이들을 이끈 카르마는 자신과 자신이 그토록 아끼는 조국 모두가 상당한 대가를 치러야만 평화와 조화가 찾아오리라는 것을 알고 있다.`,
        blurb: `아이오니아의 영적인 전통을 카르마보다 잘 나타내는 필멸자가 있을까. 카르마는 지난 시간 동안 축적된 기억을 새로운 생명으로 온존하며 수없이 부활한 고대 영혼의 살아있는 현신으로, 극소수만이 깨우칠 수 있는 힘을 손에 넣었다. 최근 위기가 닥쳤을 때 최선을 다해 자신을 따르는 이들을 이끈 카르마는 자신과 자신이 그토록 아끼는 조국 모두가 상당한 대가를 치러야만 평화와 조화가 찾아오리라는 것을 알고 있다.`,
        image: require('../../assets/lol_hero_icons/Karma.png'),
        background_image: require('../../assets/lol_hero_icons/background/Karma.jpg'),
        stats: {"hp": 630, "hpperlevel": 109, "mp": 374, "mpperlevel": 40, "movespeed": 335, "armor": 28, "armorperlevel": 5, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 525, "hpregen": 5.5, "hpregenperlevel": 0.55, "mpregen": 13, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 51, "attackdamageperlevel": 3.3, "attackspeedperlevel": 2.3, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '열정 응집',
                description: `카르마가 스킬로 피해를 입히면 만트라의 재사용 대기시간이 감소합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Karma_Passive.png')
            },
            {
                id: 'KarmaQ',
                name: '내면의 열정',
                description: `카르마가 영적인 에너지의 구체를 전방으로 던져, 적 유닛에게 부딪치면 폭발하며 피해를 입힙니다.만트라 추가 효과: 만트라가 내면의 열정의 위력을 강화하여, 구체가 폭발한 잠시 후 원형 범위 내에 피해를 가합니다.`,
                cooldownBurn: '9/8/7/6/5',
                image: require('../../assets/lol_hero_icons/skills/KarmaQ.png')
            },
            {
                id: 'KarmaSpiritBind',
                name: '굳은 결의',
                description: `카르마가 자신과 대상 적 사이에 끈을 만들어 피해를 주고 연결된 적의 위치를 드러냅니다. 끈이 끊어지지 않으면 적은 발이 묶이고 피해를 한 번 더 입습니다.만트라 추가 효과: 카르마가 결속을 강화하여 체력을 회복하며 속박 지속시간이 증가합니다.`,
                cooldownBurn: '12',
                image: require('../../assets/lol_hero_icons/skills/KarmaSpiritBind.png')
            },
            {
                id: 'KarmaSolKimShield',
                name: '고무',
                description: `카르마가 보호막을 소환하여 적이 가하는 피해를 막아내고, 보호받는 아군은 이동 속도가 상승합니다.만트라 추가 효과: 대상에게서 에너지가 흘러나와 보호막을 강화하고 주변 아군 챔피언들에게도 고무 효과를 적용합니다.`,
                cooldownBurn: '10/9.5/9/8.5/8',
                image: require('../../assets/lol_hero_icons/skills/KarmaSolKimShield.png')
            },
            {
                id: 'KarmaMantra',
                name: '만트라',
                description: `카르마가 다음 스킬을 강화하여 추가 효과를 부여합니다. 만트라는 1레벨부터 사용할 수 있으며 스킬 포인트가 필요 없습니다.`,
                cooldownBurn: '40/38/36/34',
                image: require('../../assets/lol_hero_icons/skills/KarmaMantra.png')
            },
        ],
    },
    {
        numID: 58,
        id: 'Karthus_jug',
        Key: '30',
        name: '카서스',
        title: '죽음을 노래하는 자',
        lore: `망각을 부르는 자 카서스는 섬뜩한 노랫소리를 전주곡 삼아 악몽처럼 등장하는 언데드이다. 산 자는 영원히 죽지 않는 언데드를 두려워하나, 그는 언데드를 삶과 죽음의 완벽한 결합으로 오직 아름답고 순수하다 여긴다. 카서스는 언데드로서 존재하는 기쁨을 온 세계에 전하기 위해 그림자 군도로부터 출몰한다.`,
        blurb: `망각을 부르는 자 카서스는 섬뜩한 노랫소리를 전주곡 삼아 악몽처럼 등장하는 언데드이다. 산 자는 영원히 죽지 않는 언데드를 두려워하나, 그는 언데드를 삶과 죽음의 완벽한 결합으로 오직 아름답고 순수하다 여긴다. 카서스는 언데드로서 존재하는 기쁨을 온 세계에 전하기 위해 그림자 군도로부터 출몰한다.`,
        image: require('../../assets/lol_hero_icons/Karthus.png'),
        background_image: require('../../assets/lol_hero_icons/background/Karthus.jpg'),
        stats: {"hp": 620, "hpperlevel": 110, "mp": 467, "mpperlevel": 31, "movespeed": 335, "armor": 21, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 450, "hpregen": 6.5, "hpregenperlevel": 0.55, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 46, "attackdamageperlevel": 3.25, "attackspeedperlevel": 2.11, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '죽음 극복',
                description: `카서스가 죽으면 영혼이 되어 스킬을 사용할 수 있습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Karthus_Passive.png')
            },
            {
                id: 'KarthusLayWasteA1',
                name: '황폐화',
                description: `카서스가 특정 위치에 잠시 후 폭발을 일으켜 근처 적에게 피해를 입힙니다. 단일 대상에게는 더 큰 피해를 입힙니다.`,
                cooldownBurn: '0',
                image: require('../../assets/lol_hero_icons/skills/KarthusLayWasteA1.png')
            },
            {
                id: 'KarthusWallOfPain',
                name: '고통의 벽',
                description: `카서스가 에너지를 빨아들이는 통행 가능한 벽을 생성합니다. 이 벽을 지나는 모든 적 유닛의 이동 속도와 마법 저항력이 일정 시간 감소합니다.`,
                cooldownBurn: '15',
                image: require('../../assets/lol_hero_icons/skills/KarthusWallOfPain.png')
            },
            {
                id: 'KarthusDefile',
                name: '부패',
                description: `카서스는 적에게서 마력을 훔쳐 적을 처치할 때마다 마나를 획득합니다. 또 카서스는 희생양의 영혼을 자신 주위에 둘러 적들에게 피해를 입힐 수도 있지만, 이럴 경우 마나가 매우 빨리 소모됩니다.`,
                cooldownBurn: '0.5',
                image: require('../../assets/lol_hero_icons/skills/KarthusDefile.png')
            },
            {
                id: 'KarthusFallenOne',
                name: '진혼곡',
                description: `카서스가 3초 동안 정신 집중을 마치면 모든 적 챔피언이 피해를 입습니다.`,
                cooldownBurn: '200/180/160',
                image: require('../../assets/lol_hero_icons/skills/KarthusFallenOne.png')
            },
        ],
    },
    {
        numID: 59,
        id: 'Kassadin_mid',
        Key: '38',
        name: '카사딘',
        title: '공허의 방랑자',
        lore: `이 세계에서도 가장 어두운 곳을 불타는 검을 휘둘러 헤쳐나가는 카사딘은 자신에게 주어진 시간이 많지 않음을 잘 알고 있다. 원래 슈리마 구석구석 가보지 않은 곳이 없는 여행 안내자이자 모험가였던 그는 슈리마 남쪽의 평화로운 부족 마을에서 가정을 꾸리고 살았다. 하지만 어느 날, 그가 살던 곳을 공허가 덮쳐 집어삼켰다. 카사딘은 복수를 맹세했고, 신비로운 유물과 금지된 기술을 닥치는 대로 조합하여 앞으로의 투쟁에 쓸 무기를 만들었다. 황무지 이케시아를 찾아 나선 카사딘은 아무리 끔찍스럽고 무시무시한 공허 생명체라도 맞서 싸울 각오가 되어 있다. 예언자를 자처하는 말자하와 대면할 그 날을 위해.`,
        blurb: `이 세계에서도 가장 어두운 곳을 불타는 검을 휘둘러 헤쳐나가는 카사딘은 자신에게 주어진 시간이 많지 않음을 잘 알고 있다. 원래 슈리마 구석구석 가보지 않은 곳이 없는 여행 안내자이자 모험가였던 그는 슈리마 남쪽의 평화로운 부족 마을에서 가정을 꾸리고 살았다. 하지만 어느 날, 그가 살던 곳을 공허가 덮쳐 집어삼켰다. 카사딘은 복수를 맹세했고, 신비로운 유물과 금지된 기술을 닥치는 대로 조합하여 앞으로의 투쟁에 쓸 무기를 만들었다. 황무지 이케시아를...`,
        image: require('../../assets/lol_hero_icons/Kassadin.png'),
        background_image: require('../../assets/lol_hero_icons/background/Kassadin.jpg'),
        stats: {"hp": 646, "hpperlevel": 119, "mp": 400, "mpperlevel": 87, "movespeed": 335, "armor": 19, "armorperlevel": 4, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 150, "hpregen": 6, "hpregenperlevel": 0.5, "mpregen": 6, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 59, "attackdamageperlevel": 3.9, "attackspeedperlevel": 3.7, "attackspeed": 0.64},
        spells: [
            {
                id: 'passive',
                name: '공허석',
                description: `카사딘이 받는 마법 피해가 감소하며, 유닛과의 충돌을 무시합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Kassadin_Passive.png')
            },
            {
                id: 'NullLance',
                name: '무의 구체',
                description: `카사딘이 대상에게 공허 에너지로 구성된 구체를 발사하여 피해를 입히고 정신 집중을 끊습니다. 여분의 에너지는 카사딘의 몸을 감싸 잠시 동안 보호막을 형성하며 마법 피해를 흡수합니다.`,
                cooldownBurn: '10/9.5/9/8.5/8',
                image: require('../../assets/lol_hero_icons/skills/NullLance.png')
            },
            {
                id: 'NetherBlade',
                name: '황천의 검',
                description: `기본 지속 효과: 카사딘의 기본 공격이 추가 마법 피해를 입힙니다. 사용 시: 카사딘의 다음 기본 공격이 큰 추가 마법 피해를 입히고 마나가 회복됩니다.`,
                cooldownBurn: '7',
                image: require('../../assets/lol_hero_icons/skills/NetherBlade.png')
            },
            {
                id: 'ForcePulse',
                name: '힘의 파동',
                description: `카사딘이 자신의 영역 안에서 사용된 스킬에서 에너지를 뽑아냅니다. 충전이 완료되면 힘의 파동을 사용하여 정면 원뿔 반경에 있는 적의 속도를 늦추고 피해를 입힐 수 있습니다.`,
                cooldownBurn: '21/20/19/18/17',
                image: require('../../assets/lol_hero_icons/skills/ForcePulse.png')
            },
            {
                id: 'RiftWalk',
                name: '균열 이동',
                description: `카사딘이 가까운 지역으로 순간 이동하면서 주변 적 유닛에게 피해를 입힙니다. 짧은 시간 동안 여러 번의 균열 이동을 시전하면 마나를 추가로 소모하는 대신 추가 피해를 입힐 수 있습니다.`,
                cooldownBurn: '5/3.5/2',
                image: require('../../assets/lol_hero_icons/skills/RiftWalk.png')
            },
        ],
    },
    {
        numID: 60,
        id: 'Katarina_mid',
        Key: '55',
        name: '카타리나',
        title: '사악한 칼날',
        lore: `카타리나는 단호한 판단력과 치명적인 전투 능력을 지닌 녹서스의 특급 암살자이다. 전설적인 명성을 자랑하는 뒤 쿠토 장군의 장녀로 태어난 카타리나는 방심한 적을 신속하게 암살하는 데에 뛰어난 재능을 보였다. 그녀는 자신의 불타는 야망 때문에 아군을 위험에 빠뜨리면서까지 방비를 강화한 적을 노리기도 했다. 하지만 임무가 아니더라도 카타리나는 주저없이 톱날 단검의 돌풍을 일으켜 마땅히 쓰러뜨려야 할 적을 처치할 것이다.`,
        blurb: `카타리나는 단호한 판단력과 치명적인 전투 능력을 지닌 녹서스의 특급 암살자이다. 전설적인 명성을 자랑하는 뒤 쿠토 장군의 장녀로 태어난 카타리나는 방심한 적을 신속하게 암살하는 데에 뛰어난 재능을 보였다. 그녀는 자신의 불타는 야망 때문에 아군을 위험에 빠뜨리면서까지 방비를 강화한 적을 노리기도 했다. 하지만 임무가 아니더라도 카타리나는 주저없이 톱날 단검의 돌풍을 일으켜 마땅히 쓰러뜨려야 할 적을 처치할 것이다.`,
        image: require('../../assets/lol_hero_icons/Katarina.png'),
        background_image: require('../../assets/lol_hero_icons/background/Katarina.jpg'),
        stats: {"hp": 672, "hpperlevel": 108, "mp": 0, "mpperlevel": 0, "movespeed": 335, "armor": 28, "armorperlevel": 4.7, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 7.5, "hpregenperlevel": 0.7, "mpregen": 0, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 58, "attackdamageperlevel": 3.2, "attackspeedperlevel": 2.74, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '탐욕',
                description: `카타리나가 최근에 피해를 입힌 챔피언이 죽을 때마다 카타리나에게 적용 중인 스킬 재사용 대기시간이 크게 감소합니다.카타리나가 단검을 다시 주우면 근처의 적을 모두 공격해 마법 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Katarina_Passive.png')
            },
            {
                id: 'KatarinaQ',
                name: '단검 투척',
                description: `카타리나가 대상에게 단검을 던집니다. 단검은 근처 적들에게 튕겼다가 땅에 떨어집니다.`,
                cooldownBurn: '11/10/9/8/7',
                image: require('../../assets/lol_hero_icons/skills/KatarinaQ.png')
            },
            {
                id: 'KatarinaW',
                name: '준비',
                description: `카타리나가 단검을 머리 위로 던지며 이동 속도가 크게 빨라집니다.`,
                cooldownBurn: '15/14/13/12/11',
                image: require('../../assets/lol_hero_icons/skills/KatarinaW.png')
            },
            {
                id: 'KatarinaEWrapper',
                name: '순보',
                description: `카타리나가 대상에게 도약합니다. 대상이 적일 경우 대상에게 피해를 입히고, 대상이 적이 아닐 경우 가장 가까이에 있는 적에게 피해를 입힙니다.`,
                cooldownBurn: '14/12.5/11/9.5/8',
                image: require('../../assets/lol_hero_icons/skills/KatarinaEWrapper.png')
            },
            {
                id: 'KatarinaR',
                name: '죽음의 연꽃',
                description: `카타리나가 정신을 집중해 칼날의 돌풍을 일으켜 가장 가까운 적 챔피언 3명에게 엄청난 마법 피해를 입힙니다.`,
                cooldownBurn: '90/60/45',
                image: require('../../assets/lol_hero_icons/skills/KatarinaR.png')
            },
        ],
    },
    {
        numID: 61,
        id: 'Kayle_top_mid',
        Key: '10',
        name: '케일',
        title: '정의로운 자',
        lore: `룬 전쟁이 한창일 때 태어난 케일은 정의의 성위인 어머니의 뜻을 이어받아 신성한 불꽃의 날개를 펴고 정의를 실현하기 위해 싸웠다. 그리고 쌍둥이 동생 모르가나와 함께 데마시아의 수호자로 수년간 추앙받았다. 그러나 인간들의 반복된 실수에 환멸을 느낀 케일은 결국 데마시아를 영원히 떠나고 말았다. 불타는 검을 휘두르며 악을 심판하는 케일의 이야기는 데마시아의 전설이 되었고, 여전히 많은 이들은 케일의 재림을 간절히 바라고 있다.`,
        blurb: `룬 전쟁이 한창일 때 태어난 케일은 정의의 성위인 어머니의 뜻을 이어받아 신성한 불꽃의 날개를 펴고 정의를 실현하기 위해 싸웠다. 그리고 쌍둥이 동생 모르가나와 함께 데마시아의 수호자로 수년간 추앙받았다. 그러나 인간들의 반복된 실수에 환멸을 느낀 케일은 결국 데마시아를 영원히 떠나고 말았다. 불타는 검을 휘두르며 악을 심판하는 케일의 이야기는 데마시아의 전설이 되었고, 여전히 많은 이들은 케일의 재림을 간절히 바라고 있다.`,
        image: require('../../assets/lol_hero_icons/Kayle.png'),
        background_image: require('../../assets/lol_hero_icons/background/Kayle.jpg'),
        stats: {"hp": 670, "hpperlevel": 92, "mp": 330, "mpperlevel": 50, "movespeed": 335, "armor": 26, "armorperlevel": 4.2, "spellblock": 22, "spellblockperlevel": 1.3, "attackrange": 175, "hpregen": 5, "hpregenperlevel": 0.5, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 50, "attackdamageperlevel": 2.5, "attackspeedperlevel": 1.5, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '거룩한 승천',
                description: `챔피언 레벨 및 스킬 레벨이 오를수록 케일의 공격이 천상의 힘을 받아 강화됩니다. 케일의 날개가 불타오르면서 점차 공격 속도, 이동 속도, 공격 사거리, 기본 공격 시 화염파 발사 효과를 얻습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Kayle_P.png')
            },
            {
                id: 'KayleQ',
                name: '광휘의 일격',
                description: `케일이 차원문을 열어 적을 관통하는 천상의 검을 소환합니다. 검은 적중한 모든 대상에게 피해를 입히고 이동 속도와 방어력, 마법 저항력을 감소시킵니다.`,
                cooldownBurn: '12/11/10/9/8',
                image: require('../../assets/lol_hero_icons/skills/KayleQ.png')
            },
            {
                id: 'KayleW',
                name: '천상의 축복',
                description: `케일과 케일의 가장 가까운 아군이 신의 축복을 받아 체력을 회복하고 이동 속도가 증가합니다.`,
                cooldownBurn: '15',
                image: require('../../assets/lol_hero_icons/skills/KayleW.png')
            },
            {
                id: 'KayleE',
                name: '화염주문검',
                description: `기본 지속 효과: 천상의 검 '선의'가 케일이 공격하는 적에게 추가 마법 피해를 입힙니다.사용 시: 다음 공격 시 천상의 화염으로 대상을 강타하여 대상이 잃은 체력에 비례해 추가 피해를 입힙니다.`,
                cooldownBurn: '8/7.5/7/6.5/6',
                image: require('../../assets/lol_hero_icons/skills/KayleE.png')
            },
            {
                id: 'KayleR',
                name: '신성한 심판',
                description: `케일이 아군 한 명을 무적 상태로 만들고 예전 정의의 성위를 불러와 그 힘으로 신성한 검을 비처럼 쏟아부어 해당 챔피언 주변 지역을 정화합니다.`,
                cooldownBurn: '160/120/80',
                image: require('../../assets/lol_hero_icons/skills/KayleR.png')
            },
        ],
    },
    {
        numID: 62,
        id: 'Kayn_jug',
        Key: '141',
        name: '케인',
        title: '그림자 사신',
        lore: `치명적인 그림자 마법을 그 누구보다도 자유자재로 구사하는 자, 시이다 케인이 싸우는 이유는 자신에게 주어진 진정한 운명을 실현하기 위해서다. 장차 그림자단을 이끌고 아이오니아가 패권을 장악하는 새로운 시대를 열 것이라는 운명. 케인은 자의식이 있는 다르킨 무기 라아스트를 들고 전장에 나선다. 다르킨 무기는 그것을 휘두르는 자의 몸과 정신을 서서히 타락시킨다는 사실은 아랑곳하지 않는 것이다. 다르킨 무기에 손을 댄 이상 예상할 수 있는 결과는 단 두 가지다. 케인이 무기의 의식을 굴복시켜 자신의 의지를 따르게 하거나, 아니면 저 악의에 가득 찬 낫이 케인을 완전히 집어삼키고 룬테라 전역을 멸망의 길로 몰아넣거나.`,
        blurb: `치명적인 그림자 마법을 그 누구보다도 자유자재로 구사하는 자, 시이다 케인이 싸우는 이유는 자신에게 주어진 진정한 운명을 실현하기 위해서다. 장차 그림자단을 이끌고 아이오니아가 패권을 장악하는 새로운 시대를 열 것이라는 운명. 케인은 자의식이 있는 다르킨 무기 라아스트를 들고 전장에 나선다. 다르킨 무기는 그것을 휘두르는 자의 몸과 정신을 서서히 타락시킨다는 사실은 아랑곳하지 않는 것이다. 다르킨 무기에 손을 댄 이상 예상할 수 있는 결과는 단 두...`,
        image: require('../../assets/lol_hero_icons/Kayn.png'),
        background_image: require('../../assets/lol_hero_icons/background/Kayn.jpg'),
        stats: {"hp": 655, "hpperlevel": 109, "mp": 410, "mpperlevel": 50, "movespeed": 340, "armor": 38, "armorperlevel": 4.5, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 8, "hpregenperlevel": 0.75, "mpregen": 11.5, "mpregenperlevel": 0.95, "crit": 0, "critperlevel": 0, "attackdamage": 68, "attackdamageperlevel": 3.3, "attackspeedperlevel": 2.7, "attackspeed": 0.669},
        spells: [
            {
                id: 'passive',
                name: '다르킨의 낫',
                description: `케인은 다르킨 무기 라아스트를 휘두르는 한편 제압하려고 하고, 라아스트는 케인을 잠식하려 합니다. 다르킨이 승리하거나, 아니면 케인이 라아스트를 제압해 그림자 암살자가 될 수도 있습니다.다르킨: 챔피언에게 가한 스킬 피해에 비례해 체력을 회복합니다.그림자 암살자: 적 챔피언과 전투 시작 후 첫 몇 초 동안 추가 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Kayn_Passive_Primary.png')
            },
            {
                id: 'KaynQ',
                name: '살상돌격',
                description: `케인이 앞으로 돌진하며 적을 공격합니다. 돌진 및 공격 시 모두 피해를 입힙니다.`,
                cooldownBurn: '7/6.5/6/5.5/5',
                image: require('../../assets/lol_hero_icons/skills/KaynQ.png')
            },
            {
                id: 'KaynW',
                name: '몰아치는 낫',
                description: `케인이 직선상의 대상 모두에게 피해를 입히고 둔화시킵니다.`,
                cooldownBurn: '13/12/11/10/9',
                image: require('../../assets/lol_hero_icons/skills/KaynW.png')
            },
            {
                id: 'KaynE',
                name: '그림자의 길',
                description: `케인이 지형을 통과해 이동할 수 있습니다.`,
                cooldownBurn: '21/19/17/15/13',
                image: require('../../assets/lol_hero_icons/skills/KaynE.png')
            },
            {
                id: 'KaynR',
                name: '그림자의 지배',
                description: `케인이 적에게 파고들었다가 빠져나오면서 큰 피해를 입힙니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/KaynR.png')
            },
        ],
    },
    {
        numID: 63,
        id: 'Kennen_top',
        Key: '85',
        name: '케넨',
        title: '폭풍의 심장',
        lore: `케넨은 아이오니아의 균형을 수호하는 번개같이 빠른 집행자이기도 하지만, 킨코우 결사단에서 유일한 요들이기도 하다. 작고 복실복실한 외모와는 달리 케넨은 수리검으로 일으키는 소용돌이 폭풍과 끝없는 열정으로 그 어떤 위협도 극복할 준비가 되어있다. 케넨은 사부인 쉔과 함께 영적인 영역을 순찰하며 엄청난 번개의 힘으로 적을 쓰러뜨린다.`,
        blurb: `케넨은 아이오니아의 균형을 수호하는 번개같이 빠른 집행자이기도 하지만, 킨코우 결사단에서 유일한 요들이기도 하다. 작고 복실복실한 외모와는 달리 케넨은 수리검으로 일으키는 소용돌이 폭풍과 끝없는 열정으로 그 어떤 위협도 극복할 준비가 되어있다. 케넨은 사부인 쉔과 함께 영적인 영역을 순찰하며 엄청난 번개의 힘으로 적을 쓰러뜨린다.`,
        image: require('../../assets/lol_hero_icons/Kennen.png'),
        background_image: require('../../assets/lol_hero_icons/background/Kennen.jpg'),
        stats: {"hp": 580, "hpperlevel": 98, "mp": 200, "mpperlevel": 0, "movespeed": 335, "armor": 29, "armorperlevel": 4.95, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 5.5, "hpregenperlevel": 0.65, "mpregen": 50, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 48, "attackdamageperlevel": 3.75, "attackspeedperlevel": 3.4, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '폭풍의 표식',
                description: `케넨의 스킬에 3번 적중당한 적은 기절합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Kennen_Passive.png')
            },
            {
                id: 'KennenShurikenHurlMissile1',
                name: '천둥의 표창',
                description: `케넨이 빠르게 날아가는 수리검을 날려 맞은 대상에게 피해를 입히고 폭풍의 표식을 남깁니다.`,
                cooldownBurn: '7/6.25/5.5/4.75/4',
                image: require('../../assets/lol_hero_icons/skills/KennenShurikenHurlMissile1.png')
            },
            {
                id: 'KennenBringTheLight',
                name: '전류 방출',
                description: `케넨이 기본 공격을 몇 번 하면 힘을 충전하여 다음 기본 공격 대상에게 폭풍의 표식을 남깁니다. 스킬 활성화시 이미 표식이 있는 대상에게 피해를 주며 또 다른 폭풍의 표식을 남길 수 있습니다.`,
                cooldownBurn: '13/11.25/9.5/7.75/6',
                image: require('../../assets/lol_hero_icons/skills/KennenBringTheLight.png')
            },
            {
                id: 'KennenLightningRush',
                name: '번개 질주',
                description: `케넨이 번개로 변신하여 유닛을 뚫고 지나가며 폭풍의 표식을 남깁니다. 번개로 변신하면 이동 속도가 증가하며, 원래 모습으로 돌아오면 공격 속도가 증가합니다.`,
                cooldownBurn: '10/9/8/7/6',
                image: require('../../assets/lol_hero_icons/skills/KennenLightningRush.png')
            },
            {
                id: 'KennenShurikenStorm',
                name: '날카로운 소용돌이',
                description: `케넨이 번개의 폭풍을 소환하여 근처 적 챔피언을 공격하고 마법 피해를 입힙니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/KennenShurikenStorm.png')
            },
        ],
    },
    {
        numID: 64,
        id: 'Khazix_jug',
        Key: '121',
        name: '카직스',
        title: '공허의 약탈자',
        lore: `'공허는 성장하고, 공허는 적응한다.' 공허태생 생명체는 많지만, 이 진리를 카직스보다 더 명백히 입증하는 존재는 없다. 카직스가 공포스러운 것은 진화를 거듭하기 때문이다. 생존을 위해 사냥을 하고, 사냥감을 집어삼킬 때마다 강해지고, 더 강한 상대를 찾아 또다시 사냥에 나선다. 게다가 진화를 할수록 먹이를 낚아채는 사냥 기술은 더 새로워지고 효율도 높아진다. 공허에서 갓 넘어왔을 때에는 아무 생각 없는 야수에 불과했으나, 이제는 그 형체만큼이나 지능도 완전히 변모했다. 지금의 카직스는 세심한 계획을 세워 사냥을 하고, 자신의 모습을 본 희생양이 본능적으로 일으키는 공포심을 활용하기도 한다.`,
        blurb: `'공허는 성장하고, 공허는 적응한다.' 공허태생 생명체는 많지만, 이 진리를 카직스보다 더 명백히 입증하는 존재는 없다. 카직스가 공포스러운 것은 진화를 거듭하기 때문이다. 생존을 위해 사냥을 하고, 사냥감을 집어삼킬 때마다 강해지고, 더 강한 상대를 찾아 또다시 사냥에 나선다. 게다가 진화를 할수록 먹이를 낚아채는 사냥 기술은 더 새로워지고 효율도 높아진다. 공허에서 갓 넘어왔을 때에는 아무 생각 없는 야수에 불과했으나, 이제는 그 형체만큼이나...`,
        image: require('../../assets/lol_hero_icons/Khazix.png'),
        background_image: require('../../assets/lol_hero_icons/background/Khazix.jpg'),
        stats: {"hp": 643, "hpperlevel": 99, "mp": 327, "mpperlevel": 40, "movespeed": 350, "armor": 36, "armorperlevel": 4.2, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 7.5, "hpregenperlevel": 0.75, "mpregen": 7.59, "mpregenperlevel": 0.5, "crit": 0, "critperlevel": 0, "attackdamage": 60, "attackdamageperlevel": 3.1, "attackspeedperlevel": 2.7, "attackspeed": 0.668},
        spells: [
            {
                id: 'passive',
                name: '보이지 않는 위협',
                description: `동료로부터 고립된 근처 적에게 표식이 남습니다. 고립된 대상에게는 카직스의 스킬이 추가 효과를 발휘합니다.카직스는 적의 시야에 노출되지 않을 때 보이지 않는 위협 효과를 받아, 다음 기본 공격으로 적 챔피언에게 추가 마법 피해를 입히고 몇 초간 둔화를 적용합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Khazix_P.png')
            },
            {
                id: 'KhazixQ',
                name: '공포 감지',
                description: `대상에게 물리 피해를 줍니다. 고립된 대상에게는 피해량이 늘어납니다. 거대 갈고리 진화를 고립된 대상에게 사용 시, 재사용 대기시간이 일부 감소합니다. 또한, 카직스의 기본 공격과 공포 감지 범위도 증가합니다.`,
                cooldownBurn: '4',
                image: require('../../assets/lol_hero_icons/skills/KhazixQ.png')
            },
            {
                id: 'KhazixW',
                name: '공허의 가시',
                description: `카직스가 폭발하는 가시를 발사하여 적중한 적에게 물리 피해를 가합니다. 폭발 범위 안에 있으면 카직스의 체력이 회복됩니다. 가시 어깨 진화를 선택하면, 공허의 가시 세 개가 원뿔 형태로 발사되며 적중한 적에게 둔화를 걸고 2초 동안 적 챔피언을 드러냅니다. 고립된 대상에게는 둔화 효과가 증가합니다.`,
                cooldownBurn: '9',
                image: require('../../assets/lol_hero_icons/skills/KhazixW.png')
            },
            {
                id: 'KhazixE',
                name: '도약',
                description: `카직스가 도약하여, 착지할 때 물리 피해를 가합니다. 날개 진화를 선택하면 도약 범위가 200 증가하며, 킬이나 어시스트를 기록하면 도약의 재사용 대기시간이 초기화됩니다.`,
                cooldownBurn: '20/18/16/14/12',
                image: require('../../assets/lol_hero_icons/skills/KhazixE.png')
            },
            {
                id: 'KhazixR',
                name: '공허의 습격',
                description: `카직스의 스킬을 하나 진화시켜 고유한 추가 효과를 부여합니다. 공허의 습격을 활성화하면 카직스가 은신 상태가 되고 보이지 않는 위협이 발동되어, 이동 속도가 증가합니다. 활성 보호색 진화를 선택하면, 은신의 지속시간이 증가하며 공허의 습격을 추가로 사용할 수 있습니다.`,
                cooldownBurn: '100/85/70',
                image: require('../../assets/lol_hero_icons/skills/KhazixR.png')
            },
        ],
    },
    {
        numID: 65,
        id: 'Kindred_jug',
        Key: '203',
        name: '킨드레드',
        title: '영겁의 사냥꾼',
        lore: `킨드레드는 따로지만 언제나 함께인 죽음의 양면을 지닌 존재다. 운명을 받아들인 자에게는 양의 화살로 빠른 죽음을 선사하고, 운명을 거부하고 도망치는 자에게는 늑대가 달려드는 잔혹한 최후를 안겨준다. 룬테라에서는 지역마다 킨드레드의 본성에 다른 의미를 부여했지만, 필멸의 존재라면 결국 진정한 죽음을 선택해야만 한다는 점은 같았다.`,
        blurb: `킨드레드는 따로지만 언제나 함께인 죽음의 양면을 지닌 존재다. 운명을 받아들인 자에게는 양의 화살로 빠른 죽음을 선사하고, 운명을 거부하고 도망치는 자에게는 늑대가 달려드는 잔혹한 최후를 안겨준다. 룬테라에서는 지역마다 킨드레드의 본성에 다른 의미를 부여했지만, 필멸의 존재라면 결국 진정한 죽음을 선택해야만 한다는 점은 같았다.`,
        image: require('../../assets/lol_hero_icons/Kindred.png'),
        background_image: require('../../assets/lol_hero_icons/background/Kindred.jpg'),
        stats: {"hp": 595, "hpperlevel": 104, "mp": 300, "mpperlevel": 35, "movespeed": 325, "armor": 29, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 500, "hpregen": 7, "hpregenperlevel": 0.55, "mpregen": 7, "mpregenperlevel": 0.4, "crit": 0, "critperlevel": 0, "attackdamage": 65, "attackdamageperlevel": 3.25, "attackspeedperlevel": 3.5, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '킨드레드의 표식',
                description: `킨드레드는 사냥감에게 표식을 남길 수 있습니다. 사냥에 성공하면 영구적으로 킨드레드의 기본 스킬이 강화됩니다. 사냥에 4회 성공하면 킨드레드의 기본 공격 사거리가 증가합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Kindred_Passive.png')
            },
            {
                id: 'KindredQ',
                name: '화살 세례',
                description: `킨드레드가 구르며 근처의 대상들에게 최대 세 발의 화살을 발사합니다.`,
                cooldownBurn: '9',
                image: require('../../assets/lol_hero_icons/skills/KindredQ.png')
            },
            {
                id: 'KindredW',
                name: '늑대의 광기',
                description: `늑대가 분노하여 주변의 적들을 공격합니다. 양이 기본 지속 효과로 움직이고 공격하여 중첩을 얻습니다. 완전히 충전되면 양이 다음 번 공격할 때 체력을 회복합니다.`,
                cooldownBurn: '18/17/16/15/14',
                image: require('../../assets/lol_hero_icons/skills/KindredW.png')
            },
            {
                id: 'KindredEWrapper',
                name: '차오르는 공포',
                description: `양이 신중하게 화살을 발사해 대상의 속도를 늦춥니다. 양이 대상을 두 번 더 공격하면 세 번째 공격 시 늑대가 적을 덮치게 만들어, 흉포한 공격으로 큰 피해를 입힙니다.`,
                cooldownBurn: '14/12.5/11/9.5/8',
                image: require('../../assets/lol_hero_icons/skills/KindredEWrapper.png')
            },
            {
                id: 'KindredR',
                name: '양의 안식처',
                description: `양은 안식처 영역 안에 있는 모든 생명체를 죽음으로부터 지켜줍니다. 효과가 끝날 때까지는 아무도 죽지 않습니다. 효과가 끝나면 유닛들이 치유됩니다.`,
                cooldownBurn: '180/150/120',
                image: require('../../assets/lol_hero_icons/skills/KindredR.png')
            },
        ],
    },
    {
        numID: 66,
        id: 'Kled_top_mid',
        Key: '240',
        name: '클레드',
        title: '망나니 기사',
        lore: `용감무쌍하고도 성깔 고약한 전사인 클레드는 녹서스 특유의 객기와 다혈질을 상징하는 존재와도 같다. 그래서 병사들 사이에서는 인기를 휩쓸지만, 장성들 사이에서는 불신의 대상이고, 귀족들에게는 혐오를 한몸에 사고 있다. 소문에 따르면 클레드는 녹서스 제국이 처음 세워진 시절부터 지금까지 모든 군사 작전에서 활약해왔으며, 단 한 번도 후퇴한 적이 없고, 군인으로서 받을 수 있는 칭호란 칭호는 모조리 '따냈다'고 전해진다. 하지만 병사들의 이야기가 과연 어디까지 진실일지는 미지수다. 확실한 것은 클레드가 스칼이라는 이름의 애마를 갖고 있다는 것과, 썩 미덥지 못한 그 애마를 타고서 저돌적으로 전투에 뛰어든다는 사실이다. 자기 것을 지키기 위해서나 원하는 것을 얻기 위해서라면 그는 싸움을 마다하지 않을 것이다.`,
        blurb: `용감무쌍하고도 성깔 고약한 전사인 클레드는 녹서스 특유의 객기와 다혈질을 상징하는 존재와도 같다. 그래서 병사들 사이에서는 인기를 휩쓸지만, 장성들 사이에서는 불신의 대상이고, 귀족들에게는 혐오를 한몸에 사고 있다. 소문에 따르면 클레드는 녹서스 제국이 처음 세워진 시절부터 지금까지 모든 군사 작전에서 활약해왔으며, 단 한 번도 후퇴한 적이 없고, 군인으로서 받을 수 있는 칭호란 칭호는 모조리 '따냈다'고 전해진다. 하지만 병사들의 이야기가 과연...`,
        image: require('../../assets/lol_hero_icons/Kled.png'),
        background_image: require('../../assets/lol_hero_icons/background/Kled.jpg'),
        stats: {"hp": 410, "hpperlevel": 84, "mp": 100, "mpperlevel": 0, "movespeed": 345, "armor": 35, "armorperlevel": 5.2, "spellblock": 28, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 6, "hpregenperlevel": 0.75, "mpregen": 0, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 65, "attackdamageperlevel": 3.5, "attackspeedperlevel": 3.5, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '겁쟁이 도마뱀 스칼',
                description: `클레드는 듬직한 친구 스칼을 타고 다닙니다. 스칼은 클레드 대신 피해를 입고, 스칼의 체력이 모두 소진되면 클레드가 스칼에게서 내립니다.스칼에게서 내리면 클레드의 스킬이 바뀌고 챔피언에 대한 피해량이 줄어듭니다. 적과 싸우면 스칼의 용기를 회복시킬 수 있습니다. 용기가 최대치에 도달하면 스칼이 일부 체력을 회복한 채 나타나 클레드를 다시 태웁니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Kled_P.png')
            },
            {
                id: 'KledQ',
                name: '덫날리기',
                description: `클레드가 밧줄에 묶인 덫을 던져 적 챔피언에게 피해를 입히고 붙잡습니다. 해당 챔피언과 잠시 동안 근거리를 유지하면 클레드 쪽으로 끌어당기면서 추가 물리 피해를 입힙니다.스칼 미탑승 시에는 원거리 공격이 가능한 빵야!로 바뀝니다. 빵야!를 사용하면 클레드가 뒤로 밀려나며 스칼의 용기를 회복시킬 수 있습니다.`,
                cooldownBurn: '11/10/9/8/7',
                image: require('../../assets/lol_hero_icons/skills/KledQ.png')
            },
            {
                id: 'KledW',
                name: '버럭버럭',
                description: `다음 네 번의 기본 공격 속도가 엄청나게 빨라집니다. 네 번째 공격은 피해량도 증가합니다.`,
                cooldownBurn: '11/9.5/8/6.5/5',
                image: require('../../assets/lol_hero_icons/skills/KledW.png')
            },
            {
                id: 'KledE',
                name: '이랴!',
                description: `클레드가 돌진하며 물리 피해를 입히고 이동 속도가 일시적으로 상승합니다. 다시 스킬을 사용하면 최초 대상 쪽으로 돌진하여 동일한 양의 피해를 또 입힐 수 있습니다.`,
                cooldownBurn: '13/12/11/10/9',
                image: require('../../assets/lol_hero_icons/skills/KledE.png')
            },
            {
                id: 'KledR',
                name: '돌겨어어억!!!',
                description: `클레드와 스칼이 보호막을 쓴 채 목표 지점으로 돌진합니다. 돌진 경로 위에 있는 아군은 이동 속도가 빨라집니다. 스칼은 경로 위에 있는 첫 번째 적 챔피언에게 돌격합니다.`,
                cooldownBurn: '140/125/110',
                image: require('../../assets/lol_hero_icons/skills/KledR.png')
            },
        ],
    },
    {
        numID: 67,
        id: 'KogMaw_adc',
        Key: '96',
        name: '코그모',
        title: '심연의 아귀',
        lore: `이케시아의 황무지 어딘가, 인간의 눈길이 닿지 않는 깊은 곳에 공허의 틈이 나타났고, 썩은 내를 풍기는 이곳에서 코그모가 느닷없이 튀어나왔다. 온몸에서는 악취가 스며나오고, 호기심 때문에 항상 떡 벌리고 있는 입에서는 부식성 분비물이 뚝뚝 떨어진다. 주변에 있는 건 닥치는 대로 마구 물어뜯고 침을 질질 흘린 후에야 그것이 무엇인지 알아차린다. 공허태생이지만 천성이 악하지는 않고 천진난만한 언행에 묘한 매력도 있지만, 방심은 금물이다. 식탐과 호기심이 워낙 강해 먹을 만하다 싶은 것은 일단 집어삼키고 보기 때문이다.`,
        blurb: `이케시아의 황무지 어딘가, 인간의 눈길이 닿지 않는 깊은 곳에 공허의 틈이 나타났고, 썩은 내를 풍기는 이곳에서 코그모가 느닷없이 튀어나왔다. 온몸에서는 악취가 스며나오고, 호기심 때문에 항상 떡 벌리고 있는 입에서는 부식성 분비물이 뚝뚝 떨어진다. 주변에 있는 건 닥치는 대로 마구 물어뜯고 침을 질질 흘린 후에야 그것이 무엇인지 알아차린다. 공허태생이지만 천성이 악하지는 않고 천진난만한 언행에 묘한 매력도 있지만, 방심은 금물이다. 식탐과 호기심이...`,
        image: require('../../assets/lol_hero_icons/KogMaw.png'),
        background_image: require('../../assets/lol_hero_icons/background/KogMaw.jpg'),
        stats: {"hp": 635, "hpperlevel": 99, "mp": 325, "mpperlevel": 40, "movespeed": 330, "armor": 24, "armorperlevel": 4.45, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 500, "hpregen": 3.75, "hpregenperlevel": 0.55, "mpregen": 8.75, "mpregenperlevel": 0.7, "crit": 0, "critperlevel": 0, "attackdamage": 61, "attackdamageperlevel": 3.1, "attackspeedperlevel": 2.65, "attackspeed": 0.665},
        spells: [
            {
                id: 'passive',
                name: '이케시아식 마무리',
                description: `코그모가 죽으면 4초 후 폭발하여 주변 적에게 고정 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/KogMaw_IcathianSurprise.png')
            },
            {
                id: 'KogMawQ',
                name: '부식성 침',
                description: `코그모가 부식성 침을 발사하여 적에게 마법 피해를 입히고 잠깐 동안 대상의 방어력과 마법 방어력을 낮춥니다. 코그모는 추가 공격 속도를 얻습니다.`,
                cooldownBurn: '7',
                image: require('../../assets/lol_hero_icons/skills/KogMawQ.png')
            },
            {
                id: 'KogMawBioArcaneBarrage',
                name: '생체마법 폭격',
                description: `코그모의 공격 사거리가 증가하고 피격 대상의 최대 체력에 비례한 마법 피해를 입힙니다.`,
                cooldownBurn: '17',
                image: require('../../assets/lol_hero_icons/skills/KogMawBioArcaneBarrage.png')
            },
            {
                id: 'KogMawVoidOoze',
                name: '공허의 분비물',
                description: `코그모가 특유의 진액을 발사하여 진액에 맞는 모든 적에게 피해를 입히며, 진액이 남긴 흔적 위에 있는 적의 이동 속도를 늦춥니다.`,
                cooldownBurn: '12',
                image: require('../../assets/lol_hero_icons/skills/KogMawVoidOoze.png')
            },
            {
                id: 'KogMawLivingArtillery',
                name: '살아있는 곡사포',
                description: `코그모가 매우 멀리서 포탄을 발사하여 마법 피해를 입히고 은신하지 않은 대상의 모습을 드러나게 합니다. 체력이 낮은 적에게는 더 큰 피해를 입힙니다. 또한 짧은 시간 동안 여러 번 살아 있는 곡사포 스킬을 사용하면 마나가 추가로 소모됩니다.`,
                cooldownBurn: '2/1.5/1',
                image: require('../../assets/lol_hero_icons/skills/KogMawLivingArtillery.png')
            },
        ],
    },
    {
        numID: 68,
        id: 'KSante_top',
        Key: '897',
        name: '크산테',
        title: '나주마의 긍지',
        lore: `용감하고 도전적인 크산테는 누구나 탐내는 슈리마 사막 속의 오아시스, 고향 나주마를 지키기 위해 거대한 짐승과 무자비한 초월체에 맞서 싸운다. 하지만 크산테는 예전 파트너와 사이가 틀어진 후 나주마를 이끌 만한 전사가 되려면 성공만을 향해 달려가는 아집을 버려야 한다는 것을 깨달았다. 그래야만 긍지라는 덫에 빠지지 않고 나주마 사람들을 위협하는 포악한 괴물들을 물리치는 데 필요한 지혜를 찾을 수 있을 것이다.`,
        blurb: `용감하고 도전적인 크산테는 누구나 탐내는 슈리마 사막 속의 오아시스, 고향 나주마를 지키기 위해 거대한 짐승과 무자비한 초월체에 맞서 싸운다. 하지만 크산테는 예전 파트너와 사이가 틀어진 후 나주마를 이끌 만한 전사가 되려면 성공만을 향해 달려가는 아집을 버려야 한다는 것을 깨달았다. 그래야만 긍지라는 덫에 빠지지 않고 나주마 사람들을 위협하는 포악한 괴물들을 물리치는 데 필요한 지혜를 찾을 수 있을 것이다.`,
        image: require('../../assets/lol_hero_icons/KSante.png'),
        background_image: require('../../assets/lol_hero_icons/background/KSante.jpg'),
        stats: {"hp": 625, "hpperlevel": 120, "mp": 320, "mpperlevel": 60, "movespeed": 330, "armor": 33, "armorperlevel": 5.2, "spellblock": 30, "spellblockperlevel": 2.1, "attackrange": 175, "hpregen": 9.5, "hpregenperlevel": 1, "mpregen": 7, "mpregenperlevel": 1, "crit": 0, "critperlevel": 0, "attackdamage": 64, "attackdamageperlevel": 3.5, "attackspeedperlevel": 2.5, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '불굴의 본능',
                description: `크산테의 스킬이 대상에게 표식을 남겨 다음번 기본 공격 시 추가 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Icons_KSante_P.png')
            },
            {
                id: 'KSanteQ',
                name: '엔토포 타격',
                description: `전방으로 무기를 휘둘러 짧은 일직선상에 있는 모든 적에게 피해를 입히고 둔화 효과를 적용합니다.적중 시 몇 초 동안 중첩을 1회 얻습니다. 2번 중첩되면 이 스킬이 적들을 끌어당기는 충격파를 발사합니다.`,
                cooldownBurn: '4',
                image: require('../../assets/lol_hero_icons/skills/KSanteQ.png')
            },
            {
                id: 'KSanteW',
                name: '길을 여는 자',
                description: `크산테가 충전한 후 돌진합니다. 돌진 중에는 저지 불가 상태가 되고 받는 피해량이 감소합니다. 돌진 시 부딪힌 적은 돌진 경로 끝으로 밀려나고 기절합니다.`,
                cooldownBurn: '24/22/20/18/16',
                image: require('../../assets/lol_hero_icons/skills/KSanteW.png')
            },
            {
                id: 'KSanteE',
                name: '발놀림',
                description: `크산테가 아군에게 돌진해 함께 보호막을 얻습니다. 아군이 없다면 돌진 사거리가 감소하며 보호막을 얻습니다.`,
                cooldownBurn: '10.5/10/9.5/9/8.5',
                image: require('../../assets/lol_hero_icons/skills/KSanteE.png')
            },
            {
                id: 'KSanteR',
                name: '총공세',
                description: `크산테가 적을 강타해 밀어냅니다. 대상이 벽에 부딪히면 벽을 통과해 추가 피해를 입습니다. 크산테는 대상 뒤에 나타나 총공세 상태에 돌입하며, 이때 방어력이 감소하고 피해량은 크게 증가합니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/KSanteR.png')
            },
        ],
    },
    {
        numID: 69,
        id: 'Leblanc_mid_sup',
        Key: '7',
        name: '르블랑',
        title: '환술사',
        lore: `르블랑은 검은 장미단의 다른 구성원들조차도 본모습을 알지 못하는 신비로운 존재다. 사실 르블랑이라는 이름은 녹서스 건국 초기부터 사람들과 사건을 마음대로 홀리고 조작하던, 안색이 창백한 어느 여인이 갖고 있던 수많은 이름 중 하나에 불과하다. 르블랑은 마법으로 자신의 형체를 복제할 수 있으므로 누구에게든, 어디에든 모습을 드러낼 수 있으며 심지어 여러 장소에 동시에 존재할 수도 있다. 좀체로 남의 눈에 띄지 않고 진짜 정체를 아는 사람도 없기에, 르블랑의 진정한 동기 역시 비밀에 싸여 있다.`,
        blurb: `르블랑은 검은 장미단의 다른 구성원들조차도 본모습을 알지 못하는 신비로운 존재다. 사실 르블랑이라는 이름은 녹서스 건국 초기부터 사람들과 사건을 마음대로 홀리고 조작하던, 안색이 창백한 어느 여인이 갖고 있던 수많은 이름 중 하나에 불과하다. 르블랑은 마법으로 자신의 형체를 복제할 수 있으므로 누구에게든, 어디에든 모습을 드러낼 수 있으며 심지어 여러 장소에 동시에 존재할 수도 있다. 좀체로 남의 눈에 띄지 않고 진짜 정체를 아는 사람도 없기에...`,
        image: require('../../assets/lol_hero_icons/Leblanc.png'),
        background_image: require('../../assets/lol_hero_icons/background/Leblanc.jpg'),
        stats: {"hp": 598, "hpperlevel": 111, "mp": 400, "mpperlevel": 25, "movespeed": 340, "armor": 22, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 525, "hpregen": 7.5, "hpregenperlevel": 0.55, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 55, "attackdamageperlevel": 2.2, "attackspeedperlevel": 2.35, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '거울 환영',
                description: `르블랑의 체력이 40% 아래로 내려가면 1초 동안 투명 상태가 되며 거울 환영을 생성합니다. 환영은 피해를 입힐 수 없고 최대 8초까지 지속됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/LeBlancP.png')
            },
            {
                id: 'LeblancQ',
                name: '악의의 인장',
                description: `르블랑이 인장을 날려 대상에게 피해를 주고 3.5초 동안 표식을 남깁니다. 표식이 남은 대상을 스킬로 공격하면 인장이 폭발하며 추가 피해를 입힙니다. 인장이 명중하거나 폭발해 대상을 처치하면 소모한 마나를 돌려받고 이 스킬의 남은 재사용 대기시간이 감소합니다.`,
                cooldownBurn: '6',
                image: require('../../assets/lol_hero_icons/skills/LeblancQ.png')
            },
            {
                id: 'LeblancW',
                name: '왜곡',
                description: `르블랑이 지정 위치로 돌진하여 해당 지점 주변 적에게 피해를 줍니다. 4초 안에 왜곡을 다시 사용하면 처음 위치로 돌아옵니다.`,
                cooldownBurn: '15/13.75/12.5/11.25/10',
                image: require('../../assets/lol_hero_icons/skills/LeblancW.png')
            },
            {
                id: 'LeblancE',
                name: '환영 사슬',
                description: `르블랑이 사슬을 던져 처음 명중한 적을 옭아맵니다. 대상이 1.5초 동안 사슬에 묶일 경우 대상을 속박하고 추가 피해를 입힙니다.`,
                cooldownBurn: '14/13.25/12.5/11.75/11',
                image: require('../../assets/lol_hero_icons/skills/LeblancE.png')
            },
            {
                id: 'LeblancR',
                name: '모방',
                description: `르블랑이 기본 스킬 중 하나를 모방해서 사용합니다.`,
                cooldownBurn: '50/40/30',
                image: require('../../assets/lol_hero_icons/skills/LeblancR.png')
            },
        ],
    },
    {
        numID: 70,
        id: 'LeeSin_jug',
        Key: '64',
        name: '리 신',
        title: '눈먼 수도승',
        lore: `리 신은 아이오니아에 전해 내려오는 고대 무술에 통달했다. 지조 높고 고결한 전사로, 싸워야 할 때에는 용의 혼의 정수를 끌어낸다. 오래 전에 시각을 잃었으나, 고향 땅의 신성한 균형을 해치려 드는 자를 막아내는 데 일생을 바치겠다는 신념은 흔들림이 없다. 명상에 잠긴 듯 고요한 태도를 얕보고 함부로 덤벼드는 적은 리 신의 불꽃 같은 주먹과 초인적 위력의 돌려차기에 속수무책으로 당한다.`,
        blurb: `리 신은 아이오니아에 전해 내려오는 고대 무술에 통달했다. 지조 높고 고결한 전사로, 싸워야 할 때에는 용의 혼의 정수를 끌어낸다. 오래 전에 시각을 잃었으나, 고향 땅의 신성한 균형을 해치려 드는 자를 막아내는 데 일생을 바치겠다는 신념은 흔들림이 없다. 명상에 잠긴 듯 고요한 태도를 얕보고 함부로 덤벼드는 적은 리 신의 불꽃 같은 주먹과 초인적 위력의 돌려차기에 속수무책으로 당한다.`,
        image: require('../../assets/lol_hero_icons/LeeSin.png'),
        background_image: require('../../assets/lol_hero_icons/background/LeeSin.jpg'),
        stats: {"hp": 645, "hpperlevel": 108, "mp": 200, "mpperlevel": 0, "movespeed": 345, "armor": 36, "armorperlevel": 4.9, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 7.5, "hpregenperlevel": 0.7, "mpregen": 50, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 66, "attackdamageperlevel": 3.7, "attackspeedperlevel": 3, "attackspeed": 0.651},
        spells: [
            {
                id: 'passive',
                name: '질풍격',
                description: `리 신이 스킬을 사용하면 다음 두 번의 기본 공격 속도가 증가하며 기력을 회복합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/LeeSinPassive.png')
            },
            {
                id: 'LeeSinQOne',
                name: '음파 / 공명의 일격',
                description: `음파: 리 신이 음파를 발사하여 적의 위치를 파악하며, 음파에 맞은 적에게 물리 피해를 입힙니다. 적이 음파에 명중하면 다음 3초 안에 공명의 일격을 시전할 수 있습니다.공명의 일격: 리 신이 음파에 맞은 적에게 돌격해 적이 잃은 체력에 비례한 물리 피해를 입힙니다.`,
                cooldownBurn: '10/9/8/7/6',
                image: require('../../assets/lol_hero_icons/skills/LeeSinQOne.png')
            },
            {
                id: 'LeeSinWOne',
                name: '방호 / 강철의 의지',
                description: `방호: 리 신이 대상 아군에게 돌격하여 자신에게 피해를 흡수하는 보호막을 생성합니다. 해당 아군이 챔피언일 경우 아군에게도 보호막이 적용됩니다. 방호를 사용하고 난 뒤 강철의 의지를 시전할 수 있습니다.강철의 의지: 고된 수행으로 리 신이 전투에서 보다 잘 살아남을 수 있게 됩니다. 생명력 흡수와 주문 흡혈 효과를 얻습니다.`,
                cooldownBurn: '12',
                image: require('../../assets/lol_hero_icons/skills/LeeSinWOne.png')
            },
            {
                id: 'LeeSinEOne',
                name: '폭풍/무력화',
                description: `폭풍: 리 신이 바닥을 내리쳐 마법 피해를 입히고 은신한 유닛을 드러내는 충격파를 발생시킵니다. 폭풍이 적에게 명중하면 무력화를 사용할 수 있습니다.무력화: 리 신이 폭풍에 피해를 입은 적을 약화시키며 이동 속도를 낮춥니다. 저하된 이동 속도는 시간이 지남에 따라 점차 회복됩니다.`,
                cooldownBurn: '9',
                image: require('../../assets/lol_hero_icons/skills/LeeSinEOne.png')
            },
            {
                id: 'LeeSinR',
                name: '용의 분노',
                description: `리 신이 강력한 돌려차기로 적 챔피언을 뒤로 밀어내고 공격 대상과 대상과 부딪히는 모든 적에게 물리 피해를 입힙니다. 공격 대상과 부딪힌 적은 짧은 시간 공중에 떠오릅니다. 이 기술은 제시 페링이 전수한 기술이지만, 리 신은 적을 맵 밖으로 날려버리지는 않습니다.`,
                cooldownBurn: '110/85/60',
                image: require('../../assets/lol_hero_icons/skills/LeeSinR.png')
            },
        ],
    },
    {
        numID: 71,
        id: 'Leona_sup',
        Key: '89',
        name: '레오나',
        title: '여명의 빛',
        lore: `솔라리 성전사 레오나는 천공의 검과 여명의 방패로 타곤 산을 수호한다. 레오나의 몸은 태양의 불길로 가득하며, 피부는 별의 광채로 빛나고, 눈동자는 천체들의 기운으로 불타오른다. 황금 갑주와 어마어마한 고대의 지식으로 무장한 레오나는 어떤 이들에게는 깨우침을, 어떤 이들에게는 죽음을 선사한다.`,
        blurb: `솔라리 성전사 레오나는 천공의 검과 여명의 방패로 타곤 산을 수호한다. 레오나의 몸은 태양의 불길로 가득하며, 피부는 별의 광채로 빛나고, 눈동자는 천체들의 기운으로 불타오른다. 황금 갑주와 어마어마한 고대의 지식으로 무장한 레오나는 어떤 이들에게는 깨우침을, 어떤 이들에게는 죽음을 선사한다.`,
        image: require('../../assets/lol_hero_icons/Leona.png'),
        background_image: require('../../assets/lol_hero_icons/background/Leona.jpg'),
        stats: {"hp": 646, "hpperlevel": 101, "mp": 302, "mpperlevel": 40, "movespeed": 335, "armor": 43, "armorperlevel": 4.8, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 8.5, "hpregenperlevel": 0.85, "mpregen": 6, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 60, "attackdamageperlevel": 3, "attackspeedperlevel": 2.9, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '햇빛',
                description: `공격 스킬은 대상에게 1.5초 동안 햇빛 효과를 부여합니다. 아군 챔피언이 햇빛에 걸린 적을 공격하면 햇빛 효과가 사라지며 추가 마법 피해를 줍니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/LeonaSunlight.png')
            },
            {
                id: 'LeonaShieldOfDaybreak',
                name: '여명의 방패',
                description: `레오나가 다음 기본 공격에서 방패를 사용하여 대상에게 추가 마법 피해를 입히고 기절시킵니다.`,
                cooldownBurn: '5',
                image: require('../../assets/lol_hero_icons/skills/LeonaShieldOfDaybreak.png')
            },
            {
                id: 'LeonaSolarBarrier',
                name: '일식',
                description: `레오나가 방패를 들어 피해량 감소 효과를 얻고 방어력과 마법 저항력을 높입니다. 지속시간이 끝날 때 근처에 적이 있으면 마법 피해를 주며 스킬의 지속시간이 늘어납니다.`,
                cooldownBurn: '14/13/12/11/10',
                image: require('../../assets/lol_hero_icons/skills/LeonaSolarBarrier.png')
            },
            {
                id: 'LeonaZenithBlade',
                name: '천공의 검',
                description: `레오나가 검으로 태양의 형상을 쏘아 일직선에 있는 적에게 마법 피해를 줍니다. 이 형상이 사라지면 마지막으로 공격 당한 챔피언이 일시적으로 이동 불능 상태가 되며 레오나가 그쪽으로 돌격하게 됩니다.`,
                cooldownBurn: '12/10.5/9/7.5/6',
                image: require('../../assets/lol_hero_icons/skills/LeonaZenithBlade.png')
            },
            {
                id: 'LeonaSolarFlare',
                name: '흑점 폭발',
                description: `레오나가 태양 에너지를 소환하여 일정 범위 내 적에게 피해를 줍니다. 이 범위 한가운데 있는 적은 기절하며 외곽에 있는 적은 이동 속도가 느려집니다.`,
                cooldownBurn: '90/75/60',
                image: require('../../assets/lol_hero_icons/skills/LeonaSolarFlare.png')
            },
        ],
    },
    {
        numID: 72,
        id: 'Lillia_jug',
        Key: '876',
        name: '릴리아',
        title: '수줍은 꽃',
        lore: `부끄럼을 많이 타는 사슴, 릴리아는 조심스럽게 아이오니아의 숲을 배회한다. 필멸자들의 모습에 매료되면서도, 동시에 공포를 느끼는 그녀는 꿈꾸는 나무에 인간들의 꿈이 흘러들지 않는 이유를 궁금해한다. 이제 릴리아는 마법이 깃든 나뭇가지를 손에 쥐고 아이오니아를 여행한다. 이뤄지지 못한 인간들의 꿈을 찾고, 그들의 빛을 가리고 있는 공포를 없애야만 릴리아 역시 활짝 피어날 수 있기 때문이다.`,
        blurb: `부끄럼을 많이 타는 사슴, 릴리아는 조심스럽게 아이오니아의 숲을 배회한다. 필멸자들의 모습에 매료되면서도, 동시에 공포를 느끼는 그녀는 꿈꾸는 나무에 인간들의 꿈이 흘러들지 않는 이유를 궁금해한다. 이제 릴리아는 마법이 깃든 나뭇가지를 손에 쥐고 아이오니아를 여행한다. 이뤄지지 못한 인간들의 꿈을 찾고, 그들의 빛을 가리고 있는 공포를 없애야만 릴리아 역시 활짝 피어날 수 있기 때문이다.`,
        image: require('../../assets/lol_hero_icons/Lillia.png'),
        background_image: require('../../assets/lol_hero_icons/background/Lillia.jpg'),
        stats: {"hp": 605, "hpperlevel": 105, "mp": 410, "mpperlevel": 50, "movespeed": 330, "armor": 22, "armorperlevel": 5.2, "spellblock": 32, "spellblockperlevel": 1.55, "attackrange": 325, "hpregen": 2.5, "hpregenperlevel": 0.55, "mpregen": 11.5, "mpregenperlevel": 0.95, "crit": 0, "critperlevel": 0, "attackdamage": 61, "attackdamageperlevel": 3.1, "attackspeedperlevel": 2.7, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '꿈나무 지팡이',
                description: `챔피언 또는 몬스터에게 스킬이 적중하면 지속시간 동안 최대 체력에 비례한 피해를 추가로 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Lillia_Icon_Passive.png')
            },
            {
                id: 'LilliaQ',
                name: '뾰로롱 강타',
                description: `기본 지속 효과로 스킬이 적에게 적중하면 릴리아의 이동 속도가 중첩되어 증가합니다. 사용 시 근처 적에게 마법 피해를 입히고 가장자리에 있는 적에게 추가 고정 피해를 입힙니다.`,
                cooldownBurn: '6/5.5/5/4.5/4',
                image: require('../../assets/lol_hero_icons/skills/LilliaQ.png')
            },
            {
                id: 'LilliaW',
                name: '이익! 쿵!',
                description: `릴리아가 근처 적에게 피해를 입힙니다. 중심에 있는 적에게는 더 큰 피해를 입힙니다.`,
                cooldownBurn: '14/13/12/11/10',
                image: require('../../assets/lol_hero_icons/skills/LilliaW.png')
            },
            {
                id: 'LilliaE',
                name: '데굴데굴 씨앗',
                description: `릴리아가 씨앗을 던져 적중한 적에게 피해를 입히고 둔화시킵니다. 씨앗은 벽 또는 대상에 부딪힐 때까지 굴러갑니다.`,
                cooldownBurn: '14',
                image: require('../../assets/lol_hero_icons/skills/LilliaE.png')
            },
            {
                id: 'LilliaR',
                name: '감미로운 자장가',
                description: `릴리아가 꿈가루가 묻은 적을 전부 졸음 상태에 빠뜨린 뒤 잠들게 합니다. 피해를 입어 깨어난 적은 추가 피해를 입습니다.`,
                cooldownBurn: '150/130/110',
                image: require('../../assets/lol_hero_icons/skills/LilliaR.png')
            },
        ],
    },
    {
        numID: 73,
        id: 'Lissandra_mid',
        Key: '127',
        name: '리산드라',
        title: '얼음 마녀',
        lore: `혹한의 북쪽 땅 주민들은 아주 먼 옛날부터 '그녀'를 두려워했다. 그녀는 순수한 냉기를 왜곡시켜 어둠의 힘으로 부리는 마법을 구사했으며, 날카로운 얼음으로 자신에 대적하는 적들을 모조리 꿰뚫어 버리거나 으스러뜨렸다. 얼마나 무시무시하고 막강한 힘이었는지! 사람들은 그녀의 본명을 언급하는 것마저 꺼려 '얼음 마녀'라는 별명으로 그녀를 칭하곤 했다. 그러나 진정 두려운 것은 그녀의 힘이 아니라 위험한 계획이었다. 이 사악한 마녀의 이름은 리산드라, 그녀는 대자연을 암흑의 힘으로 물들여 이 세계에 빙하기를 초래하려 한다.`,
        blurb: `혹한의 북쪽 땅 주민들은 아주 먼 옛날부터 '그녀'를 두려워했다. 그녀는 순수한 냉기를 왜곡시켜 어둠의 힘으로 부리는 마법을 구사했으며, 날카로운 얼음으로 자신에 대적하는 적들을 모조리 꿰뚫어 버리거나 으스러뜨렸다. 얼마나 무시무시하고 막강한 힘이었는지! 사람들은 그녀의 본명을 언급하는 것마저 꺼려 '얼음 마녀'라는 별명으로 그녀를 칭하곤 했다. 그러나 진정 두려운 것은 그녀의 힘이 아니라 위험한 계획이었다. 이 사악한 마녀의 이름은 리산드라...`,
        image: require('../../assets/lol_hero_icons/Lissandra.png'),
        background_image: require('../../assets/lol_hero_icons/background/Lissandra.jpg'),
        stats: {"hp": 620, "hpperlevel": 110, "mp": 475, "mpperlevel": 30, "movespeed": 325, "armor": 22, "armorperlevel": 4.9, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 7, "hpregenperlevel": 0.55, "mpregen": 8, "mpregenperlevel": 0.4, "crit": 0, "critperlevel": 0, "attackdamage": 55, "attackdamageperlevel": 2.7, "attackspeedperlevel": 1.5, "attackspeed": 0.656},
        spells: [
            {
                id: 'passive',
                name: '냉기의 지배',
                description: `리산드라 주변의 적 챔피언이 쓰러지면 얼음 노예가 됩니다. 얼음 노예는 주변의 적을 모두 둔화시키고 잠시 후 극도로 차가운 냉기에 의해 폭발하며 마법 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Lissandra_Passive.png')
            },
            {
                id: 'LissandraQ',
                name: '얼음 파편',
                description: `적을 맞히면 부서지는 얼음창을 던져 마법 피해를 입히고 이동 속도를 늦춥니다. 파편들이 대상을 꿰뚫고 나가, 여기에 맞는 다른 적들에게도 동일한 피해를 입힙니다.`,
                cooldownBurn: '8/7/6/5/4',
                image: require('../../assets/lol_hero_icons/skills/LissandraQ.png')
            },
            {
                id: 'LissandraW',
                name: '서릿발',
                description: `주변 적들을 꽁꽁 얼려 마법 피해를 입히면서 발을 묶습니다.`,
                cooldownBurn: '10/9.5/9/8.5/8',
                image: require('../../assets/lol_hero_icons/skills/LissandraW.png')
            },
            {
                id: 'LissandraE',
                name: '얼음갈퀴 길',
                description: `리산드라가 마법 피해를 주는 얼음갈퀴를 생성합니다. 이 스킬을 다시 시전하면 리산드라가 얼음갈퀴의 현재 위치로 순간이동합니다.`,
                cooldownBurn: '24/21/18/15/12',
                image: require('../../assets/lol_hero_icons/skills/LissandraE.png')
            },
            {
                id: 'LissandraR',
                name: '얼음 무덤',
                description: `적 챔피언에게 시전하면 대상이 꽁꽁 얼면서 기절합니다. 리산드라에게 시전하면 몸을 어둠의 얼음으로 감싸, 공격할 수 없는 무적 상태가 된 채로 자신을 치유합니다. 그 다음 어둠의 얼음이 대상에게서 번져나가 적들에게 마법 피해를 주며 이동 속도를 늦춥니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/LissandraR.png')
            },
        ],
    },
    {
        numID: 74,
        id: 'Lucian_top_mid_adc',
        Key: '236',
        name: '루시안',
        title: '정화의 사도',
        lore: `빛의 감시자 루시안은 고대의 마력이 깃든 한 쌍의 총으로 무장하고 언데드를 추격해 몰살하는 죽음의 사냥꾼이다. 악령 쓰레쉬가 그의 아내를 살해한 후 루시안은 복수의 여정을 떠났지만 그녀가 살아 돌아왔음에도 그의 분노는 사그라지지 않았다. 오직 한 가지 목표만을 쫓는 무자비한 루시안은 검은 안개의 고대 망령들로부터 산 자들을 지키기 위해서라면 어떤 일도 서슴지 않을 것이다.`,
        blurb: `빛의 감시자 루시안은 고대의 마력이 깃든 한 쌍의 총으로 무장하고 언데드를 추격해 몰살하는 죽음의 사냥꾼이다. 악령 쓰레쉬가 그의 아내를 살해한 후 루시안은 복수의 여정을 떠났지만 그녀가 살아 돌아왔음에도 그의 분노는 사그라지지 않았다. 오직 한 가지 목표만을 쫓는 무자비한 루시안은 검은 안개의 고대 망령들로부터 산 자들을 지키기 위해서라면 어떤 일도 서슴지 않을 것이다.`,
        image: require('../../assets/lol_hero_icons/Lucian.png'),
        background_image: require('../../assets/lol_hero_icons/background/Lucian.jpg'),
        stats: {"hp": 641, "hpperlevel": 100, "mp": 320, "mpperlevel": 43, "movespeed": 335, "armor": 28, "armorperlevel": 4.2, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 500, "hpregen": 3.75, "hpregenperlevel": 0.65, "mpregen": 7, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 60, "attackdamageperlevel": 2.9, "attackspeedperlevel": 3.3, "attackspeed": 0.638},
        spells: [
            {
                id: 'passive',
                name: '빛의 사수',
                description: `루시안이 스킬을 사용할 때마다 다음 공격이 2연속으로 발사됩니다. 아군이 루시안에게 회복 또는 보호막 효과를 부여하거나, 근처 적 챔피언이 이동 불가 상태가 되면 루시안의 다음 기본 공격 2회가 추가 마법 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Lucian_Passive.png')
            },
            {
                id: 'LucianQ',
                name: '꿰뚫는 빛',
                description: `루시안이 대상을 관통하는 빛 줄기를 발사합니다.`,
                cooldownBurn: '9/8/7/6/5',
                image: require('../../assets/lol_hero_icons/skills/LucianQ.png')
            },
            {
                id: 'LucianW',
                name: '타는 불길',
                description: `루시안이 별 모양으로 폭발하여 적에게 표식을 남기는 미사일을 발사합니다. 미사일에 맞은 적은 잠시 위치가 드러나며 표식이 남아 있는 적을 공격하면 루시안의 이동 속도가 상승합니다.`,
                cooldownBurn: '14/13/12/11/10',
                image: require('../../assets/lol_hero_icons/skills/LucianW.png')
            },
            {
                id: 'LucianE',
                name: '끈질긴 추격',
                description: `루시안이 짧은 거리를 빠르게 돌진합니다. 빛의 사수 스킬로 공격하면 끈질긴 추격의 재사용 대기시간이 감소합니다.`,
                cooldownBurn: '19/17.75/16.5/15.25/14',
                image: require('../../assets/lol_hero_icons/skills/LucianE.png')
            },
            {
                id: 'LucianR',
                name: '빛의 심판',
                description: `루시안의 무기에서 총알이 난사됩니다.`,
                cooldownBurn: '110/100/90',
                image: require('../../assets/lol_hero_icons/skills/LucianR.png')
            },
        ],
    },
    {
        numID: 75,
        id: 'Lulu_sup',
        Key: '117',
        name: '룰루',
        title: '요정 마법사',
        lore: `요들 마법사 룰루는 친구인 요정 픽스와 함께 룬테라를 돌아다니며, 꿈결같은 환상과 상상 속에서나 존재할 법한 생명체를 만들어내는 것으로 유명하다. 룰루는 내키는 대로 현실을 빚어내고, 세상의 법칙을 비틀어 버린다. 룰루가 보기에 이 세상의 물리 법칙에 따르는 제약은 시시하고 따분하다. 룰루의 마법은 좋게 본다 해도 비정상적이고 나쁘게 보면 위험하다고까지 할 수도 있겠지만, 룰루의 신념은 확고하다. 사람들에게 마법 한 번씩 맛보여 주는 게 뭐 그리 큰일이냐는 것이다.`,
        blurb: `요들 마법사 룰루는 친구인 요정 픽스와 함께 룬테라를 돌아다니며, 꿈결같은 환상과 상상 속에서나 존재할 법한 생명체를 만들어내는 것으로 유명하다. 룰루는 내키는 대로 현실을 빚어내고, 세상의 법칙을 비틀어 버린다. 룰루가 보기에 이 세상의 물리 법칙에 따르는 제약은 시시하고 따분하다. 룰루의 마법은 좋게 본다 해도 비정상적이고 나쁘게 보면 위험하다고까지 할 수도 있겠지만, 룰루의 신념은 확고하다. 사람들에게 마법 한 번씩 맛보여 주는 게 뭐 그리...`,
        image: require('../../assets/lol_hero_icons/Lulu.png'),
        background_image: require('../../assets/lol_hero_icons/background/Lulu.jpg'),
        stats: {"hp": 595, "hpperlevel": 92, "mp": 350, "mpperlevel": 55, "movespeed": 330, "armor": 26, "armorperlevel": 4.9, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 6, "hpregenperlevel": 0.6, "mpregen": 11, "mpregenperlevel": 0.6, "crit": 0, "critperlevel": 0, "attackdamage": 47, "attackdamageperlevel": 2.6, "attackspeedperlevel": 2.25, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '요정 친구 픽스',
                description: `픽스는 현재 따라다니는 챔피언이 적 유닛을 공격할 때마다 함께 마법 광선을 발사합니다. 이 마법 광선은 목표를 추적하지만, 다른 유닛이 막아서 대신 맞을 수 있습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Lulu_PixFaerieCompanion.png')
            },
            {
                id: 'LuluQ',
                name: '반짝반짝 창',
                description: `픽스와 룰루가 각각 마법 화살을 하나씩 발사하여 맞는 적에게 피해를 입히고 둔화시킵니다.`,
                cooldownBurn: '7',
                image: require('../../assets/lol_hero_icons/skills/LuluQ.png')
            },
            {
                id: 'LuluW',
                name: '변덕쟁이',
                description: `아군에게 사용하면 잠깐 동안 대상의 공격 속도와 이동 속도가 상승합니다. 적에게 시전하면 기본 공격이나 스킬 시전이 불가능한 귀여운 생물로 변합니다.`,
                cooldownBurn: '17/16.5/16/15.5/15',
                image: require('../../assets/lol_hero_icons/skills/LuluW.png')
            },
            {
                id: 'LuluE',
                name: '도와줘, 픽스!',
                description: `아군에게 시전하면 픽스가 대상에게 점프하여 보호막을 씌워줍니다. 그 다음 대상을 따라다니며 공격을 돕습니다. 적에게 시전하면 픽스가 대상에게 점프하여 피해를 줍니다. 그 다음 대상을 따라다니며 위치를 확인할 수 있도록 해 줍니다.`,
                cooldownBurn: '8',
                image: require('../../assets/lol_hero_icons/skills/LuluE.png')
            },
            {
                id: 'LuluR',
                name: '급성장',
                description: `룰루가 아군의 몸집을 키우며 근처의 적들을 공중으로 띄워올리고, 아군의 체력을 대폭 높여줍니다. 이후 몇 초 동안 해당 아군에게 오오라가 생겨 근처의 적들은 속도가 느려집니다.`,
                cooldownBurn: '100/90/80',
                image: require('../../assets/lol_hero_icons/skills/LuluR.png')
            },
        ],
    },
    {
        numID: 76,
        id: 'Lux_mid_sup',
        Key: '99',
        name: '럭스',
        title: '광명의 소녀',
        lore: `럭산나 크라운가드는 데마시아 인으로, 마법 능력을 가진 자를 공포와 의심을 담은 편협한 시선으로 보는 환경에서 태어났다. 고귀한 가문의 딸이지만 빛을 자유자재로 다루는 마법력을 타고났기에 이 능력이 발각되면 추방당할 것이라는 두려움을 안고 어린 시절을 보냈다. 자신의 능력을 감추는 것만이 가문의 명예를 지키는 방법이라고 여겼지만, 낙천적이고 유연한 성격 덕분에 차츰 자신만의 재능을 인정하고 받아들였고, 이제는 조국을 위해 마법을 은밀하게 사용하고 있다.`,
        blurb: `럭산나 크라운가드는 데마시아 인으로, 마법 능력을 가진 자를 공포와 의심을 담은 편협한 시선으로 보는 환경에서 태어났다. 고귀한 가문의 딸이지만 빛을 자유자재로 다루는 마법력을 타고났기에 이 능력이 발각되면 추방당할 것이라는 두려움을 안고 어린 시절을 보냈다. 자신의 능력을 감추는 것만이 가문의 명예를 지키는 방법이라고 여겼지만, 낙천적이고 유연한 성격 덕분에 차츰 자신만의 재능을 인정하고 받아들였고, 이제는 조국을 위해 마법을 은밀하게 사용하고 있다.`,
        image: require('../../assets/lol_hero_icons/Lux.png'),
        background_image: require('../../assets/lol_hero_icons/background/Lux.jpg'),
        stats: {"hp": 580, "hpperlevel": 99, "mp": 480, "mpperlevel": 23.5, "movespeed": 330, "armor": 21, "armorperlevel": 5.2, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 5.5, "hpregenperlevel": 0.55, "mpregen": 7, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 54, "attackdamageperlevel": 3.3, "attackspeedperlevel": 3, "attackspeed": 0.669},
        spells: [
            {
                id: 'passive',
                name: '광채',
                description: `럭스의 공격 스킬은 몇 초 동안 적을 빛의 에너지로 가득 채웁니다. 럭스의 기본 공격으로 이 에너지를 불태우면 적은 럭스의 레벨에 비례하는 추가 마법 피해를 받습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/LuxIlluminatingFraulein.png')
            },
            {
                id: 'LuxLightBinding',
                name: '빛의 속박',
                description: `럭스가 빛의 구를 발사하여 최대 2명의 적 유닛을 속박하며 피해를 입힙니다.`,
                cooldownBurn: '11/10.5/10/9.5/9',
                image: require('../../assets/lol_hero_icons/skills/LuxLightBinding.png')
            },
            {
                id: 'LuxPrismaticWave',
                name: '프리즘 보호막',
                description: `럭스가 마법봉을 던져 아군 주변의 빛을 구부리며 적의 공격으로부터 보호해줍니다.`,
                cooldownBurn: '14/13/12/11/10',
                image: require('../../assets/lol_hero_icons/skills/LuxPrismaticWave.png')
            },
            {
                id: 'LuxLightStrikeKugel',
                name: '광휘의 특이점',
                description: `지정한 지역에 뒤틀린 빛의 구체를 띄워 주변 적의 속도를 늦춥니다. 럭스는 이 빛을 폭발시켜 피해를 입힐 수 있습니다.`,
                cooldownBurn: '10/9.5/9/8.5/8',
                image: require('../../assets/lol_hero_icons/skills/LuxLightStrikeKugel.png')
            },
            {
                id: 'LuxR',
                name: '최후의 섬광',
                description: `럭스가 에너지를 모아 빛 기둥을 발사하며 목표 지역에 있는 모든 대상에게 피해를 입힙니다. 또한 이는 럭스의 기본 지속 효과 스킬을 발동시키고 광채 효과의 지속시간을 갱신합니다.`,
                cooldownBurn: '60/50/40',
                image: require('../../assets/lol_hero_icons/skills/LuxR.png')
            },
        ],
    },
    {
        numID: 77,
        id: 'Malphite_top_mid_sup',
        Key: '54',
        name: '말파이트',
        title: '거석의 파편',
        lore: `암석으로 이루어진 거대한 자연물 말파이트는 혼란스러운 세상에 평화로운 질서를 가져오기 위해 노력하고 있다. 말파이트는 원래 다른 세계에서 '거석'이라 불리는 돌기둥의 일부이자 거석을 지키는 파수꾼으로 태어났으며, 막강한 자연의 힘으로 거석을 보호하려 했으나 실패하고 말았다. 거석이 파괴된 후, 유일하게 살아남은 말파이트는 이제 룬테라의 물렁물렁한 생명체와 그들의 변덕스러운 성미를 참아내며 마지막 생존자에게 어울리는 새로운 임무를 찾고 있다.`,
        blurb: `암석으로 이루어진 거대한 자연물 말파이트는 혼란스러운 세상에 평화로운 질서를 가져오기 위해 노력하고 있다. 말파이트는 원래 다른 세계에서 '거석'이라 불리는 돌기둥의 일부이자 거석을 지키는 파수꾼으로 태어났으며, 막강한 자연의 힘으로 거석을 보호하려 했으나 실패하고 말았다. 거석이 파괴된 후, 유일하게 살아남은 말파이트는 이제 룬테라의 물렁물렁한 생명체와 그들의 변덕스러운 성미를 참아내며 마지막 생존자에게 어울리는 새로운 임무를 찾고 있다.`,
        image: require('../../assets/lol_hero_icons/Malphite.png'),
        background_image: require('../../assets/lol_hero_icons/background/Malphite.jpg'),
        stats: {"hp": 644, "hpperlevel": 104, "mp": 280, "mpperlevel": 60, "movespeed": 335, "armor": 37, "armorperlevel": 4.95, "spellblock": 28, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 7, "hpregenperlevel": 0.55, "mpregen": 7.3, "mpregenperlevel": 0.55, "crit": 0, "critperlevel": 0, "attackdamage": 62, "attackdamageperlevel": 4, "attackspeedperlevel": 3.4, "attackspeed": 0.736},
        spells: [
            {
                id: 'passive',
                name: '화강암 방패',
                description: `말파이트는 여러 겹의 돌로 감싸여 있어 자신의 최대 체력 10%만큼의 피해를 흡수할 수 있습니다. 말파이트가 몇 초 동안 공격 받지 않으면 보호막이 재생성됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Malphite_GraniteShield.png')
            },
            {
                id: 'SeismicShard',
                name: '지진의 파편',
                description: `말파이트가 땅을 통해 대지의 조각을 날려 피해를 입히며 3초 동안 이동 속도를 훔칩니다.`,
                cooldownBurn: '8',
                image: require('../../assets/lol_hero_icons/skills/SeismicShard.png')
            },
            {
                id: 'Obduracy',
                name: '천둥소리',
                description: `말파이트가 굉음을 내며 공격합니다. 이후 수 초 동안 말파이트의 공격이 전방에 여진을 일으킵니다.`,
                cooldownBurn: '10/9.5/9/8.5/8',
                image: require('../../assets/lol_hero_icons/skills/Obduracy.png')
            },
            {
                id: 'Landslide',
                name: '지면 강타',
                description: `말파이트가 땅을 내리쳐 충격파를 만들어 냅니다. 충격파는 말파이트 방어력의 일부에 해당하는 마법 피해를 입히며, 이에 맞은 적은 잠시 동안 공격 속도가 감소합니다.`,
                cooldownBurn: '7',
                image: require('../../assets/lol_hero_icons/skills/Landslide.png')
            },
            {
                id: 'UFSlash',
                name: '멈출 수 없는 힘',
                description: `말파이트가 목표 위치로 돌진하여 적에게 피해를 입히고 공중으로 띄워 올립니다.`,
                cooldownBurn: '130/105/80',
                image: require('../../assets/lol_hero_icons/skills/UFSlash.png')
            },
        ],
    },
    {
        numID: 78,
        id: 'Malzahar_mid',
        Key: '90',
        name: '말자하',
        title: '공허의 예언자',
        lore: `말자하는 모든 생명체를 하나로 결합시키겠다는 사명에 전심전력을 바치는 예언자다. 그는 근래 룬테라를 덮치기 시작한 공허야말로 룬테라를 구원하는 길이라고 진심으로 믿고 있다. 모래 가득한 슈리마의 황무지에서, 말자하는 머릿속에서 울리는 속삭임이 이끄는 대로 따라간 끝에 이케시아에 다다랐다. 이제는 폐허가 되어버린 이케시아 한가운데에서 그는 공허의 어두운 심장부를 들여다보았고, 새로운 힘과 목적을 부여받았다. 이제 말자하는 자신을 목자로 칭한다. 그에게 주어진 힘으로 인간을 공허라는 우리 안으로 인도할 수도 있고, 아니면 땅밑에서 우글거리는 공허충을 이 세계에 풀어놓을 수도 있기에.`,
        blurb: `말자하는 모든 생명체를 하나로 결합시키겠다는 사명에 전심전력을 바치는 예언자다. 그는 근래 룬테라를 덮치기 시작한 공허야말로 룬테라를 구원하는 길이라고 진심으로 믿고 있다. 모래 가득한 슈리마의 황무지에서, 말자하는 머릿속에서 울리는 속삭임이 이끄는 대로 따라간 끝에 이케시아에 다다랐다. 이제는 폐허가 되어버린 이케시아 한가운데에서 그는 공허의 어두운 심장부를 들여다보았고, 새로운 힘과 목적을 부여받았다. 이제 말자하는 자신을 목자로 칭한다. 그에게...`,
        image: require('../../assets/lol_hero_icons/Malzahar.png'),
        background_image: require('../../assets/lol_hero_icons/background/Malzahar.jpg'),
        stats: {"hp": 580, "hpperlevel": 101, "mp": 375, "mpperlevel": 28, "movespeed": 335, "armor": 18, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 500, "hpregen": 6, "hpregenperlevel": 0.6, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 55, "attackdamageperlevel": 3, "attackspeedperlevel": 1.5, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '공허 태세',
                description: `일정 시간 동안 군중 제어기에 적중당하거나 피해를 입지 않으면 받는 피해량이 큰 폭으로 감소하고 군중 제어기에 면역이 됩니다. 이 효과는 피해를 입거나 군중 제어기에 적중당하면 잠시 후 사라집니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Malzahar_Passive.png')
            },
            {
                id: 'MalzaharQ',
                name: '공허의 부름',
                description: `말자하가 공허로 이어지는 두 개의 문을 엽니다. 얼마 뒤 문에서 투사체가 발사되어 적에게 마법 피해를 입히고 침묵 효과를 부여합니다.`,
                cooldownBurn: '6',
                image: require('../../assets/lol_hero_icons/skills/MalzaharQ.png')
            },
            {
                id: 'MalzaharW',
                name: '공허의 무리',
                description: `말자하가 공허충을 소환해 주변 적을 공격하게 합니다.`,
                cooldownBurn: '8',
                image: require('../../assets/lol_hero_icons/skills/MalzaharW.png')
            },
            {
                id: 'MalzaharE',
                name: '재앙의 환상',
                description: `말자하가 대상의 머릿속에 최후의 광경을 보여주며 지속적으로 피해를 입힙니다. 말자하가 대상에게 다른 스킬을 사용하면 환상의 지속시간이 초기화됩니다.이 동안 대상이 쓰러지면 환상은 주변 적에게 옮겨가고, 말자하는 마나를 획득합니다. 말자하의 공허충은 환상으로 오염된 대상에게 몰려갑니다.`,
                cooldownBurn: '11/10/9/8/7',
                image: require('../../assets/lol_hero_icons/skills/MalzaharE.png')
            },
            {
                id: 'MalzaharR',
                name: '황천의 손아귀',
                description: `말자하가 공허의 정수를 쏟아부어 적 챔피언을 제압하고 지대를 생성해 내부의 적에게 피해를 입힙니다.`,
                cooldownBurn: '140/110/80',
                image: require('../../assets/lol_hero_icons/skills/MalzaharR.png')
            },
        ],
    },
    {
        numID: 79,
        id: 'Maokai_sup',
        Key: '57',
        name: '마오카이',
        title: '뒤틀린 나무 정령',
        lore: `거대한 나무 정령 마오카이는 분노에 휩싸여 그림자 군도의 초자연적인 언데드와 싸운다. 마법에 의한 대격변으로 고향이 파괴되었을 때 그는 자신의 나무 심장에 스며 있는 생명의 정수로 언데드의 상태는 모면했지만 형체가 뒤틀린 복수의 화신이 되었다. 한 때는 평화를 사랑하는 자연의 정령이었으나 이제 그는 그림자 군도를 뒤덮은 언데드를 몰아내고 아름답던 고향의 옛 모습을 되찾기 위해 맹렬하게 싸운다.`,
        blurb: `거대한 나무 정령 마오카이는 분노에 휩싸여 그림자 군도의 초자연적인 언데드와 싸운다. 마법에 의한 대격변으로 고향이 파괴되었을 때 그는 자신의 나무 심장에 스며 있는 생명의 정수로 언데드의 상태는 모면했지만 형체가 뒤틀린 복수의 화신이 되었다. 한 때는 평화를 사랑하는 자연의 정령이었으나 이제 그는 그림자 군도를 뒤덮은 언데드를 몰아내고 아름답던 고향의 옛 모습을 되찾기 위해 맹렬하게 싸운다.`,
        image: require('../../assets/lol_hero_icons/Maokai.png'),
        background_image: require('../../assets/lol_hero_icons/background/Maokai.jpg'),
        stats: {"hp": 635, "hpperlevel": 109, "mp": 375, "mpperlevel": 43, "movespeed": 330, "armor": 35, "armorperlevel": 5.2, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 5, "hpregenperlevel": 0.75, "mpregen": 6, "mpregenperlevel": 0.6, "crit": 0, "critperlevel": 0, "attackdamage": 64, "attackdamageperlevel": 3.3, "attackspeedperlevel": 2.125, "attackspeed": 0.8},
        spells: [
            {
                id: 'passive',
                name: '마법 흡수',
                description: `마오카이는 기본 지속 효과로 기본 공격 시 체력을 회복하고 추가 피해를 입힙니다. 적 스킬에 맞거나 직접 스킬을 사용하면 기본 지속 효과의 재사용 대기시간이 감소합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Maokai_Passive.png')
            },
            {
                id: 'MaokaiQ',
                name: '덤불 주먹',
                description: `마오카이가 충격파를 일으켜 근처의 적을 뒤로 날려버리고 마법 피해를 입히며 둔화시킵니다.`,
                cooldownBurn: '7/6.5/6/5.5/5',
                image: require('../../assets/lol_hero_icons/skills/MaokaiQ.png')
            },
            {
                id: 'MaokaiW',
                name: '뒤틀린 전진',
                description: `마오카이가 움직이는 뿌리 덩어리로 변신해 대상에게 도약해 속박합니다. 이때 마오카이는 대상으로 지정할 수 없습니다.`,
                cooldownBurn: '14/13/12/11/10',
                image: require('../../assets/lol_hero_icons/skills/MaokaiW.png')
            },
            {
                id: 'MaokaiE',
                name: '묘목 던지기',
                description: `마오카이가 묘목을 던져 해당 지역을 감시하게 합니다. 수풀에서는 효과가 향상됩니다.`,
                cooldownBurn: '18/17/16/15/14',
                image: require('../../assets/lol_hero_icons/skills/MaokaiE.png')
            },
            {
                id: 'MaokaiR',
                name: '대자연의 마수',
                description: `마오카이가 나뭇가지와 가시로 된 거대 벽을 소환합니다. 벽은 천천히 전진하며 벽에 닿은 적에게 피해를 입히고 속박합니다.`,
                cooldownBurn: '130/110/90',
                image: require('../../assets/lol_hero_icons/skills/MaokaiR.png')
            },
        ],
    },
    {
        numID: 80,
        id: 'MasterYi_mid_jug',
        Key: '11',
        name: '마스터 이',
        title: '우주 검사',
        lore: `마스터 이는 수련을 통해 심신을 갈고 닦아, 마침내 생각과 행동이 일치하는 경지에 이르렀다. 최후의 수단으로 무력을 사용할 것을 결심하기는 했지만, 마스터 이는 품위 있고 빠른 검 놀림으로 자신의 결단을 언제나 빠르게 수행했다. 아이오니아의 우주류 검술의 살아있는 마지막 전승자인 마스터 이는 자신의 '통찰의 칠안경'과 함께 제자가 되려는 후보자 중 가장 적합한 자를 꼼꼼히 조사하는 등 고향의 유산을 이어가는 데에 일생을 바친다.`,
        blurb: `마스터 이는 수련을 통해 심신을 갈고 닦아, 마침내 생각과 행동이 일치하는 경지에 이르렀다. 최후의 수단으로 무력을 사용할 것을 결심하기는 했지만, 마스터 이는 품위 있고 빠른 검 놀림으로 자신의 결단을 언제나 빠르게 수행했다. 아이오니아의 우주류 검술의 살아있는 마지막 전승자인 마스터 이는 자신의 '통찰의 칠안경'과 함께 제자가 되려는 후보자 중 가장 적합한 자를 꼼꼼히 조사하는 등 고향의 유산을 이어가는 데에 일생을 바친다.`,
        image: require('../../assets/lol_hero_icons/MasterYi.png'),
        background_image: require('../../assets/lol_hero_icons/background/MasterYi.jpg'),
        stats: {"hp": 669, "hpperlevel": 105, "mp": 251, "mpperlevel": 42, "movespeed": 355, "armor": 33, "armorperlevel": 4.7, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 7.5, "hpregenperlevel": 0.65, "mpregen": 7.25, "mpregenperlevel": 0.45, "crit": 0, "critperlevel": 0, "attackdamage": 65, "attackdamageperlevel": 2.5, "attackspeedperlevel": 2.5, "attackspeed": 0.679},
        spells: [
            {
                id: 'passive',
                name: '2연속 공격',
                description: `마스터 이는 몇 차례 연속으로 기본 공격을 한 이후에 2번 연속 공격합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/MasterYi_Passive1.png')
            },
            {
                id: 'AlphaStrike',
                name: '일격 필살',
                description: `마스터 이가 전장을 순식간에 가로질러 여러 명의 적 유닛에게 물리 피해를 입히며, 그동안 대상으로 지정할 수 없는 상태가 됩니다. 일격 필살은 치명타가 발동하며 몬스터에게 추가 물리 피해를 입힐 수 있습니다. 기본 공격을 하면 일격 필살의 재사용 대기시간이 감소합니다.`,
                cooldownBurn: '20/19.5/19/18.5/18',
                image: require('../../assets/lol_hero_icons/skills/AlphaStrike.png')
            },
            {
                id: 'Meditate',
                name: '명상',
                description: `마스터 이가 정신을 집중하며 체력을 회복해, 짧은 시간 동안 받는 피해량이 감소합니다. 정신을 집중하는 동안 매초 2연속 공격 중첩을 얻고 최후의 전사와 우주류 검술의 남은 지속시간이 일시 정지됩니다.`,
                cooldownBurn: '10',
                image: require('../../assets/lol_hero_icons/skills/Meditate.png')
            },
            {
                id: 'WujuStyle',
                name: '우주류 검술',
                description: `기본 공격에 추가 고정 피해가 적용됩니다.`,
                cooldownBurn: '14',
                image: require('../../assets/lol_hero_icons/skills/WujuStyle.png')
            },
            {
                id: 'Highlander',
                name: '최후의 전사',
                description: `마스터 이가 엄청난 속도로 이동하며 순간적으로 자신의 이동 속도와 공격 속도를 높이고 모든 둔화 효과에 대해 면역이 됩니다. 스킬이 활성화된 동안 적 챔피언을 처치하거나 어시스트를 올리면 최후의 전사 지속시간이 늘어납니다. 적 챔피언을 처치하거나 어시스트를 올리면 기본 지속 효과로 다른 스킬들의 재사용 대기시간이 감소합니다.`,
                cooldownBurn: '85',
                image: require('../../assets/lol_hero_icons/skills/Highlander.png')
            },
        ],
    },
    {
        numID: 81,
        id: 'Milio_sup',
        Key: '902',
        name: '밀리오',
        title: '온화한 불꽃',
        lore: `밀리오는 이쉬탈 출신의 마음 따뜻한 소년으로, 어린 나이에 불의 액시옴을 숙달하고 '치유의 불꽃'이라는 새로운 능력을 발견했다. 그리고 자신의 할머니가 그랬듯, 이 새로운 능력을 활용해 윤 탈에 들어가서 가족의 옛 영광을 되찾으려고 한다. 이쉬탈 전역의 정글을 여행하며 결국 수도 이샤오칸에 도착한 밀리오는 윤 탈에 들어가기 위해 비달리온을 준비한다. 어떤 고난과 위험이 자신을 기다리는지 모르는 채로.`,
        blurb: `밀리오는 이쉬탈 출신의 마음 따뜻한 소년으로, 어린 나이에 불의 액시옴을 숙달하고 '치유의 불꽃'이라는 새로운 능력을 발견했다. 그리고 자신의 할머니가 그랬듯, 이 새로운 능력을 활용해 윤 탈에 들어가서 가족의 옛 영광을 되찾으려고 한다. 이쉬탈 전역의 정글을 여행하며 결국 수도 이샤오칸에 도착한 밀리오는 윤 탈에 들어가기 위해 비달리온을 준비한다. 어떤 고난과 위험이 자신을 기다리는지 모르는 채로.`,
        image: require('../../assets/lol_hero_icons/Milio.png'),
        background_image: require('../../assets/lol_hero_icons/background/Milio.jpg'),
        stats: {"hp": 560, "hpperlevel": 88, "mp": 365, "mpperlevel": 43, "movespeed": 330, "armor": 26, "armorperlevel": 4.6, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 525, "hpregen": 5, "hpregenperlevel": 0.5, "mpregen": 11.5, "mpregenperlevel": 0.4, "crit": 0, "critperlevel": 0, "attackdamage": 48, "attackdamageperlevel": 3.2, "attackspeedperlevel": 3, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '타오르는 힘',
                description: `밀리오의 스킬에 닿은 아군은 다음 공격으로 큰 추가 피해를 입히고 대상을 불태웁니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Milio_P.png')
            },
            {
                id: 'MilioQ',
                name: '초특급 불꽃 킥',
                description: `적을 밀쳐내는 공을 걷어찹니다. 적중한 공은 위로 날아가 적을 향해 떨어지며 충돌한 영역 주변에 있는 적들에게 피해를 입히고 둔화시킵니다.`,
                cooldownBurn: '10',
                image: require('../../assets/lol_hero_icons/skills/MilioQ.png')
            },
            {
                id: 'MilioW',
                name: '아늑한 모닥불',
                description: `아군을 회복시키고 공격 사거리를 증가시키는 구역을 만듭니다. 이 구역은 스킬을 사용한 지점에서 가장 가까운 아군을 따라다닙니다.`,
                cooldownBurn: '29/27/25/23/21',
                image: require('../../assets/lol_hero_icons/skills/MilioW.png')
            },
            {
                id: 'MilioE',
                name: '따스한 포옹',
                description: `아군 한 명에게 보호막을 부여해 잠시 동안 이동 속도를 높여줍니다. 이 스킬은 2회까지 충전됩니다.`,
                cooldownBurn: '0.5',
                image: require('../../assets/lol_hero_icons/skills/MilioE.png')
            },
            {
                id: 'MilioR',
                name: '생명의 온기',
                description: `치유의 불꽃을 보내 범위 내 아군의 체력을 회복시키고 군중 제어 효과를 제거합니다.`,
                cooldownBurn: '160/145/130',
                image: require('../../assets/lol_hero_icons/skills/MilioR.png')
            },
        ],
    },
    {
        numID: 82,
        id: 'MissFortune_adc_sup',
        Key: '21',
        name: '미스 포츈',
        title: '현상금 사냥꾼',
        lore: `빌지워터의 선장 사라 포츈은 미모로도 유명하지만 무자비한 일처리 때문에 공포의 대상이기도 하다. 틀로 찍어낸 듯 똑같은 빌지워터의 범죄자들 사이에서 그녀는 단연 돋보이는 존재다. 어릴 적 자신의 가족이 해적왕 갱플랭크에게 살해당하는 것을 목격했고, 세월이 흐른 후 갱플랭크가 타고 있던 기함을 불태우는 것으로 잔혹한 복수극을 완성했다. 사라 포츈을 과소평가했다가는 그 매력에 가려진 예측불허의 실력에 기겁을 하거나... 배에 총알 구멍이 날 수도 있다.`,
        blurb: `빌지워터의 선장 사라 포츈은 미모로도 유명하지만 무자비한 일처리 때문에 공포의 대상이기도 하다. 틀로 찍어낸 듯 똑같은 빌지워터의 범죄자들 사이에서 그녀는 단연 돋보이는 존재다. 어릴 적 자신의 가족이 해적왕 갱플랭크에게 살해당하는 것을 목격했고, 세월이 흐른 후 갱플랭크가 타고 있던 기함을 불태우는 것으로 잔혹한 복수극을 완성했다. 사라 포츈을 과소평가했다가는 그 매력에 가려진 예측불허의 실력에 기겁을 하거나... 배에 총알 구멍이 날 수도 있다.`,
        image: require('../../assets/lol_hero_icons/MissFortune.png'),
        background_image: require('../../assets/lol_hero_icons/background/MissFortune.jpg'),
        stats: {"hp": 640, "hpperlevel": 103, "mp": 300, "mpperlevel": 40, "movespeed": 325, "armor": 28, "armorperlevel": 4.2, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 3.75, "hpregenperlevel": 0.65, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 53, "attackdamageperlevel": 2.4, "attackspeedperlevel": 3, "attackspeed": 0.656},
        spells: [
            {
                id: 'passive',
                name: '사랑의 한 방',
                description: `미스 포츈은 새로운 대상에게 기본 공격을 가할 때마다 추가 물리 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/MissFortune_W.png')
            },
            {
                id: 'MissFortuneRicochetShot',
                name: '한 발에 두 놈',
                description: `미스 포츈이 하나의 대상에게 총알을 쏘아 대상과 대상 뒤에 있는 적에게 피해를 입힙니다. 두 번 모두에 사랑의 한 방이 적용될 수 있습니다.`,
                cooldownBurn: '7/6/5/4/3',
                image: require('../../assets/lol_hero_icons/skills/MissFortuneRicochetShot.png')
            },
            {
                id: 'MissFortuneViciousStrikes',
                name: '활보',
                description: `미스 포츈은 얼마 동안 피해를 입지 않으면 이동 속도가 점점 올라갑니다. 이 스킬을 활성화하면 잠깐 동안 미스 포츈의 공격 속도가 높아집니다. 재사용 대기 중일 때는 사랑의 한 방을 활용해 활보의 재사용 대기시간을 줄일 수 있습니다.`,
                cooldownBurn: '12',
                image: require('../../assets/lol_hero_icons/skills/MissFortuneViciousStrikes.png')
            },
            {
                id: 'MissFortuneScattershot',
                name: '총알은 비를 타고',
                description: `미스 포츈이 총알을 퍼부어 지정 지역의 시야를 밝힙니다. 해당 위치에 있는 적은 여러 차례 피해를 입고 이동 속도가 느려집니다.`,
                cooldownBurn: '18/17/16/15/14',
                image: require('../../assets/lol_hero_icons/skills/MissFortuneScattershot.png')
            },
            {
                id: 'MissFortuneBulletTime',
                name: '쌍권총 난사',
                description: `미스 포츈이 정면에 원뿔 형태로 수백 발의 총알을 난사해 적에게 대량의 피해를 입힙니다. 쌍권총 난사는 매회 발사 시 각각 치명타가 적용될 수 있습니다.`,
                cooldownBurn: '120/110/100',
                image: require('../../assets/lol_hero_icons/skills/MissFortuneBulletTime.png')
            },
        ],
    },
    {
        numID: 83,
        id: 'MonkeyKing_top_jug',
        Key: '62',
        name: '오공',
        title: '원숭이 왕',
        lore: `오공은 바스타야로, 자신의 뛰어난 힘, 민첩성과 지혜로 상대방을 혼란에 빠뜨려 유리한 고지를 차지하는 악동이다. 마스터 이로 알려진 평생지기를 찾은 뒤, 오공은 우주류로 알려진 고대 무술의 마지막 제자가 되었다. 마법봉으로 무장한 오공은 아이오니아의 파멸을 막고자 한다.`,
        blurb: `오공은 바스타야로, 자신의 뛰어난 힘, 민첩성과 지혜로 상대방을 혼란에 빠뜨려 유리한 고지를 차지하는 악동이다. 마스터 이로 알려진 평생지기를 찾은 뒤, 오공은 우주류로 알려진 고대 무술의 마지막 제자가 되었다. 마법봉으로 무장한 오공은 아이오니아의 파멸을 막고자 한다.`,
        image: require('../../assets/lol_hero_icons/MonkeyKing.png'),
        background_image: require('../../assets/lol_hero_icons/background/MonkeyKing.jpg'),
        stats: {"hp": 610, "hpperlevel": 99, "mp": 300, "mpperlevel": 65, "movespeed": 340, "armor": 31, "armorperlevel": 4.7, "spellblock": 28, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 3.5, "hpregenperlevel": 0.65, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 66, "attackdamageperlevel": 3.5, "attackspeedperlevel": 3, "attackspeed": 0.69},
        spells: [
            {
                id: 'passive',
                name: '바위 피부',
                description: `오공이 챔피언 및 몬스터와 싸우는 동안 방어력이 점점 높아지며 최대 체력 재생 효과를 얻습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/MonkeyKingStoneSkin.png')
            },
            {
                id: 'MonkeyKingDoubleAttack',
                name: '파쇄격',
                description: `오공의 다음 공격 사거리가 증가하고 추가 피해를 입히며 맞은 대상의 방어력이 몇 초 동안 낮아집니다.`,
                cooldownBurn: '8/7.5/7/6.5/6',
                image: require('../../assets/lol_hero_icons/skills/MonkeyKingDoubleAttack.png')
            },
            {
                id: 'MonkeyKingDecoy',
                name: '분신 전사',
                description: `오공이 잠깐 동안 투명 상태가 되고 지정한 방향으로 돌진하며 근처 적을 공격하는 분신을 남깁니다.`,
                cooldownBurn: '22/20/18/16/14',
                image: require('../../assets/lol_hero_icons/skills/MonkeyKingDecoy.png')
            },
            {
                id: 'MonkeyKingNimbus',
                name: '근두운 급습',
                description: `오공이 대상에게 돌격하는 동시에 자신의 분신을 만들어 대상 근처에 있는 적들에게 추가 공격을 하여 피해를 줍니다.`,
                cooldownBurn: '10/9.25/8.5/7.75/7',
                image: require('../../assets/lol_hero_icons/skills/MonkeyKingNimbus.png')
            },
            {
                id: 'MonkeyKingSpinToWin',
                name: '회전격',
                description: `오공이 여의봉을 늘린 후 빙빙 휘두르며 이동 속도가 증가합니다.적중당한 적은 피해를 입고 공중에 떠오릅니다.`,
                cooldownBurn: '130/110/90',
                image: require('../../assets/lol_hero_icons/skills/MonkeyKingSpinToWin.png')
            },
        ],
    },
    {
        numID: 84,
        id: 'Mordekaiser',
        Key: '82',
        name: '모데카이저',
        title: '강철의 망령',
        lore: `이미 두 번이나 죽었지만 세 번째로 되살아난 모데카이저는 옛 시대의 잔혹한 군주로서 강령술을 사용해 영혼들을 영원한 노예로 만듭니다. 지금은 그의 정복 활동을 기억하거나, 그의 진정한 힘을 아는 이는 거의 없습니다. 하지만 모데카이저에 대해 잘 아는 일부 고대인들은 그가 다시 돌아와 산 자와 죽은 자 모두를 지배할 날이 도래할까 봐 두려워합니다.`,
        blurb: `이미 두 번이나 죽었지만 세 번째로 되살아난 모데카이저는 옛 시대의 잔혹한 군주로서 강령술을 사용해 영혼들을 영원한 노예로 만듭니다. 지금은 그의 정복 활동을 기억하거나, 그의 진정한 힘을 아는 이는 거의 없습니다. 하지만 모데카이저에 대해 잘 아는 일부 고대인들은 그가 다시 돌아와 산 자와 죽은 자 모두를 지배할 날이 도래할까 봐 두려워합니다.`,
        image: require('../../assets/lol_hero_icons/Mordekaiser.png'),
        background_image: require('../../assets/lol_hero_icons/background/Mordekaiser.jpg'),
        stats: {"hp": 645, "hpperlevel": 104, "mp": 100, "mpperlevel": 0, "movespeed": 335, "armor": 37, "armorperlevel": 4.2, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 5, "hpregenperlevel": 0.75, "mpregen": 0, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 61, "attackdamageperlevel": 4, "attackspeedperlevel": 1, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '암흑 탄생',
                description: `모데카이저가 적 챔피언이나 몬스터에게 공격 또는 스킬을 3회 적중시키면 강력한 피해를 입히는 오오라를 얻고 이동 속도가 증가합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/MordekaiserPassive.png')
            },
            {
                id: 'MordekaiserQ',
                name: '말살',
                description: `모데카이저가 땅에 철퇴를 내리쳐 적중시킨 적에게 각각 피해를 입힙니다. 단일 대상에게 적중 시 피해량이 증가합니다.`,
                cooldownBurn: '8/7/6/5/4',
                image: require('../../assets/lol_hero_icons/skills/MordekaiserQ.png')
            },
            {
                id: 'MordekaiserW',
                name: '불멸',
                description: `모데카이저가 입히거나 받는 피해를 흡수하여 보호막을 충전합니다. 보호막을 소모하여 체력을 회복할 수 있습니다.`,
                cooldownBurn: '12/11/10/9/8',
                image: require('../../assets/lol_hero_icons/skills/MordekaiserW.png')
            },
            {
                id: 'MordekaiserE',
                name: '죽음의 손아귀',
                description: `모데카이저가 일정 지역에 있는 모든 적을 끌어당깁니다.`,
                cooldownBurn: '18/16/14/12/10',
                image: require('../../assets/lol_hero_icons/skills/MordekaiserE.png')
            },
            {
                id: 'MordekaiserR',
                name: '죽음의 세계',
                description: `모데카이저가 대상을 다른 차원으로 끌고 가 능력치의 일부를 훔칩니다. 처치 시 적이 부활할 때까지 훔친 능력치가 유지됩니다.`,
                cooldownBurn: '140/120/100',
                image: require('../../assets/lol_hero_icons/skills/MordekaiserR.png')
            },
        ],
    },
    {
        numID: 85,
        id: 'Morgana_sup_jug',
        Key: '25',
        name: '모르가나',
        title: '타락한 자',
        lore: `천상의 힘과 필멸의 육신 사이에서 고뇌하던 모르가나는 자신의 날개를 묶고 다시 인간의 삶을 살면서 부정하고 타락한 자들을 벌한다. 그녀는 데마시아의 부당한 법과 전통을 거부하며, 왕국의 그림자 속에서 암흑 불꽃으로 만든 방패와 사슬로 진실을 억압하려는 자들에 맞서 싸운다. 추방당하고 버림받은 자라고 해도 언젠가 다시 돌아올 수 있다고 믿기 때문이다.`,
        blurb: `천상의 힘과 필멸의 육신 사이에서 고뇌하던 모르가나는 자신의 날개를 묶고 다시 인간의 삶을 살면서 부정하고 타락한 자들을 벌한다. 그녀는 데마시아의 부당한 법과 전통을 거부하며, 왕국의 그림자 속에서 암흑 불꽃으로 만든 방패와 사슬로 진실을 억압하려는 자들에 맞서 싸운다. 추방당하고 버림받은 자라고 해도 언젠가 다시 돌아올 수 있다고 믿기 때문이다.`,
        image: require('../../assets/lol_hero_icons/Morgana.png'),
        background_image: require('../../assets/lol_hero_icons/background/Morgana.jpg'),
        stats: {"hp": 630, "hpperlevel": 104, "mp": 340, "mpperlevel": 60, "movespeed": 335, "armor": 25, "armorperlevel": 5, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 450, "hpregen": 5.5, "hpregenperlevel": 0.4, "mpregen": 11, "mpregenperlevel": 0.4, "crit": 0, "critperlevel": 0, "attackdamage": 56, "attackdamageperlevel": 3.5, "attackspeedperlevel": 1.53, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '영혼 흡수',
                description: `모르가나가 적의 영혼을 흡수하여 챔피언, 대형 미니언, 중형 및 대형 정글 몬스터에게 피해를 입힐 때 체력을 회복합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/FallenAngel_Empathize.png')
            },
            {
                id: 'MorganaQ',
                name: '어둠의 속박',
                description: `모르가나가 흑마법으로 적을 제자리에 속박하고 적이 유발한 고통을 스스로 느끼게 하여 마법 피해를 입힙니다. `,
                cooldownBurn: '10',
                image: require('../../assets/lol_hero_icons/skills/MorganaQ.png')
            },
            {
                id: 'MorganaW',
                name: '고통의 그림자',
                description: `모르가나가 대상 지역에 저주받은 그림자를 펼쳐 검은 원 안에 서 있는 적에게 피해를 입힙니다. 대상은 자신이 잃은 체력에 비례하는 마법 피해를 지속적으로 입습니다.`,
                cooldownBurn: '12',
                image: require('../../assets/lol_hero_icons/skills/MorganaW.png')
            },
            {
                id: 'MorganaE',
                name: '칠흑의 방패',
                description: `모르가나가 아군에게 별의 화염이 깃든 보호막을 칩니다. 보호막은 깨질 때까지 마법 피해와 방해 효과를 흡수합니다.`,
                cooldownBurn: '26/23.5/21/18.5/16',
                image: require('../../assets/lol_hero_icons/skills/MorganaE.png')
            },
            {
                id: 'MorganaR',
                name: '영혼의 족쇄',
                description: `모르가나가 날개를 펼치며 천상의 힘을 완전히 해방하여 땅 위로 날아오르고 주변 적 챔피언에게 검은 고통의 사슬을 날립니다. 모르가나의 이동 속도가 증가합니다. 사슬은 이동 속도를 늦추고 처음에 피해를 입히며 시간이 지난 후에도 사슬을 벗어나지 못하는 적을 기절시킵니다.`,
                cooldownBurn: '120/110/100',
                image: require('../../assets/lol_hero_icons/skills/MorganaR.png')
            },
        ],
    },
    {
        numID: 86,
        id: 'Naafiri_mid',
        Key: '950',
        name: '나피리',
        title: '백 번 무는 사냥개',
        lore: `오늘도 슈리마 사막에는 우렁찬 포효가 합창곡처럼 울려 퍼진다. 게걸스러운 포식자인 모래 언덕의 사냥개들이 이 황량한 땅에서 무리지어 사냥할 권리를 두고 싸우며 울부짖는 소리다. 그중 정점에 오른 무리가 있다. 사냥개의 본능이 아니라, 고대 다르킨의 힘을 품고 움직이는 무리 말이다.`,
        blurb: `오늘도 슈리마 사막에는 우렁찬 포효가 합창곡처럼 울려 퍼진다. 게걸스러운 포식자인 모래 언덕의 사냥개들이 이 황량한 땅에서 무리지어 사냥할 권리를 두고 싸우며 울부짖는 소리다. 그중 정점에 오른 무리가 있다. 사냥개의 본능이 아니라, 고대 다르킨의 힘을 품고 움직이는 무리 말이다.`,
        image: require('../../assets/lol_hero_icons/Naafiri.png'),
        background_image: require('../../assets/lol_hero_icons/background/Naafiri.jpg'),
        stats: {"hp": 635, "hpperlevel": 120, "mp": 400, "mpperlevel": 55, "movespeed": 340, "armor": 30, "armorperlevel": 4.7, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 9, "hpregenperlevel": 0.9, "mpregen": 7.5, "mpregenperlevel": 1, "crit": 0, "critperlevel": 0, "attackdamage": 55, "attackdamageperlevel": 2.1, "attackspeedperlevel": 2.1, "attackspeed": 0.663},
        spells: [
            {
                id: 'passive',
                name: '늘어나는 무리',
                description: `나피리가 자신이 공격하거나 스킬을 사용하는 대상을 함께 공격하는 무리를 소환합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Icons_Naafiri_P.png')
            },
            {
                id: 'NaafiriQ',
                name: '다르킨 단검',
                description: `나피리가 최대 두 개의 단검을 던져 각 단검으로 출혈을 일으킵니다. 대상이 이미 출혈 상태라면 그 대신 추가 피해를 입힙니다.무리가 이 스킬에 적중당한 챔피언을 향해 도약해 공격합니다.`,
                cooldownBurn: '9/8.5/8/7.5/7',
                image: require('../../assets/lol_hero_icons/skills/NaafiriQ.png')
            },
            {
                id: 'NaafiriW',
                name: '사냥개의 추적',
                description: `나피리와 무리가 적에게 돌진해 처음 충돌한 챔피언에게 피해를 입힙니다.`,
                cooldownBurn: '22/20/18/16/14',
                image: require('../../assets/lol_hero_icons/skills/NaafiriW.png')
            },
            {
                id: 'NaafiriE',
                name: '적출',
                description: `나피리가 돌진해 주변 적에게 피해를 입히고 무리를 다시 불러 체력을 최대로 회복시킵니다.`,
                cooldownBurn: '10/9.5/9/8.5/8',
                image: require('../../assets/lol_hero_icons/skills/NaafiriE.png')
            },
            {
                id: 'NaafiriR',
                name: '무리의 부름',
                description: `나피리가 무리를 강화하고 추가로 무리를 소환합니다. 즉시 이동 속도와 시야가 증가하며 처음으로 다른 챔피언을 적중시키면 보호막을 획득합니다.처음으로 다른 챔피언을 처치하면 모든 효과가 초기화됩니다.`,
                cooldownBurn: '120/110/100',
                image: require('../../assets/lol_hero_icons/skills/NaafiriR.png')
            },
        ],
    },
    {
        numID: 87,
        id: 'Nami_sup',
        Key: '267',
        name: '나미',
        title: '파도 소환사',
        lore: `나미는 바다에 사는 바스타야 종족으로, 어리지만 완고할 정도로 고집이 세다. 먼 옛날 타곤 인과 맺었던 약속이 깨지자, 마라이 종족으로는 처음으로 파도 치는 바다에서 나와 마른 육지로 모험을 떠났다. 달리 해결책이 없었기에, 자신의 종족을 안전하게 지켜주는 성스러운 의식을 완수한다는 임무를 자청한 것이었다. 새로운 시대는 혼란 그 자체지만, 나미는 용기와 결단력으로 불확실한 미래를 마주한다. 그녀의 무기는 바다의 힘을 소환하는 파도 소환사의 지팡이다.`,
        blurb: `나미는 바다에 사는 바스타야 종족으로, 어리지만 완고할 정도로 고집이 세다. 먼 옛날 타곤 인과 맺었던 약속이 깨지자, 마라이 종족으로는 처음으로 파도 치는 바다에서 나와 마른 육지로 모험을 떠났다. 달리 해결책이 없었기에, 자신의 종족을 안전하게 지켜주는 성스러운 의식을 완수한다는 임무를 자청한 것이었다. 새로운 시대는 혼란 그 자체지만, 나미는 용기와 결단력으로 불확실한 미래를 마주한다. 그녀의 무기는 바다의 힘을 소환하는 파도 소환사의 지팡이다.`,
        image: require('../../assets/lol_hero_icons/Nami.png'),
        background_image: require('../../assets/lol_hero_icons/background/Nami.jpg'),
        stats: {"hp": 560, "hpperlevel": 88, "mp": 365, "mpperlevel": 43, "movespeed": 335, "armor": 29, "armorperlevel": 5.2, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 5.5, "hpregenperlevel": 0.55, "mpregen": 11.5, "mpregenperlevel": 0.4, "crit": 0, "critperlevel": 0, "attackdamage": 54, "attackdamageperlevel": 3.1, "attackspeedperlevel": 2.61, "attackspeed": 0.644},
        spells: [
            {
                id: 'passive',
                name: '밀려오는 파도',
                description: `나미의 스킬에 맞은 아군 챔피언은 짧은 시간 동안 이동 속도가 상승합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/NamiPassive.png')
            },
            {
                id: 'NamiQ',
                name: '물의 감옥',
                description: `거대한 물방울을 지정한 위치로 발사해 물방울이 닿은 적에게 피해를 입히고 닿는 순간 기절시킵니다.`,
                cooldownBurn: '12/11/10/9/8',
                image: require('../../assets/lol_hero_icons/skills/NamiQ.png')
            },
            {
                id: 'NamiW',
                name: '밀물 썰물',
                description: `밀려드는 파도를 보내 아군 및 적 챔피언을 번갈아 맞히면서, 아군은 치유하고 적에게는 피해를 입힙니다.`,
                cooldownBurn: '10',
                image: require('../../assets/lol_hero_icons/skills/NamiW.png')
            },
            {
                id: 'NamiE',
                name: '파도 소환사의 축복',
                description: `잠시 동안 아군 챔피언들을 강화해, 기본 공격과 스킬 사용 시 추가 마법 피해를 입히고 대상에게 둔화를 걸 수 있게 만듭니다.`,
                cooldownBurn: '11',
                image: require('../../assets/lol_hero_icons/skills/NamiE.png')
            },
            {
                id: 'NamiR',
                name: '해일',
                description: `적들을 공중으로 띄우고 둔화를 걸면서 피해를 입히는 거대한 해일을 소환합니다. 여기에 맞은 아군은 밀려오는 파도의 효과를 두 배로 받습니다.`,
                cooldownBurn: '120/110/100',
                image: require('../../assets/lol_hero_icons/skills/NamiR.png')
            },
        ],
    },
    {
        numID: 88,
        id: 'Nasus_top_mid',
        Key: '75',
        name: '나서스',
        title: '사막의 관리자',
        lore: `자칼의 머리를 한 위풍당당한 반인반수 형상의 초월체 나서스는 고대 슈리마의 영웅적인 인물이었다. 날카로운 지력을 소유한 그는 지식의 수호자이자 최고의 전략가로서 수세기 동안 슈리마 제국을 번영으로 인도했다. 제국의 몰락 이후엔 칩거에 들어가 전설 속의 존재가 되었다. 하지만 슈리마의 고대 도시가 되살아나면서, 제국의 몰락이 다시는 일어나지 않도록 하겠다는 다짐과 함께 세상 밖으로 나왔다.`,
        blurb: `자칼의 머리를 한 위풍당당한 반인반수 형상의 초월체 나서스는 고대 슈리마의 영웅적인 인물이었다. 날카로운 지력을 소유한 그는 지식의 수호자이자 최고의 전략가로서 수세기 동안 슈리마 제국을 번영으로 인도했다. 제국의 몰락 이후엔 칩거에 들어가 전설 속의 존재가 되었다. 하지만 슈리마의 고대 도시가 되살아나면서, 제국의 몰락이 다시는 일어나지 않도록 하겠다는 다짐과 함께 세상 밖으로 나왔다.`,
        image: require('../../assets/lol_hero_icons/Nasus.png'),
        background_image: require('../../assets/lol_hero_icons/background/Nasus.jpg'),
        stats: {"hp": 631, "hpperlevel": 104, "mp": 326, "mpperlevel": 62, "movespeed": 350, "armor": 34, "armorperlevel": 4.7, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 9, "hpregenperlevel": 0.9, "mpregen": 7.45, "mpregenperlevel": 0.5, "crit": 0, "critperlevel": 0, "attackdamage": 67, "attackdamageperlevel": 4, "attackspeedperlevel": 3.48, "attackspeed": 0.638},
        spells: [
            {
                id: 'passive',
                name: '영혼의 포식자',
                description: `나서스는 적의 영혼을 흡수하여 생명력 흡수 효과를 얻습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Nasus_Passive.png')
            },
            {
                id: 'NasusQ',
                name: '흡수의 일격',
                description: `나서스가 적을 공격하여 피해를 입힙니다. 흡수의 일격으로 대상을 처치할 경우 흡수의 일격 스킬이 강화됩니다.`,
                cooldownBurn: '7.5/6.5/5.5/4.5/3.5',
                image: require('../../assets/lol_hero_icons/skills/NasusQ.png')
            },
            {
                id: 'NasusW',
                name: '쇠약',
                description: `나서스가 적 챔피언의 노화를 촉진시켜 이동 속도와 공격 속도를 점진적으로 늦춥니다.`,
                cooldownBurn: '15/14/13/12/11',
                image: require('../../assets/lol_hero_icons/skills/NasusW.png')
            },
            {
                id: 'NasusE',
                name: '영혼의 불길',
                description: `나서스가 영혼의 불꽃을 일으켜 해당 지역에 서 있는 적에게 피해를 입히고 방어력을 낮춥니다.`,
                cooldownBurn: '12',
                image: require('../../assets/lol_hero_icons/skills/NasusE.png')
            },
            {
                id: 'NasusR',
                name: '사막의 분노',
                description: `나서스가 강력한 모래 폭풍을 소환하여 주변의 적을 강타합니다. 나서스는 폭풍이 부는 동안 체력과 공격 범위가 증가하며, 주변의 적에게 피해를 입히고, 흡수의 일격 재사용 대기시간이 감소하며, 추가 방어력과 마법 저항력을 얻습니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/NasusR.png')
            },
        ],
    },
    {
        numID: 89,
        id: 'Nautilus_sup',
        Key: '111',
        name: '노틸러스',
        title: '심해의 타이탄',
        lore: `빌지워터에는 처음으로 물에 잠긴 부두만큼이나 오래되었다는 쓸쓸한 전설이 하나 있다. 육중한 갑옷을 걸친 노틸러스라는 이름의 거인이 푸른 불꽃 제도 해안가의 검푸른 물을 배회한다는 이야기이다. 이제는 기억나지도 않을 복수심에 사로잡힌 그는 예고도 없이 거대한 닻을 휘둘러 가여운 자들을 구하고 탐욕스러운 자들을 죽음으로 인도한다. '빌지워터의 공물'이라는 절대 어겨선 안 될 약속을 잊은 자들을 바닷속으로 끌고 들어가며, 끌려들어 간 자는 누구도 그곳에서 살아 돌아올 수 없다고 한다.`,
        blurb: `빌지워터에는 처음으로 물에 잠긴 부두만큼이나 오래되었다는 쓸쓸한 전설이 하나 있다. 육중한 갑옷을 걸친 노틸러스라는 이름의 거인이 푸른 불꽃 제도 해안가의 검푸른 물을 배회한다는 이야기이다. 이제는 기억나지도 않을 복수심에 사로잡힌 그는 예고도 없이 거대한 닻을 휘둘러 가여운 자들을 구하고 탐욕스러운 자들을 죽음으로 인도한다. '빌지워터의 공물'이라는 절대 어겨선 안 될 약속을 잊은 자들을 바닷속으로 끌고 들어가며, 끌려들어 간 자는 누구도 그곳에서...`,
        image: require('../../assets/lol_hero_icons/Nautilus.png'),
        background_image: require('../../assets/lol_hero_icons/background/Nautilus.jpg'),
        stats: {"hp": 646, "hpperlevel": 100, "mp": 400, "mpperlevel": 47, "movespeed": 325, "armor": 39, "armorperlevel": 4.95, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 8.5, "hpregenperlevel": 0.55, "mpregen": 8.65, "mpregenperlevel": 0.5, "crit": 0, "critperlevel": 0, "attackdamage": 61, "attackdamageperlevel": 3.3, "attackspeedperlevel": 1, "attackspeed": 0.706},
        spells: [
            {
                id: 'passive',
                name: '강력한 일격',
                description: `노틸러스가 대상에 대한 첫 기본 공격 시 추가 물리 피해를 입히고 잠시 속박합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Nautilus_StaggeringBlow.png')
            },
            {
                id: 'NautilusAnchorDrag',
                name: '닻줄 견인',
                description: `노틸러스가 전방으로 닻을 던집니다.  닻이 적을 맞히면 노틸러스와 대상이 가까이 당겨지며 대상에게 마법 피해를 입힙니다. 닻이 지형을 맞히면 노틸러스가 지형 쪽으로 끌려갑니다.`,
                cooldownBurn: '14/13/12/11/10',
                image: require('../../assets/lol_hero_icons/skills/NautilusAnchorDrag.png')
            },
            {
                id: 'NautilusPiercingGaze',
                name: '타이탄의 분노',
                description: `노틸러스가 잠시 보호막을 얻습니다. 보호막이 지속되는 동안 노틸러스의 기본 공격은 대상과 대상 주위의 적에게 지속 피해를 입힙니다.`,
                cooldownBurn: '12',
                image: require('../../assets/lol_hero_icons/skills/NautilusPiercingGaze.png')
            },
            {
                id: 'NautilusSplashZone',
                name: '역조',
                description: `노틸러스가 주위에 세 번의 폭발을 일으킵니다. 폭발할 때마다 적에게 피해를 입히고 둔화시킵니다.`,
                cooldownBurn: '7/6.5/6/5.5/5',
                image: require('../../assets/lol_hero_icons/skills/NautilusSplashZone.png')
            },
            {
                id: 'NautilusGrandLine',
                name: '폭뢰',
                description: `지면에 충격파를 발사하면 상대방을 추적해 갑니다. 충격파는 위의 지면을 찢으며 적들을 공중으로 띄웁니다. 충격파가 상대방에게 닿으면 폭발하여 대상을 공중으로 띄우고 기절시킵니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/NautilusGrandLine.png')
            },
        ],
    },
    {
        numID: 90,
        id: 'Neeko_mid_sup',
        Key: '518',
        name: '니코',
        title: '알쏭달쏭 카멜레온',
        lore: `오랜 세월 잊힌 바스타야의 한 부족 출신인 니코는 다른 이의 모습을 빌려 어느 무리에든 뒤섞일 수 있으며, 심지어 상대의 감정을 흡수하여 적과 아군을 한눈에 구분할 수 있다. 그 누구도 니코가 어디 있는지, 정체가 무엇인지 확신할 수 없지만, 악의를 가지고 접근하는 자는 원초적 영혼 마법의 무시무시한 힘과 함께 그녀의 진정한 모습을 보게 될 것이다.`,
        blurb: `오랜 세월 잊힌 바스타야의 한 부족 출신인 니코는 다른 이의 모습을 빌려 어느 무리에든 뒤섞일 수 있으며, 심지어 상대의 감정을 흡수하여 적과 아군을 한눈에 구분할 수 있다. 그 누구도 니코가 어디 있는지, 정체가 무엇인지 확신할 수 없지만, 악의를 가지고 접근하는 자는 원초적 영혼 마법의 무시무시한 힘과 함께 그녀의 진정한 모습을 보게 될 것이다.`,
        image: require('../../assets/lol_hero_icons/Neeko.png'),
        background_image: require('../../assets/lol_hero_icons/background/Neeko.jpg'),
        stats: {"hp": 610, "hpperlevel": 104, "mp": 450, "mpperlevel": 30, "movespeed": 340, "armor": 21, "armorperlevel": 5.2, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 7.5, "hpregenperlevel": 0.75, "mpregen": 7, "mpregenperlevel": 0.7, "crit": 0, "critperlevel": 0, "attackdamage": 48, "attackdamageperlevel": 2.5, "attackspeedperlevel": 3.5, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '태고의 마력',
                description: `니코가 아군 챔피언 중 한 명으로 변신합니다. 적 챔피언에게 피해를 입거나 피해를 입히는 스킬을 사용하면 변신이 풀립니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Neeko_P.png')
            },
            {
                id: 'NeekoQ',
                name: '꽃망울 폭발',
                description: `니코가 씨앗을 던져 마법 피해를 입힙니다. 씨앗이 적 챔피언에게 피해를 입히거나 유닛을 처치하면 한 번 더 폭발합니다.`,
                cooldownBurn: '9/8.5/8/7.5/7',
                image: require('../../assets/lol_hero_icons/skills/NeekoQ.png')
            },
            {
                id: 'NeekoW',
                name: '형상 분리',
                description: `니코가 기본 지속 효과로 세 번째 기본 공격마다 추가 마법 피해를 입힙니다. 사용 시에는 자신을 복제한 형상을 지정한 방향으로 보낼 수 있습니다.`,
                cooldownBurn: '16/15/14/13/12',
                image: require('../../assets/lol_hero_icons/skills/NeekoW.png')
            },
            {
                id: 'NeekoE',
                name: '칭칭올가미',
                description: `니코가 올가미를 던져 적중한 모든 적에게 피해를 입히고 속박합니다. 올가미로 적을 처치하거나 챔피언을 관통하면 올가미가 더 커지고, 더 빠르게 날아가며 속박 지속시간도 길어집니다.`,
                cooldownBurn: '12/11.5/11/10.5/10',
                image: require('../../assets/lol_hero_icons/skills/NeekoE.png')
            },
            {
                id: 'NeekoR',
                name: '만개',
                description: `니코가 잠시 준비한 후 공중으로 도약합니다. 땅에 착지하면 주변의 모든 적이 피해를 입고 공중에 띄워집니다. 변신 상태에서는 준비하는 모습이 적에게 보이지 않습니다.`,
                cooldownBurn: '120/105/90',
                image: require('../../assets/lol_hero_icons/skills/NeekoR.png')
            },
        ],
    },
    {
        numID: 91,
        id: 'Nidalee_jug',
        Key: '76',
        name: '니달리',
        title: '야성의 사냥꾼',
        lore: `깊은 정글에서 자라난 니달리는 자신의 형태를 흉포한 쿠거로 자유자재로 변화시킬 수 있는 추적의 달인이다. 완전한 여인도, 완전한 야수도 아닌 니달리는 신중하게 배치한 덫과 재빠른 창 투척으로 모든 침입자들로부터 자신의 영역을 맹렬하게 지켜낸다. 니달리는 사냥감을 움직이지 못하게 공격한 후 쿠거 형태로 변해 덮친다. 니달리에게서 운 좋게 살아남은 몇 사람은 야생에 사는 여자가 있다는 이야기를 퍼뜨렸다. 본능이 극도로 예리하고, 발톱은 그보다도 더 예리하다고...`,
        blurb: `깊은 정글에서 자라난 니달리는 자신의 형태를 흉포한 쿠거로 자유자재로 변화시킬 수 있는 추적의 달인이다. 완전한 여인도, 완전한 야수도 아닌 니달리는 신중하게 배치한 덫과 재빠른 창 투척으로 모든 침입자들로부터 자신의 영역을 맹렬하게 지켜낸다. 니달리는 사냥감을 움직이지 못하게 공격한 후 쿠거 형태로 변해 덮친다. 니달리에게서 운 좋게 살아남은 몇 사람은 야생에 사는 여자가 있다는 이야기를 퍼뜨렸다. 본능이 극도로 예리하고, 발톱은 그보다도 더...`,
        image: require('../../assets/lol_hero_icons/Nidalee.png'),
        background_image: require('../../assets/lol_hero_icons/background/Nidalee.jpg'),
        stats: {"hp": 610, "hpperlevel": 109, "mp": 295, "mpperlevel": 45, "movespeed": 335, "armor": 32, "armorperlevel": 5, "spellblock": 30, "spellblockperlevel": 1.45, "attackrange": 525, "hpregen": 6, "hpregenperlevel": 0.6, "mpregen": 6, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 58, "attackdamageperlevel": 3.5, "attackspeedperlevel": 3.22, "attackspeed": 0.638},
        spells: [
            {
                id: 'passive',
                name: '수풀 배회',
                description: `수풀을 통과하면 니달리의 이동 속도가 2초간 10% 상승하며, 1400 범위 안의 눈에 보이는 적 챔피언 쪽으로 갈 때는 30%까지 올라갑니다.챔피언이나 몬스터에게 창 투척 또는 매복 덫을 맞히면 사냥이 발동되어 4초간 대상에 대한 절대 시야를 얻습니다. 이 동안 니달리는 이동 속도가 10% 상승하고 (사냥 당하는 대상을 향해 갈 때 30% 상승) 이들을 사냥할 때 숨통 끊기와 급습이 강화됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Nidalee_Passive.png')
            },
            {
                id: 'JavelinToss',
                name: '창 투척 / 숨통 끊기',
                description: `인간 모습일 때 - 니달리가 가시 달린 창을 대상에게 던집니다. 창이 날아가는 동안 피해가 더욱 커집니다. 쿠거 모습일 때 - 다음 공격 시 적에게 치명적인 공격을 가합니다. 대상의 체력이 낮을수록 더 큰 피해를 입힙니다.`,
                cooldownBurn: '6',
                image: require('../../assets/lol_hero_icons/skills/JavelinToss.png')
            },
            {
                id: 'Bushwhack',
                name: '매복 덫 / 급습',
                description: `인간 모습일 때 - 니달리가 적이 밟으면 피해를 입히며 모습을 드러내는 함정을 깝니다. 쿠거 모습일 때 - 앞으로 살짝 뛰어오르며 착지 시 주위에 피해를 입힙니다.`,
                cooldownBurn: '13/12/11/10/9',
                image: require('../../assets/lol_hero_icons/skills/Bushwhack.png')
            },
            {
                id: 'PrimalSurge',
                name: '태고의 생명력 / 할퀴기',
                description: `인간 모습일 때 - 니달리가 쿠거의 영혼과 교신하여 아군을 치료하고 짧은 시간 아군의 공격 속도를 높입니다. 쿠거 모습일 때 - 니달리가 한쪽 방향을 발톱으로 공격하여, 앞에 있는 적들에게 피해를 입힙니다.`,
                cooldownBurn: '12',
                image: require('../../assets/lol_hero_icons/skills/PrimalSurge.png')
            },
            {
                id: 'AspectOfTheCougar',
                name: '쿠거의 상',
                description: `니달리가 쿠거로 변신하여 새로운 스킬을 사용할 수 있게 됩니다.`,
                cooldownBurn: '3',
                image: require('../../assets/lol_hero_icons/skills/AspectOfTheCougar.png')
            },
        ],
    },
    {
        numID: 92,
        id: 'Nilah_adc',
        Key: '895',
        name: '닐라',
        title: '해방된 기쁨',
        lore: `멀리 떨어진 땅에서 온 고행의 전사, 닐라는 세계에서 가장 위협적이고 거대한 상대를 찾아 도전하고 파괴한다. 오랫동안 갇혀 있던 기쁨의 악마를 만나 힘을 얻은 그녀에게 멈추지 않는 기쁨 외에 다른 감정은 없다. 자신의 막강한 힘을 위한 사소한 대가인 셈이다. 악마의 물을 막강한 힘을 지닌 칼날로 바꾼 닐라는 오래전에 잊힌 고대의 위협에 맞서 싸운다.`,
        blurb: `멀리 떨어진 땅에서 온 고행의 전사, 닐라는 세계에서 가장 위협적이고 거대한 상대를 찾아 도전하고 파괴한다. 오랫동안 갇혀 있던 기쁨의 악마를 만나 힘을 얻은 그녀에게 멈추지 않는 기쁨 외에 다른 감정은 없다. 자신의 막강한 힘을 위한 사소한 대가인 셈이다. 악마의 물을 막강한 힘을 지닌 칼날로 바꾼 닐라는 오래전에 잊힌 고대의 위협에 맞서 싸운다.`,
        image: require('../../assets/lol_hero_icons/Nilah.png'),
        background_image: require('../../assets/lol_hero_icons/background/Nilah.jpg'),
        stats: {"hp": 570, "hpperlevel": 101, "mp": 350, "mpperlevel": 35, "movespeed": 340, "armor": 27, "armorperlevel": 4.5, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 225, "hpregen": 6, "hpregenperlevel": 0.9, "mpregen": 8.2, "mpregenperlevel": 0.7, "crit": 0, "critperlevel": 0, "attackdamage": 58, "attackdamageperlevel": 2, "attackspeedperlevel": 3, "attackspeed": 0.697},
        spells: [
            {
                id: 'passive',
                name: '영원한 기쁨',
                description: `미니언에게 최후의 일격을 가하면 경험치를 추가로 획득하며, 주변 아군이 부여하는 체력 회복 및 보호막 효과를 강화하고 공유합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/NIlahP.png')
            },
            {
                id: 'NilahQ',
                name: '무형의 검',
                description: `지정한 방향으로 칼날 채찍을 후려쳐 일직선상에 있는 모든 적에게 피해를 입힙니다. 공격 사거리가 잠깐 동안 증가합니다.`,
                cooldownBurn: '4',
                image: require('../../assets/lol_hero_icons/skills/NilahQ.png')
            },
            {
                id: 'NilahW',
                name: '승리의 장막',
                description: `자신을 안개로 감싸 이동 속도를 얻고 우아하게 모든 기본 공격을 회피합니다. 안개 지속시간 중 닐라에게 닿은 아군에게도 이 효과가 적용됩니다.`,
                cooldownBurn: '26/25/24/23/22',
                image: require('../../assets/lol_hero_icons/skills/NilahW.png')
            },
            {
                id: 'NilahE',
                name: '급류',
                description: `대상을 향해 맹렬히 돌진해 경로상의 모든 적에게 피해를 입힙니다.`,
                cooldownBurn: '0.5',
                image: require('../../assets/lol_hero_icons/skills/NilahE.png')
            },
            {
                id: 'NilahR',
                name: '환희',
                description: `신나게 칼날 채찍을 휘둘러 주변 모든 적에게 피해를 입히고 가까이 끌어당깁니다.`,
                cooldownBurn: '110/95/80',
                image: require('../../assets/lol_hero_icons/skills/NilahR.png')
            },
        ],
    },
    {
        numID: 93,
        id: 'Nocturne_mid_jug',
        Key: '56',
        name: '녹턴',
        title: '영원한 악몽',
        lore: `언제부터인가 자의식이 있는 존재라면 반드시 꾸는 악몽이 있었다. 그리고 그 악몽들이 모여 사악한 기운을 끌어들였고, 그 속에서 태곳적 힘을 지닌 순수한 악 그 자체인 녹턴이 생겨났다. 녹턴은 혼돈을 암흑의 액체로 표현한 듯한 형상으로, 얼굴은 없으나 차디찬 눈을 지녔으며 흉흉해 보이는 칼날로 무장했다. 영혼계에서 탈출하여 생명이 깨어 있는 세계로 내려온 녹턴은 진정한 암흑에서나 피어날 법한 공포를 먹이로 삼는다.`,
        blurb: `언제부터인가 자의식이 있는 존재라면 반드시 꾸는 악몽이 있었다. 그리고 그 악몽들이 모여 사악한 기운을 끌어들였고, 그 속에서 태곳적 힘을 지닌 순수한 악 그 자체인 녹턴이 생겨났다. 녹턴은 혼돈을 암흑의 액체로 표현한 듯한 형상으로, 얼굴은 없으나 차디찬 눈을 지녔으며 흉흉해 보이는 칼날로 무장했다. 영혼계에서 탈출하여 생명이 깨어 있는 세계로 내려온 녹턴은 진정한 암흑에서나 피어날 법한 공포를 먹이로 삼는다.`,
        image: require('../../assets/lol_hero_icons/Nocturne.png'),
        background_image: require('../../assets/lol_hero_icons/background/Nocturne.jpg'),
        stats: {"hp": 655, "hpperlevel": 109, "mp": 275, "mpperlevel": 35, "movespeed": 345, "armor": 38, "armorperlevel": 4.7, "spellblock": 32, "spellblockperlevel": 1.55, "attackrange": 125, "hpregen": 7, "hpregenperlevel": 0.75, "mpregen": 7, "mpregenperlevel": 0.45, "crit": 0, "critperlevel": 0, "attackdamage": 62, "attackdamageperlevel": 2.6, "attackspeedperlevel": 2.7, "attackspeed": 0.721},
        spells: [
            {
                id: 'passive',
                name: '그림자 칼날',
                description: `몇 초마다 녹턴의 기본 공격이 주변 적에게 추가 물리 피해를 입히고 녹턴의 체력을 회복시킵니다. 녹턴이 기본 공격 시 이 효과의 재사용 대기시간이 감소합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Nocturne_UmbraBlades.png')
            },
            {
                id: 'NocturneDuskbringer',
                name: '황혼의 인도자',
                description: `녹턴이 그림자 칼날을 던져 피해를 입히고 황혼의 궤적을 남깁니다. 황혼의 칼날에 적중당한 적 챔피언들 또한 황혼의 궤적을 남깁니다. 궤적에 있는 동안 녹턴은 다른 유닛을 통과할 수 있게 되며 이동 속도 및 공격력이 증가합니다.`,
                cooldownBurn: '8',
                image: require('../../assets/lol_hero_icons/skills/NocturneDuskbringer.png')
            },
            {
                id: 'NocturneShroudofDarkness',
                name: '어둠의 장막',
                description: `기본 지속 효과로 녹턴이 자신의 검을 강화하여 추가 공격 속도를 얻습니다. 스킬 사용 시 녹턴이 그림자 속으로 몸을 숨겨 적의 스킬을 한 번 막아주는 보호막을 생성합니다. 성공적으로 적의 스킬을 막았을 경우 추가 공격 속도가 2배로 올라갑니다.`,
                cooldownBurn: '20/18/16/14/12',
                image: require('../../assets/lol_hero_icons/skills/NocturneShroudofDarkness.png')
            },
            {
                id: 'NocturneUnspeakableHorror',
                name: '말할 수 없는 공포',
                description: `녹턴이 대상의 정신에 악몽을 심어 매초 피해를 가하며 지속시간이 끝날 때까지 스킬의 사거리 밖으로 벗어나지 않을 경우 공포 효과를 적용합니다.`,
                cooldownBurn: '15/14/13/12/11',
                image: require('../../assets/lol_hero_icons/skills/NocturneUnspeakableHorror.png')
            },
            {
                id: 'NocturneParanoia',
                name: '피해망상',
                description: `녹턴이 모든 적 챔피언의 시야 반경을 줄이고 적 챔피언들 사이의 시야 공유를 중단합니다. 스킬 사용 후 적 챔피언을 대상으로 설정할 경우 그 챔피언에게 날아가 공격합니다.`,
                cooldownBurn: '140/115/90',
                image: require('../../assets/lol_hero_icons/skills/NocturneParanoia.png')
            },
        ],
    },
    {
        numID: 94,
        id: 'Nunu_jug',
        Key: '20',
        name: '누누와 윌럼프',
        title: '소년과 설인',
        lore: `아주 오랜 옛날, 무시무시한 괴물을 물리쳐 영웅이 되고 싶은 소년이 있었다. 하지만 소년이 발견한 것은 마법을 부리는, 단지 친구가 필요했던 외로운 설인이었다. 고대의 힘과 눈싸움으로 하나가 된 소년 누누와 설인 윌럼프는 프렐요드 곳곳을 누비며 상상 속의 모험을 떠난다. 실종된 누누의 어머니를 찾아 나선 누누와 윌럼프. 이들이 누누의 어머니를 구한다면 영웅이 될 수 있을지도...`,
        blurb: `아주 오랜 옛날, 무시무시한 괴물을 물리쳐 영웅이 되고 싶은 소년이 있었다. 하지만 소년이 발견한 것은 마법을 부리는, 단지 친구가 필요했던 외로운 설인이었다. 고대의 힘과 눈싸움으로 하나가 된 소년 누누와 설인 윌럼프는 프렐요드 곳곳을 누비며 상상 속의 모험을 떠난다. 실종된 누누의 어머니를 찾아 나선 누누와 윌럼프. 이들이 누누의 어머니를 구한다면 영웅이 될 수 있을지도...`,
        image: require('../../assets/lol_hero_icons/Nunu.png'),
        background_image: require('../../assets/lol_hero_icons/background/Nunu.jpg'),
        stats: {"hp": 610, "hpperlevel": 90, "mp": 280, "mpperlevel": 42, "movespeed": 345, "armor": 29, "armorperlevel": 4.2, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 5, "hpregenperlevel": 0.8, "mpregen": 7, "mpregenperlevel": 0.5, "crit": 0, "critperlevel": 0, "attackdamage": 61, "attackdamageperlevel": 3, "attackspeedperlevel": 2.25, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '프렐요드의 부름',
                description: `누누가 윌럼프와 주변 아군 1명의 공격 속도와 이동 속도를 증가시키고, 윌럼프의 기본 공격이 대상 근처의 적에게 피해를 줍니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/NunuPassive.png')
            },
            {
                id: 'NunuQ',
                name: '잡아먹기',
                description: `윌럼프가 미니언, 몬스터, 또는 적 챔피언을 물어뜯어 피해를 입히고 체력을 회복합니다.`,
                cooldownBurn: '12/11/10/9/8',
                image: require('../../assets/lol_hero_icons/skills/NunuQ.png')
            },
            {
                id: 'NunuW',
                name: '데굴데굴 눈덩이!',
                description: `윌럼프가 굴릴수록 크기와 속도가 증가하는 눈덩이를 생성합니다. 눈덩이는 적에게 피해를 입히고 공중으로 띄워 올립니다.`,
                cooldownBurn: '14',
                image: require('../../assets/lol_hero_icons/skills/NunuW.png')
            },
            {
                id: 'NunuE',
                name: '눈덩이 팡팡팡',
                description: `누누가 눈덩이를 난사해 적에게 피해를 입힙니다. 누누의 공격이 끝나면 윌럼프가 눈덩이에 맞은 챔피언이나 대형 몬스터를 속박합니다.`,
                cooldownBurn: '14/13/12/11/10',
                image: require('../../assets/lol_hero_icons/skills/NunuE.png')
            },
            {
                id: 'NunuR',
                name: '절대 영도',
                description: `누누와 윌럼프가 일정 범위에 강력한 눈보라를 생성하여 적을 둔화시키고 눈보라가 끝난 후 범위 내 적에게 큰 피해를 입힙니다.`,
                cooldownBurn: '110/100/90',
                image: require('../../assets/lol_hero_icons/skills/NunuR.png')
            },
        ],
    },
    {
        numID: 95,
        id: 'Olaf_top_jug',
        Key: '2',
        name: '올라프',
        title: '광전사',
        lore: `그 누구도 막지 못할 파괴력으로 도끼를 휘두르는 올라프가 바라는 것은 딱 한 가지, 전장에서 영광스럽게 전사하는 것이다. 프렐요드에서도 가혹한 환경으로 유명한 록파르 반도 출신인 올라프는 어느 날 자신이 무병장수하다가 평온하게 숨을 거둘 것이라는 예언을 들었다. 록파르에서는 침상에서 편안하게 죽는 것은 겁쟁이뿐이므로, 이는 더할 나위 없이 모욕적인 운명이었다. 분노가 치민 올라프는 오로지 싸우다 죽기만을 바라며 프렐요드를 종횡무진했다. 하지만 위대한 전사와 전설의 야수를 수십, 수백 쓰러뜨려도 죽음은 찾아오지 않았다. 이제 올라프는 겨울 발톱 부족의 포악한 집행자가 되어, 대규모 전쟁에서 전사할 수 있는 날만을 학수고대하고 있다.`,
        blurb: `그 누구도 막지 못할 파괴력으로 도끼를 휘두르는 올라프가 바라는 것은 딱 한 가지, 전장에서 영광스럽게 전사하는 것이다. 프렐요드에서도 가혹한 환경으로 유명한 록파르 반도 출신인 올라프는 어느 날 자신이 무병장수하다가 평온하게 숨을 거둘 것이라는 예언을 들었다. 록파르에서는 침상에서 편안하게 죽는 것은 겁쟁이뿐이므로, 이는 더할 나위 없이 모욕적인 운명이었다. 분노가 치민 올라프는 오로지 싸우다 죽기만을 바라며 프렐요드를 종횡무진했다. 하지만 위대한...`,
        image: require('../../assets/lol_hero_icons/Olaf.png'),
        background_image: require('../../assets/lol_hero_icons/background/Olaf.jpg'),
        stats: {"hp": 645, "hpperlevel": 119, "mp": 316, "mpperlevel": 50, "movespeed": 350, "armor": 35, "armorperlevel": 4.2, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 6.5, "hpregenperlevel": 0.6, "mpregen": 7.5, "mpregenperlevel": 0.6, "crit": 0, "critperlevel": 0, "attackdamage": 68, "attackdamageperlevel": 4.7, "attackspeedperlevel": 2.7, "attackspeed": 0.694},
        spells: [
            {
                id: 'passive',
                name: '광전사의 분노',
                description: `올라프가 잃은 체력에 비례해 공격 속도와 생명력 흡수를 얻습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Olaf_Passive.png')
            },
            {
                id: 'OlafAxeThrowCast',
                name: '역류',
                description: `올라프가 지정한 곳에 도끼를 던져 맞은 적에게 피해를 입히고 방어력과 이동 속도를 감소시킵니다. 올라프가 도끼를 다시 집으면 이 스킬의 재사용 대기시간이 초기화됩니다.`,
                cooldownBurn: '9',
                image: require('../../assets/lol_hero_icons/skills/OlafAxeThrowCast.png')
            },
            {
                id: 'OlafFrenziedStrikes',
                name: '버티기',
                description: `올라프의 공격 속도가 증가하고 보호막을 얻습니다.`,
                cooldownBurn: '16/15/14/13/12',
                image: require('../../assets/lol_hero_icons/skills/OlafFrenziedStrikes.png')
            },
            {
                id: 'OlafRecklessStrike',
                name: '무모한 강타',
                description: `올라프가 강력한 공격을 가하여 자신과 공격 대상에게 고정 피해를 입힙니다. 대상을 파괴한 경우 소모한 체력이 회복됩니다.`,
                cooldownBurn: '11/10/9/8/7',
                image: require('../../assets/lol_hero_icons/skills/OlafRecklessStrike.png')
            },
            {
                id: 'OlafRagnarok',
                name: '라그나로크',
                description: `기본 지속 효과로 올라프의 방어력과 마법 저항력이 증가합니다. 올라프가 이 스킬을 사용하면 공격을 하는 동안 이동 방해 효과에 면역이 됩니다.`,
                cooldownBurn: '100/90/80',
                image: require('../../assets/lol_hero_icons/skills/OlafRagnarok.png')
            },
        ],
    },
    {
        numID: 96,
        id: 'Orianna_mid',
        Key: '61',
        name: '오리아나',
        title: '시계태엽 소녀',
        lore: `오리아나는 한 때 살아있는 육신을 가진 호기심 많은 소녀였지만, 이제는 전체가 시계태엽 장치로 만들어진 놀라운 기술의 산물이다. 오리아나는 자운 남부지방에서 사고를 당한 후 매우 위태로운 상황에 처했고, 다쳐서 움직일 수 없는 신체의 부분 부분이 정교한 인공 신체로 교체되었다. 오리아나는 자신을 보호하는 친구 역할을 해 주는 강력한 황동 구체와 함께, 이제 필트오버를 비롯해 온 세상에 있는 불가사의를 자유롭게 탐험한다.`,
        blurb: `오리아나는 한 때 살아있는 육신을 가진 호기심 많은 소녀였지만, 이제는 전체가 시계태엽 장치로 만들어진 놀라운 기술의 산물이다. 오리아나는 자운 남부지방에서 사고를 당한 후 매우 위태로운 상황에 처했고, 다쳐서 움직일 수 없는 신체의 부분 부분이 정교한 인공 신체로 교체되었다. 오리아나는 자신을 보호하는 친구 역할을 해 주는 강력한 황동 구체와 함께, 이제 필트오버를 비롯해 온 세상에 있는 불가사의를 자유롭게 탐험한다.`,
        image: require('../../assets/lol_hero_icons/Orianna.png'),
        background_image: require('../../assets/lol_hero_icons/background/Orianna.jpg'),
        stats: {"hp": 585, "hpperlevel": 110, "mp": 418, "mpperlevel": 25, "movespeed": 325, "armor": 20, "armorperlevel": 4.2, "spellblock": 26, "spellblockperlevel": 1.3, "attackrange": 525, "hpregen": 7, "hpregenperlevel": 0.55, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 44, "attackdamageperlevel": 2.6, "attackspeedperlevel": 3.5, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '시계태엽 감기',
                description: `오리아나의 기본 공격은 추가 마법 피해를 입힙니다. 같은 적을 연속으로 공격할수록 추가 마법 피해량도 커집니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/OriannaPassive.png')
            },
            {
                id: 'OrianaIzunaCommand',
                name: '명령: 공격',
                description: `오리아나가 구체에게 목표 지점으로 돌진하라고 명령하여 구체가 대상 지점으로 가는 동안 마주치는 대상에게 마법 피해를 줍니다. 여러 대상을 맞히는 경우 뒤로 갈수록 피해량이 작아집니다. 구체는 목표 지점에 머뭅니다.`,
                cooldownBurn: '6/5.25/4.5/3.75/3',
                image: require('../../assets/lol_hero_icons/skills/OrianaIzunaCommand.png')
            },
            {
                id: 'OrianaDissonanceCommand',
                name: '명령: 불협화음',
                description: `오리아나가 구체에게 에너지파를 방출하도록 명령하여 근처에 있는 적에게 마법 피해를 입힙니다. 이때 생긴 자기장은 아군의 이동 속도를 높이고 적의 이동 속도는 늦춥니다.`,
                cooldownBurn: '7',
                image: require('../../assets/lol_hero_icons/skills/OrianaDissonanceCommand.png')
            },
            {
                id: 'OrianaRedactCommand',
                name: '명령: 보호',
                description: `오리아나가 구체에게 아군을 따라다니며 이들을 보호하고 도중에 마주치는 적에게 마법 피해를 입히도록 명령합니다. 구체는 또한 보호하는 챔피언의 방어력 및 마법 저항력을 높여줍니다.`,
                cooldownBurn: '9',
                image: require('../../assets/lol_hero_icons/skills/OrianaRedactCommand.png')
            },
            {
                id: 'OrianaDetonateCommand',
                name: '명령: 충격파',
                description: `오리아나가 구체에게 충격파를 방출하도록 명령하여 근처에 있는 적에게 마법 피해를 주며 잠시 뒤 적을 구체 쪽으로 잡아당깁니다.`,
                cooldownBurn: '110/95/80',
                image: require('../../assets/lol_hero_icons/skills/OrianaDetonateCommand.png')
            },
        ],
    },
    {
        numID: 97,
        id: 'Ornn_top',
        Key: '516',
        name: '오른',
        title: '거산의 화염',
        lore: `오른은 대장장이의 일과 그 솜씨를 관장하는 프렐요드의 반신으로, 화산 아래에 있는 용암 동굴 속에 거대한 불꽃 대장간을 짓고 홀로 작업에 몰두한다. 오른이 광석을 녹이고 제련하여 제작하는 물건들은 비할 데 없이 우수한 품질을 자랑한다. 혼자서 밤낮없이 일하는 것을 좋아하지만 다른 신들, 특히 볼리베어가 대지를 걸어다니며 필멸자들을 좌지우지하려 들 때면 대장간에서 나온다. 그러고는 믿음직스러운 망치를 휘두르거나 아예 화산의 힘을 불러내어 그들이 제자리로 돌아가게 만든다.`,
        blurb: `오른은 대장장이의 일과 그 솜씨를 관장하는 프렐요드의 반신으로, 화산 아래에 있는 용암 동굴 속에 거대한 불꽃 대장간을 짓고 홀로 작업에 몰두한다. 오른이 광석을 녹이고 제련하여 제작하는 물건들은 비할 데 없이 우수한 품질을 자랑한다. 혼자서 밤낮없이 일하는 것을 좋아하지만 다른 신들, 특히 볼리베어가 대지를 걸어다니며 필멸자들을 좌지우지하려 들 때면 대장간에서 나온다. 그러고는 믿음직스러운 망치를 휘두르거나 아예 화산의 힘을 불러내어 그들이...`,
        image: require('../../assets/lol_hero_icons/Ornn.png'),
        background_image: require('../../assets/lol_hero_icons/background/Ornn.jpg'),
        stats: {"hp": 660, "hpperlevel": 109, "mp": 341, "mpperlevel": 65, "movespeed": 335, "armor": 33, "armorperlevel": 5.2, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 9, "hpregenperlevel": 0.9, "mpregen": 8, "mpregenperlevel": 0.6, "crit": 0, "critperlevel": 0, "attackdamage": 69, "attackdamageperlevel": 3.5, "attackspeedperlevel": 2, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '간이 대장간',
                description: `오른이 추가 방어력과 마법 저항력을 얻습니다.오른은 어디에서든 골드를 써서 소모품을 제외한 아이템을 제작할 수 있습니다.또한 걸작 아이템을 만들어 직접 사용하거나 아군의 아이템을 업그레이드할 수 있습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/OrnnP.png')
            },
            {
                id: 'OrnnQ',
                name: '용암 균열',
                description: `오른이 지면을 내려쳐 적에게 물리 피해를 입히고 둔화시키는 균열을 만들어냅니다. 잠시 후 목표 지점에 용암 기둥이 생성됩니다.`,
                cooldownBurn: '9/8.5/8/7.5/7',
                image: require('../../assets/lol_hero_icons/skills/OrnnQ.png')
            },
            {
                id: 'OrnnW',
                name: '불꽃 풀무질',
                description: `오른이 전진하며 불꽃을 뿜습니다. 마지막 불꽃에 맞은 적은 불안정 상태가 됩니다.`,
                cooldownBurn: '12/11.5/11/10.5/10',
                image: require('../../assets/lol_hero_icons/skills/OrnnW.png')
            },
            {
                id: 'OrnnE',
                name: '화염 돌진',
                description: `오른이 돌진하며 통과한 적에게 피해를 입힙니다. 오른이 돌진 중 지형지물에 충돌하면, 그 충돌로 인해 충격파가 발생해 적에게 피해를 입히고 공중으로 띄웁니다.`,
                cooldownBurn: '14/13.5/13/12.5/12',
                image: require('../../assets/lol_hero_icons/skills/OrnnE.png')
            },
            {
                id: 'OrnnR',
                name: '대장장이 신의 부름',
                description: `오른이 목표 위치에 거대한 불의 정령을 소환합니다. 불의 정령은 오른에게로 다가오며 점점 이동 속도가 빨라집니다. 정령이 밟고 지나간 적은 피해를 입고 둔화되며 불안정 상태가 됩니다. 오른이 대장장이 신의 부름을 재시전하면 정령 쪽으로 돌진합니다. 오른이 돌진해 정령에 부딪히면 정령의 진행 방향이 바뀝니다. 진행 방향이 바뀐 정령은 부딪힌 모든 적을 공중으로 띄우며 전과 동일한 피해를 입히고 다시 불안정 상태로 만듭니다.`,
                cooldownBurn: '140/120/100',
                image: require('../../assets/lol_hero_icons/skills/OrnnR.png')
            },
        ],
    },
    {
        numID: 98,
        id: 'Pantheon_top_mid_jug_sup',
        Key: '80',
        name: '판테온',
        title: '불굴의 창',
        lore: `본의 아니게 전쟁의 성위에 잠식된 아트레우스는 자신에게 깃든 천상의 힘을 파괴하고 하늘의 별을 사라지게 할 정도로 강력한 일격에도 굴복하지 않고 살아남았다. 그리고 결국 필멸의 운명을 인정하고, 그에 따르는 힘과 불굴의 정신을 받아들였다. 이제 아트레우스는 신성에 저항하는 판테온으로 다시 태어나, 꺾이지 않는 의지와 성위의 무기로 무장한 채 전장을 누빈다.`,
        blurb: `본의 아니게 전쟁의 성위에 잠식된 아트레우스는 자신에게 깃든 천상의 힘을 파괴하고 하늘의 별을 사라지게 할 정도로 강력한 일격에도 굴복하지 않고 살아남았다. 그리고 결국 필멸의 운명을 인정하고, 그에 따르는 힘과 불굴의 정신을 받아들였다. 이제 아트레우스는 신성에 저항하는 판테온으로 다시 태어나, 꺾이지 않는 의지와 성위의 무기로 무장한 채 전장을 누빈다.`,
        image: require('../../assets/lol_hero_icons/Pantheon.png'),
        background_image: require('../../assets/lol_hero_icons/background/Pantheon.jpg'),
        stats: {"hp": 650, "hpperlevel": 109, "mp": 317, "mpperlevel": 31, "movespeed": 345, "armor": 40, "armorperlevel": 4.95, "spellblock": 28, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 6, "hpregenperlevel": 0.65, "mpregen": 7.35, "mpregenperlevel": 0.45, "crit": 0, "critperlevel": 0, "attackdamage": 64, "attackdamageperlevel": 3.3, "attackspeedperlevel": 2.95, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '필멸자의 의지',
                description: `스킬 사용 또는 공격을 몇 차례 하고 나면 다음 스킬이 강화됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Pantheon_Passive.png')
            },
            {
                id: 'PantheonQ',
                name: '혜성의 창',
                description: `판테온이 지정 방향으로 창을 찌르거나 던집니다.`,
                cooldownBurn: '11/10.25/9.5/8.75/8',
                image: require('../../assets/lol_hero_icons/skills/PantheonQ.png')
            },
            {
                id: 'PantheonW',
                name: '방호의 도약',
                description: `판테온이 대상에게 돌진해 피해를 입히고 기절시킵니다.`,
                cooldownBurn: '13/12/11/10/9',
                image: require('../../assets/lol_hero_icons/skills/PantheonW.png')
            },
            {
                id: 'PantheonE',
                name: '방패 돌격',
                description: `판테온이 방패를 들어 정면의 공격으로부터 무적이 되고 창으로 빠르게 공격합니다.`,
                cooldownBurn: '22/21/20/19/18',
                image: require('../../assets/lol_hero_icons/skills/PantheonE.png')
            },
            {
                id: 'PantheonR',
                name: '거대 유성',
                description: `판테온이 태세를 갖추고 공중으로 뛰어올랐다가 지정한 위치에 유성이 되어 떨어집니다.`,
                cooldownBurn: '180/165/150',
                image: require('../../assets/lol_hero_icons/skills/PantheonR.png')
            },
        ],
    },
    {
        numID: 99,
        id: 'Poppy_top_sup',
        Key: '78',
        name: '뽀삐',
        title: '망치의 수호자',
        lore: `룬테라에는 용맹한 챔피언이 넘쳐나지만 뽀삐만큼 끈기 넘치는 이는 찾아보기 힘들다. 제 키의 두 배는 되는 망치 오를론을 들고 다니는 뽀삐는 오랫동안 망치의 정당한 주인이자 전설의 주인공인 데마시아의 영웅을 찾아 비밀스럽게 헤매고 있다. 그 때까지 뽀삐는 충실히 전투로 돌격해 망치를 크게 휘둘러 왕국의 적을 모두 날려 버린다.`,
        blurb: `룬테라에는 용맹한 챔피언이 넘쳐나지만 뽀삐만큼 끈기 넘치는 이는 찾아보기 힘들다. 제 키의 두 배는 되는 망치 오를론을 들고 다니는 뽀삐는 오랫동안 망치의 정당한 주인이자 전설의 주인공인 데마시아의 영웅을 찾아 비밀스럽게 헤매고 있다. 그 때까지 뽀삐는 충실히 전투로 돌격해 망치를 크게 휘둘러 왕국의 적을 모두 날려 버린다.`,
        image: require('../../assets/lol_hero_icons/Poppy.png'),
        background_image: require('../../assets/lol_hero_icons/background/Poppy.jpg'),
        stats: {"hp": 610, "hpperlevel": 104, "mp": 280, "mpperlevel": 40, "movespeed": 345, "armor": 38, "armorperlevel": 4.7, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 8, "hpregenperlevel": 0.8, "mpregen": 7, "mpregenperlevel": 0.7, "crit": 0, "critperlevel": 0, "attackdamage": 64, "attackdamageperlevel": 4, "attackspeedperlevel": 2.5, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '강철의 외교관',
                description: `뽀삐가 던진 방패가 대상을 맞히고 튕겨나갑니다. 뽀삐는 방패를 다시 주워 일시적인 보호막 효과를 얻을 수 있습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Poppy_Passive.png')
            },
            {
                id: 'PoppyQ',
                name: '망치 강타',
                description: `뽀삐가 망치를 휘둘러 피해를 입히고 적의 움직임을 느리게 만드는 지대를 생성합니다. 지대는 잠시 후 폭발합니다.`,
                cooldownBurn: '8/7/6/5/4',
                image: require('../../assets/lol_hero_icons/skills/PoppyQ.png')
            },
            {
                id: 'PoppyW',
                name: '굳건한 태세',
                description: `기본 지속 효과로 뽀삐가 추가 방어력과 마법 저항력을 얻습니다. 뽀삐의 체력이 낮아지면 이 효과가 더 커집니다. 사용 시에는 뽀삐의 이동 속도가 증가하며 주변에서 돌진하는 적을 막습니다. 뽀삐에게 막힌 적은 느려지고 이동 스킬을 사용할 수 없습니다.`,
                cooldownBurn: '20/18/16/14/12',
                image: require('../../assets/lol_hero_icons/skills/PoppyW.png')
            },
            {
                id: 'PoppyE',
                name: '용감한 돌진',
                description: `뽀삐가 돌진해 대상을 밀어냅니다. 대상이 지형에 부딪힐 경우 기절합니다.`,
                cooldownBurn: '14/13/12/11/10',
                image: require('../../assets/lol_hero_icons/skills/PoppyE.png')
            },
            {
                id: 'PoppyR',
                name: '수호자의 심판',
                description: `뽀삐가 잠시 정신을 집중한 뒤 망치를 휘둘러 피해를 입히고 적을 굉장히 멀리 날려버립니다.`,
                cooldownBurn: '140/120/100',
                image: require('../../assets/lol_hero_icons/skills/PoppyR.png')
            },
        ],
    },
    {
        numID: 100,
        id: 'Pyke_sup',
        Key: '555',
        name: '파이크',
        title: '핏빛 항구의 학살자',
        lore: `빌지워터 학살의 부두에서 유명한 작살잡이였던 파이크는 거대한 자울치의 뱃속에서 죽음을 맞이할 운명이었지만... 살아 돌아왔다. 이제, 그는 옛 고향의 음습한 골목과 뒷길을 소리 없이 누비며, 타인을 이용하여 부를 쌓은 자들에게 그가 얻은 초자연적인 힘으로 빠르고 잔혹한 최후를 선사한다. 괴물을 사냥한다고 자부했던 도시는 이제 괴물에게 사냥당하고 있다.`,
        blurb: `빌지워터 학살의 부두에서 유명한 작살잡이였던 파이크는 거대한 자울치의 뱃속에서 죽음을 맞이할 운명이었지만... 살아 돌아왔다. 이제, 그는 옛 고향의 음습한 골목과 뒷길을 소리 없이 누비며, 타인을 이용하여 부를 쌓은 자들에게 그가 얻은 초자연적인 힘으로 빠르고 잔혹한 최후를 선사한다. 괴물을 사냥한다고 자부했던 도시는 이제 괴물에게 사냥당하고 있다.`,
        image: require('../../assets/lol_hero_icons/Pyke.png'),
        background_image: require('../../assets/lol_hero_icons/background/Pyke.jpg'),
        stats: {"hp": 670, "hpperlevel": 110, "mp": 415, "mpperlevel": 50, "movespeed": 330, "armor": 43, "armorperlevel": 4.7, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 150, "hpregen": 7, "hpregenperlevel": 0.5, "mpregen": 8, "mpregenperlevel": 1, "crit": 0, "critperlevel": 0, "attackdamage": 62, "attackdamageperlevel": 2, "attackspeedperlevel": 2.5, "attackspeed": 0.667},
        spells: [
            {
                id: 'passive',
                name: '가라앉은 자들의 축복',
                description: `파이크가 적에게 보이지 않는 상태가 되면 최근 적 챔피언에게 잃었던 체력의 일부를 빠르게 회복합니다. 또한, 어떤 방법으로든 파이크가 획득한 추가 최대 체력은 모두 추가 공격력으로 전환됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/PykePassive.png')
            },
            {
                id: 'PykeQ',
                name: '뼈 작살',
                description: `파이크가 앞에 있는 적을 공격하거나 끌어당깁니다.`,
                cooldownBurn: '10/9.5/9/8.5/8',
                image: require('../../assets/lol_hero_icons/skills/PykeQ.png')
            },
            {
                id: 'PykeW',
                name: '유령 잠수',
                description: `파이크가 위장 상태가 되며 이동 속도가 크게 증가합니다. 이동 속도는 시간이 지남에 따라 원래대로 감소합니다.`,
                cooldownBurn: '14/13/12/11/10',
                image: require('../../assets/lol_hero_icons/skills/PykeW.png')
            },
            {
                id: 'PykeE',
                name: '망자의 물살',
                description: `파이크가 돌진하며 원래 있던 자리에 유령을 남깁니다. 이 유령은 파이크에게 돌아오면서 경로상의 모든 적 챔피언을 기절시킵니다.`,
                cooldownBurn: '15/14/13/12/11',
                image: require('../../assets/lol_hero_icons/skills/PykeE.png')
            },
            {
                id: 'PykeR',
                name: '깊은 바다의 처형',
                description: `파이크가 체력이 낮은 적에게 순간적으로 이동하여 처형하고 스킬을 다시 사용할 수 있게 됩니다. 또한 처치에 관여한 아군에게 추가 골드를 줍니다.`,
                cooldownBurn: '100/85/70',
                image: require('../../assets/lol_hero_icons/skills/PykeR.png')
            },
        ],
    },
    {
        numID: 101,
        id: 'Qiyana_mid_jug',
        Key: '246',
        name: '키아나',
        title: '원소의 여왕',
        lore: `키아나는 정글 도시 이샤오칸에서 윤 탈의 왕좌에 오르기 위해 무자비한 계획을 세우고 있다. 부모님의 왕위 계승 서열 중 가장 아래인 키아나는 당당한 자신감과 전례 없는 원소 마법 능력을 갖춘 인재로, 앞을 가로막는 자는 누구든 용서하지 않는다. 키아나는 대지 자체를 자유자재로 조종할 수 있으며, 자신을 이샤오칸 역사상 가장 뛰어난 원소술사로 여긴다. 그렇기에 자신에게 일개 도시가 아닌 제국을 지배할 자격이 있다고 믿는다.`,
        blurb: `키아나는 정글 도시 이샤오칸에서 윤 탈의 왕좌에 오르기 위해 무자비한 계획을 세우고 있다. 부모님의 왕위 계승 서열 중 가장 아래인 키아나는 당당한 자신감과 전례 없는 원소 마법 능력을 갖춘 인재로, 앞을 가로막는 자는 누구든 용서하지 않는다. 키아나는 대지 자체를 자유자재로 조종할 수 있으며, 자신을 이샤오칸 역사상 가장 뛰어난 원소술사로 여긴다. 그렇기에 자신에게 일개 도시가 아닌 제국을 지배할 자격이 있다고 믿는다.`,
        image: require('../../assets/lol_hero_icons/Qiyana.png'),
        background_image: require('../../assets/lol_hero_icons/background/Qiyana.jpg'),
        stats: {"hp": 590, "hpperlevel": 124, "mp": 375, "mpperlevel": 60, "movespeed": 335, "armor": 31, "armorperlevel": 4.7, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 150, "hpregen": 6, "hpregenperlevel": 0.9, "mpregen": 8, "mpregenperlevel": 0.7, "crit": 0, "critperlevel": 0, "attackdamage": 66, "attackdamageperlevel": 3.1, "attackspeedperlevel": 2.1, "attackspeed": 0.688},
        spells: [
            {
                id: 'passive',
                name: '왕가의 특권',
                description: `키아나의 첫 기본 공격이나 스킬은 적에게 적중하면 추가 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Qiyana_Passive.png')
            },
            {
                id: 'QiyanaQ',
                name: '원소의 분노 / 이쉬탈의 칼날',
                description: `키아나가 무기를 휘둘러 원소에 따른 추가 효과와 함께 피해를 입힙니다.`,
                cooldownBurn: '7',
                image: require('../../assets/lol_hero_icons/skills/QiyanaQ.png')
            },
            {
                id: 'QiyanaW',
                name: '대지창조',
                description: `키아나가 지정한 위치로 돌진해 무기를 원소 마법으로 강화합니다. 무기가 강화됐을 때 기본 공격이나 스킬을 사용하면 추가 피해를 입힙니다. `,
                cooldownBurn: '7',
                image: require('../../assets/lol_hero_icons/skills/QiyanaW.png')
            },
            {
                id: 'QiyanaE',
                name: '대담무쌍',
                description: `키아나가 적에게 돌진하여 피해를 입힙니다.`,
                cooldownBurn: '11/10/9/8/7',
                image: require('../../assets/lol_hero_icons/skills/QiyanaE.png')
            },
            {
                id: 'QiyanaR',
                name: '여왕의 진가',
                description: `키아나가 충격파를 발사합니다. 충격파는 강, 수풀, 벽에 적중 시 폭발하며, 주변 적에게 피해를 주고 기절시킵니다.`,
                cooldownBurn: '120',
                image: require('../../assets/lol_hero_icons/skills/QiyanaR.png')
            },
        ],
    },
    {
        numID: 102,
        id: 'Quinn_top',
        Key: '133',
        name: '퀸',
        title: '데마시아의 날개',
        lore: `데마시아의 정예 기동대 기사인 퀸은 전설적인 독수리 발러와 함께 적의 영토 한복판에 잠입해 갖가지 위험한 임무를 수행한다. 퀸과 발러의 강력한 결속력은 전투에서 무시무시한 힘을 발휘한다. 적들은 그들의 상대가 데마시아 제일가는 영웅, 그것도 하나가 아니라 둘이라는 사실을 알지도 못한 채 순식간에 목숨을 잃고 만다. 상황에 따라 곡예 수준의 동작을 보여주는 퀸이 민첩한 몸놀림으로 석궁을 꺼내들면, 발러는 공중에서 유영하며 숨어 있는 적을 찾아낸다. 데마시아의 적에게는 그야말로 공포의 한 쌍이다.`,
        blurb: `데마시아의 정예 기동대 기사인 퀸은 전설적인 독수리 발러와 함께 적의 영토 한복판에 잠입해 갖가지 위험한 임무를 수행한다. 퀸과 발러의 강력한 결속력은 전투에서 무시무시한 힘을 발휘한다. 적들은 그들의 상대가 데마시아 제일가는 영웅, 그것도 하나가 아니라 둘이라는 사실을 알지도 못한 채 순식간에 목숨을 잃고 만다. 상황에 따라 곡예 수준의 동작을 보여주는 퀸이 민첩한 몸놀림으로 석궁을 꺼내들면, 발러는 공중에서 유영하며 숨어 있는 적을 찾아낸다...`,
        image: require('../../assets/lol_hero_icons/Quinn.png'),
        background_image: require('../../assets/lol_hero_icons/background/Quinn.jpg'),
        stats: {"hp": 565, "hpperlevel": 107, "mp": 269, "mpperlevel": 35, "movespeed": 330, "armor": 28, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 525, "hpregen": 5.5, "hpregenperlevel": 0.55, "mpregen": 7, "mpregenperlevel": 0.4, "crit": 0, "critperlevel": 0, "attackdamage": 59, "attackdamageperlevel": 2.7, "attackspeedperlevel": 3.1, "attackspeed": 0.668},
        spells: [
            {
                id: 'passive',
                name: '매사냥',
                description: `데마시아 독수리 발러가 주기적으로 적에게 취약 표식을 남깁니다. 취약해진 대상에 대한 퀸의 첫 번째 기본 공격은 추가 물리 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Quinn_Passive.png')
            },
            {
                id: 'QuinnQ',
                name: '실명 공격',
                description: `퀸이 발러를 보내 하나의 적에게 표식을 남기고 대상의 시야를 크게 좁힙니다. 또한 근처의 모든 적에게 피해를 입힙니다.`,
                cooldownBurn: '11/10.5/10/9.5/9',
                image: require('../../assets/lol_hero_icons/skills/QuinnQ.png')
            },
            {
                id: 'QuinnW',
                name: '예리한 감각',
                description: `기본 지속 효과로 퀸이 취약해진 대상을 공격한 이후 공격 속도와 이동 속도가 상승합니다. 사용하면 발러가 주변의 넓은 지역을 드러냅니다.`,
                cooldownBurn: '50/45/40/35/30',
                image: require('../../assets/lol_hero_icons/skills/QuinnW.png')
            },
            {
                id: 'QuinnE',
                name: '공중제비',
                description: `퀸이 적에게 돌진하여 물리 피해를 입히고 적의 이동 속도를 늦춥니다. 대상에게 도달하면 공중제비를 넘어 대상을 잠깐 방해하고, 최대 공격 사거리로 물러나 착지합니다.`,
                cooldownBurn: '12/11/10/9/8',
                image: require('../../assets/lol_hero_icons/skills/QuinnE.png')
            },
            {
                id: 'QuinnR',
                name: '후방 지원',
                description: `퀸과 발러가 뭉쳐 엄청난 속도로 날아다닙니다. 스킬을 종료하면 공중 강습을 사용하게 되며 근처의 모든 적에게 피해를 입히고 적 챔피언에게 취약 표식을 남깁니다.`,
                cooldownBurn: '3',
                image: require('../../assets/lol_hero_icons/skills/QuinnR.png')
            },
        ],
    },
    {
        numID: 103,
        id: 'Rakan_sup',
        Key: '497',
        name: '라칸',
        title: '매혹하는 자',
        lore: `활달하고 변덕스러우면서도 거부하기 힘든 매혹을 발산하는 라칸은 악명 높은 바스타야 말썽꾼이자 로틀란 부족 역사상 가장 훌륭한 전장의 춤꾼이다. 아이오니아 고원 지대에 사는 사람들에게 라칸이라는 이름은 꽤 오래 전부터 시끌벅적한 축제, 흥이 넘치는 파티, 기존의 규칙을 거부하는 음악과 동일시되고 있다. 하지만 타고난 춤꾼이자 활력 넘치는 방랑자인 라칸이 저항 운동을 하는 자야와 동반자 관계가 되었으며, 자야의 대의에 헌신하고 있다는 사실을 아는 사람은 극히 드물다.`,
        blurb: `활달하고 변덕스러우면서도 거부하기 힘든 매혹을 발산하는 라칸은 악명 높은 바스타야 말썽꾼이자 로틀란 부족 역사상 가장 훌륭한 전장의 춤꾼이다. 아이오니아 고원 지대에 사는 사람들에게 라칸이라는 이름은 꽤 오래 전부터 시끌벅적한 축제, 흥이 넘치는 파티, 기존의 규칙을 거부하는 음악과 동일시되고 있다. 하지만 타고난 춤꾼이자 활력 넘치는 방랑자인 라칸이 저항 운동을 하는 자야와 동반자 관계가 되었으며, 자야의 대의에 헌신하고 있다는 사실을 아는 사람은...`,
        image: require('../../assets/lol_hero_icons/Rakan.png'),
        background_image: require('../../assets/lol_hero_icons/background/Rakan.jpg'),
        stats: {"hp": 610, "hpperlevel": 99, "mp": 315, "mpperlevel": 50, "movespeed": 335, "armor": 30, "armorperlevel": 4.9, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 300, "hpregen": 5, "hpregenperlevel": 0.5, "mpregen": 8.75, "mpregenperlevel": 0.5, "crit": 0, "critperlevel": 0, "attackdamage": 62, "attackdamageperlevel": 3.5, "attackspeedperlevel": 3, "attackspeed": 0.635},
        spells: [
            {
                id: 'passive',
                name: '요술 망토',
                description: `라칸에게 주기적으로 보호막이 생성됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Rakan_P.png')
            },
            {
                id: 'RakanQ',
                name: '빛나는 깃털',
                description: `마법이 깃든 깃털을 던져 마법 피해를 입힙니다. 챔피언이나 에픽 몬스터에게 깃털을 맞히면 라칸 주변 아군의 체력을 회복시킬 수 있습니다.`,
                cooldownBurn: '11/10/9/8/7',
                image: require('../../assets/lol_hero_icons/skills/RakanQ.png')
            },
            {
                id: 'RakanW',
                name: '화려한 등장',
                description: `목표 지점으로 도약해 착지 시 근처의 적을 모두 공중으로 띄워올립니다.`,
                cooldownBurn: '16/14.5/13/11.5/10',
                image: require('../../assets/lol_hero_icons/skills/RakanW.png')
            },
            {
                id: 'RakanE',
                name: '전쟁무도',
                description: `아군 챔피언에게 도약해 보호막을 씌웁니다. 몇 초 안에 소모값 없이 다시 사용할 수 있습니다.`,
                cooldownBurn: '0',
                image: require('../../assets/lol_hero_icons/skills/RakanE.png')
            },
            {
                id: 'RakanR',
                name: '매혹의 질주',
                description: `이동 속도가 증가하며 닿은 적을 모두 매혹하고 마법 피해를 입힙니다.`,
                cooldownBurn: '130/110/90',
                image: require('../../assets/lol_hero_icons/skills/RakanR.png')
            },
        ],
    },
    {
        numID: 104,
        id: 'Rammus_jug',
        Key: '33',
        name: '람머스',
        title: '중무장 아르마딜로',
        lore: `알 수 없는 신비의 존재 람머스. 누군가에게는 숭배의 대상이고, 또 누군가에게는 경외의 대상인 우상과도 같은 인물. 더러는 우리와 똑같은 인간으로 여겨지는 경우도 있다. 하지만 한 가지 분명한 것은 그 누구도 람머스의 정체를 제대로 알지 못한다는 것. 베일에 가려진 수수께끼의 존재라는 사실이다. 뾰족한 못이 박힌 갑옷을 입고 다니는 그를 두고 사람들은 여러가지 추측을 내놓는다. 반신반인의 존재라느니, 신성한 사제라느니, 마술에 걸린 야수일 뿐이라는 얘기까지 무척이나 다양하다. 그러나 진실이 무엇이든, 사막을 배회하며 뭐든지 제 생각대로 해버리고 마는 람머스의 의지를 꺾을 자는 아무도 없다.`,
        blurb: `알 수 없는 신비의 존재 람머스. 누군가에게는 숭배의 대상이고, 또 누군가에게는 경외의 대상인 우상과도 같은 인물. 더러는 우리와 똑같은 인간으로 여겨지는 경우도 있다. 하지만 한 가지 분명한 것은 그 누구도 람머스의 정체를 제대로 알지 못한다는 것. 베일에 가려진 수수께끼의 존재라는 사실이다. 뾰족한 못이 박힌 갑옷을 입고 다니는 그를 두고 사람들은 여러가지 추측을 내놓는다. 반신반인의 존재라느니, 신성한 사제라느니, 마술에 걸린 야수일 뿐이라는...`,
        image: require('../../assets/lol_hero_icons/Rammus.png'),
        background_image: require('../../assets/lol_hero_icons/background/Rammus.jpg'),
        stats: {"hp": 675, "hpperlevel": 94, "mp": 310, "mpperlevel": 33, "movespeed": 335, "armor": 40, "armorperlevel": 5.5, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 8, "hpregenperlevel": 0.55, "mpregen": 7.85, "mpregenperlevel": 0.5, "crit": 0, "critperlevel": 0, "attackdamage": 55, "attackdamageperlevel": 2.75, "attackspeedperlevel": 2.215, "attackspeed": 0.656},
        spells: [
            {
                id: 'passive',
                name: '가시박힌 껍질',
                description: `람머스가 기본 공격 시 방어력에 비례해 추가 마법 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Armordillo_ScavengeArmor.png')
            },
            {
                id: 'PowerBall',
                name: '대회전',
                description: `람머스가 공 모양으로 적을 향해 굴러가며 충돌 시 피해를 입히고 적의 이동 속도를 늦춥니다.`,
                cooldownBurn: '16/13.5/11/8.5/6',
                image: require('../../assets/lol_hero_icons/skills/PowerBall.png')
            },
            {
                id: 'DefensiveBallCurl',
                name: '몸 말아 웅크리기',
                description: `람머스가 방어 자세로 들어가 방어력 및 마법 저항력이 증가합니다. 가시박힌 껍질의 위력이 강화되고 적의 기본 공격을 반사합니다.`,
                cooldownBurn: '7',
                image: require('../../assets/lol_hero_icons/skills/DefensiveBallCurl.png')
            },
            {
                id: 'PuncturingTaunt',
                name: '광란의 도발',
                description: `람머스가 적 챔피언이나 몬스터를 도발하여 자신을 향해 무모하게 덤벼들도록 합니다. 잠깐 동안 공격 속도가 증가하며, 다른 스킬을 사용하면 이 효과의 지속시간이 늘어납니다.`,
                cooldownBurn: '12',
                image: require('../../assets/lol_hero_icons/skills/PuncturingTaunt.png')
            },
            {
                id: 'Tremors2',
                name: '지진 폭격',
                description: `람머스가 공중으로 뛰어오른 후 대상 지점에 착지하여 마법 피해를 입히고 적을 둔화시킵니다. 대회전 상태에서 사용하면 범위 중앙 근처에 있는 적을 공중으로 띄워 올립니다.`,
                cooldownBurn: '90',
                image: require('../../assets/lol_hero_icons/skills/Tremors2.png')
            },
        ],
    },
    {
        numID: 105,
        id: 'RekSai_jug',
        Key: '421',
        name: '렉사이',
        title: '공허의 복병',
        lore: `최상위 포식자 렉사이는 무자비한 공허 태생 생명체로, 땅굴을 파고 들어가 있다가 방심한 먹잇감을 덮쳐 게걸스럽게 집어삼킨다. 렉사이의 그칠 줄 모르는 식탐 때문에 위대한 슈리마 제국 전체가 초토화되었을 정도다. 사막을 오가는 상인이나 여행자들은 아무리 철저하게 무장을 했더라도 렉사이의 영토를 피하려고 일부러 멀고 먼 길을 돌아가곤 한다. 렉사이가 지평선에 보이면, 지하에서 기다리고 있는 것은 죽음 뿐이라는 것을 모르는 사람은 없다.`,
        blurb: `최상위 포식자 렉사이는 무자비한 공허 태생 생명체로, 땅굴을 파고 들어가 있다가 방심한 먹잇감을 덮쳐 게걸스럽게 집어삼킨다. 렉사이의 그칠 줄 모르는 식탐 때문에 위대한 슈리마 제국 전체가 초토화되었을 정도다. 사막을 오가는 상인이나 여행자들은 아무리 철저하게 무장을 했더라도 렉사이의 영토를 피하려고 일부러 멀고 먼 길을 돌아가곤 한다. 렉사이가 지평선에 보이면, 지하에서 기다리고 있는 것은 죽음 뿐이라는 것을 모르는 사람은 없다.`,
        image: require('../../assets/lol_hero_icons/RekSai.png'),
        background_image: require('../../assets/lol_hero_icons/background/RekSai.jpg'),
        stats: {"hp": 600, "hpperlevel": 99, "mp": 100, "mpperlevel": 0, "movespeed": 340, "armor": 36, "armorperlevel": 4.95, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 2.5, "hpregenperlevel": 0.5, "mpregen": 0, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 58, "attackdamageperlevel": 3, "attackspeedperlevel": 2, "attackspeed": 0.667},
        spells: [
            {
                id: 'passive',
                name: '제르사이의 분노',
                description: `렉사이의 기본 공격과 기본 스킬이 적중할 때마다 분노가 생성됩니다. 생성된 분노는 매복 상태일 때 체력 회복에 사용됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/RekSai_Passive.png')
            },
            {
                id: 'RekSaiQ',
                name: '여왕의 진노 / 먹잇감 추적',
                description: `렉사이의 다음 3번의 기본 공격은 주변 적들에게 추가 물리 피해를 입힙니다.매복 상태일 때는 렉사이가 공허 에너지가 주입된 흙을 발사하여, 여기 맞는 적들은 피해를 입고 위치가 드러납니다.`,
                cooldownBurn: '4/3.5/3/2.5/2',
                image: require('../../assets/lol_hero_icons/skills/RekSaiQ.png')
            },
            {
                id: 'RekSaiW',
                name: '매복 / 돌출',
                description: `렉사이가 지면을 파고들어가 새로운 스킬을 사용하게 되며 이동 속도가 상승합니다. 시야 범위가 좁아지며 기본 공격을 할 수 없게 됩니다.매복 상태일 때는 렉사이가 돌출 스킬을 사용하여 튀어 올라, 주위 적들을 공중으로 띄우고 피해를 입힐 수 있습니다.`,
                cooldownBurn: '4',
                image: require('../../assets/lol_hero_icons/skills/RekSaiW.png')
            },
            {
                id: 'RekSaiE',
                name: '성난 이빨 / 땅굴 파기',
                description: `렉사이가 대상을 물어뜯습니다. 분노가 최대치일 때는 추가 피해를 입힙니다.매복 상태일 때 렉사이가 재사용 가능하며 오래 지속되는 땅굴을 만듭니다. 적이 이 땅굴 입구에 올라서면 파괴됩니다.`,
                cooldownBurn: '10',
                image: require('../../assets/lol_hero_icons/skills/RekSaiE.png')
            },
            {
                id: 'RekSaiR',
                name: '공허의 돌진',
                description: `기본 지속 효과로 렉사이가 피해를 입힌 대상에게 표식을 남깁니다. 스킬을 사용하면 잠시 대상으로 지정될 수 없는 상태가 되며, 표식이 있는 대상에게 도약하여 잃은 체력에 비례해 큰 피해를 입힙니다.`,
                cooldownBurn: '100/90/80',
                image: require('../../assets/lol_hero_icons/skills/RekSaiR.png')
            },
        ],
    },
    {
        numID: 106,
        id: 'Rell_sup_jug',
        Key: '526',
        name: '렐',
        title: '철의 여인',
        lore: `검은 장미단의 악랄한 실험으로 탄생한 렐은 녹서스의 전복만을 위해 달리는 생체 무기이다. 금속을 조종하는 능력 때문에 그녀는 고통과 공포로 점철된 어린 시절을 보내며 끔찍한 전투 훈련을 받아야 했다. 견디다 못한 나머지 자신을 구속한 자들을 죽이고 도망쳤고, 결국 범죄자로 낙인찍혔다. 자유의 몸이 된 렐은 이제 자신과 같은 고통을 겪던 아이들을 구출하며 녹서스 병사들을 보이는 대로 처치한다. 그리고 과거의 스승들에게는 무자비한 죽음을 안겨 주고, 약자들은 보호한다.`,
        blurb: `검은 장미단의 악랄한 실험으로 탄생한 렐은 녹서스의 전복만을 위해 달리는 생체 무기이다. 금속을 조종하는 능력 때문에 그녀는 고통과 공포로 점철된 어린 시절을 보내며 끔찍한 전투 훈련을 받아야 했다. 견디다 못한 나머지 자신을 구속한 자들을 죽이고 도망쳤고, 결국 범죄자로 낙인찍혔다. 자유의 몸이 된 렐은 이제 자신과 같은 고통을 겪던 아이들을 구출하며 녹서스 병사들을 보이는 대로 처치한다. 그리고 과거의 스승들에게는 무자비한 죽음을 안겨 주고...`,
        image: require('../../assets/lol_hero_icons/Rell.png'),
        background_image: require('../../assets/lol_hero_icons/background/Rell.jpg'),
        stats: {"hp": 610, "hpperlevel": 104, "mp": 350, "mpperlevel": 45, "movespeed": 330, "armor": 36, "armorperlevel": 4.2, "spellblock": 30, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 7.5, "hpregenperlevel": 0.85, "mpregen": 6, "mpregenperlevel": 0.35, "crit": 0, "critperlevel": 0, "attackdamage": 55, "attackdamageperlevel": 3, "attackspeedperlevel": 1.5, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '갑옷 파쇄',
                description: `렐의 기본 공격과 스킬이 적중 시 방어력과 마법 저항력을 훔칩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/RellP.png')
            },
            {
                id: 'RellQ',
                name: '파열의 일격',
                description: `렐이 일직선상의 유닛에게 마법 피해를 입히며 보호막을 파괴하고 대상을 기절시킵니다. `,
                cooldownBurn: '11/10.5/10/9.5/9',
                image: require('../../assets/lol_hero_icons/skills/RellQ.png')
            },
            {
                id: 'RellW_Dismount',
                name: '철마술: 붕괴',
                description: `탑승: 렐이 탈것에서 중갑 형태로 뛰어내리며 적들을 공중으로 띄우고 큰 피해를 흡수하는 보호막을 얻습니다. 보행 시 방어력, 마법 저항력, 공격 속도, 공격 사거리가 증가하지만 둔화됩니다.보행: 렐이 탈것에 올라타며 이동 속도가 상승하고 다음 기본 공격 시 적을 공중으로 띄워 올립니다.`,
                cooldownBurn: '11',
                image: require('../../assets/lol_hero_icons/skills/RellW_Dismount.png')
            },
            {
                id: 'RellE',
                name: '전속력',
                description: `기본 지속 효과: 비전투 시 이동 속도가 증가합니다.사용 시: 렐과 아군 하나의 이동 속도가 서서히 증가합니다. 적이나 서로를 향해 이동하면 두 배로 증가합니다. 렐의 다음 공격은 폭발하며 마법 피해를 입힙니다.`,
                cooldownBurn: '15',
                image: require('../../assets/lol_hero_icons/skills/RellE.png')
            },
            {
                id: 'RellR',
                name: '자기 폭풍',
                description: `렐이 자기 폭발을 일으켜 근처 적들을 렐 쪽으로 끌어당깁니다. 그런 다음 잠시 근처 적들을 계속 잡아당기며 마법 피해를 입힙니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/RellR.png')
            },
        ],
    },
    {
        numID: 107,
        id: 'Renata_sup',
        Key: '888',
        name: '레나타 글라스크',
        title: '화공 남작',
        lore: `레나타 글라스크는 어린 시절 집의 잿더미를 딛고 일어섰다. 그때 레나타가 가진 것은 이름과 부모님의 연금술 연구 자료뿐이었다. 수십 년이 지나, 레나타는 자운에서 가장 부유한 화공 남작 겸 거물 사업가가 되었다. 그녀는 모든 사람의 이해관계를 자신과 묶어서 막대한 힘을 쌓았다. 레나타와 함께하는 자는 상상 이상의 보상을 받는다. 레나타를 거스르는 자는 그 선택을 후회하며 살아간다. 하지만 결국에는 모두가 그녀의 편에 설 것이다.`,
        blurb: `레나타 글라스크는 어린 시절 집의 잿더미를 딛고 일어섰다. 그때 레나타가 가진 것은 이름과 부모님의 연금술 연구 자료뿐이었다. 수십 년이 지나, 레나타는 자운에서 가장 부유한 화공 남작 겸 거물 사업가가 되었다. 그녀는 모든 사람의 이해관계를 자신과 묶어서 막대한 힘을 쌓았다. 레나타와 함께하는 자는 상상 이상의 보상을 받는다. 레나타를 거스르는 자는 그 선택을 후회하며 살아간다. 하지만 결국에는 모두가 그녀의 편에 설 것이다.`,
        image: require('../../assets/lol_hero_icons/Renata.png'),
        background_image: require('../../assets/lol_hero_icons/background/Renata.jpg'),
        stats: {"hp": 545, "hpperlevel": 94, "mp": 350, "mpperlevel": 50, "movespeed": 330, "armor": 27, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 5.5, "hpregenperlevel": 0.55, "mpregen": 11.5, "mpregenperlevel": 0.5, "crit": 0, "critperlevel": 0, "attackdamage": 49, "attackdamageperlevel": 3, "attackspeedperlevel": 2.11, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '영향력',
                description: `레나타의 기본 공격이 추가 피해를 입히고 표식을 남깁니다. 아군은 표식이 남은 적을 공격해 추가 피해를 입힐 수 있습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Renata_P.png')
            },
            {
                id: 'RenataQ',
                name: '악수',
                description: `레나타가 미사일을 발사해 처음 적중하는 적을 속박합니다. 스킬을 재사용해 대상을 지정한 방향으로 던질 수 있습니다.`,
                cooldownBurn: '16',
                image: require('../../assets/lol_hero_icons/skills/RenataQ.png')
            },
            {
                id: 'RenataW',
                name: '긴급 구제',
                description: `레나타가 아군 챔피언을 강화하고 죽음을 늦춥니다. 해당 아군이 처치에 관여하면 목숨을 건질 수 있습니다.`,
                cooldownBurn: '28/27/26/25/24',
                image: require('../../assets/lol_hero_icons/skills/RenataW.png')
            },
            {
                id: 'RenataE',
                name: '충성 고객 우대',
                description: `레나타가 화학공학 미사일 두 발을 발사해 아군에게 보호막을 씌우며 적중하는 적에게 피해를 입히고 둔화시킵니다.`,
                cooldownBurn: '14/13/12/11/10',
                image: require('../../assets/lol_hero_icons/skills/RenataE.png')
            },
            {
                id: 'RenataR',
                name: '적대적 인수',
                description: `레나타가 화학 물질의 파도를 방출해 적중하는 적을 광란 상태에 빠트립니다.`,
                cooldownBurn: '150/130/110',
                image: require('../../assets/lol_hero_icons/skills/RenataR.png')
            },
        ],
    },
    {
        numID: 108,
        id: 'Renekton_top_mid',
        Key: '58',
        name: '레넥톤',
        title: '사막의 도살자',
        lore: `불길에 그을린 슈리마 사막에서 다시 일어선 무시무시한 분노의 초월체, 레넥톤. 한 때 그는 슈리마 최고의 전사로서 무수한 전쟁을 승리로 이끌었다. 하지만 슈리마의 몰락과 함께 사막 아래 무덤 속에 갇혔고, 강산이 변하는 억겁의 세월을 어둠 속에서 보내면서 서서히 광기에 굴복해 갔다. 다시 자유의 몸이 된 레넥톤이 원하는 것은 단 하나, 자신을 가둔 형에 대한 복수뿐이다.`,
        blurb: `불길에 그을린 슈리마 사막에서 다시 일어선 무시무시한 분노의 초월체, 레넥톤. 한 때 그는 슈리마 최고의 전사로서 무수한 전쟁을 승리로 이끌었다. 하지만 슈리마의 몰락과 함께 사막 아래 무덤 속에 갇혔고, 강산이 변하는 억겁의 세월을 어둠 속에서 보내면서 서서히 광기에 굴복해 갔다. 다시 자유의 몸이 된 레넥톤이 원하는 것은 단 하나, 자신을 가둔 형에 대한 복수뿐이다.`,
        image: require('../../assets/lol_hero_icons/Renekton.png'),
        background_image: require('../../assets/lol_hero_icons/background/Renekton.jpg'),
        stats: {"hp": 660, "hpperlevel": 111, "mp": 100, "mpperlevel": 0, "movespeed": 345, "armor": 35, "armorperlevel": 5.2, "spellblock": 28, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 8, "hpregenperlevel": 0.75, "mpregen": 0, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 69, "attackdamageperlevel": 4.15, "attackspeedperlevel": 2.75, "attackspeed": 0.665},
        spells: [
            {
                id: 'passive',
                name: '분노의 지배',
                description: `레넥톤이 기본 공격 시 분노를 생성합니다. 레넥톤의 체력이 낮으면 생성되는 분노가 증가합니다. 분노는 레넥톤의 스킬을 강화시키며 추가 효과를 줍니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Renekton_Passive.png')
            },
            {
                id: 'RenektonCleave',
                name: '양떼 도륙',
                description: `레넥톤이 검을 휘둘러 주변의 모든 적에게 어느 정도의 물리 피해를 입히고, 해당 피해 수치의 일부를 체력으로 회복합니다. 분노가 50이상 쌓이면 피해량과 치료 능력이 모두 상승합니다.`,
                cooldownBurn: '7',
                image: require('../../assets/lol_hero_icons/skills/RenektonCleave.png')
            },
            {
                id: 'RenektonPreExecute',
                name: '무자비한 포식자',
                description: `레넥톤이 적을 두 번 베어 어느 정도의 물리 피해를 입히며, 0.75초 동안 적을 기절시킵니다. 레넥톤의 분노가 50 이상일 경우 적을 세 번 베어 대상의 보호막을 파괴한 후 높은 물리 피해를 입히고 1.5초 동안 적을 기절시킵니다.`,
                cooldownBurn: '16/14/12/10/8',
                image: require('../../assets/lol_hero_icons/skills/RenektonPreExecute.png')
            },
            {
                id: 'RenektonSliceAndDice',
                name: '자르고 토막내기',
                description: `레넥톤이 돌격을 하며 여러 적 유닛에게 피해를 입힙니다. 강화시 레넥톤은 적에게 추가 피해를 입히고 방어력을 낮출 수 있습니다.`,
                cooldownBurn: '16/14.5/13/11.5/10',
                image: require('../../assets/lol_hero_icons/skills/RenektonSliceAndDice.png')
            },
            {
                id: 'RenektonReignOfTheTyrant',
                name: '강신',
                description: `레넥톤이 폭군의 형상을 취하여 추가 체력을 얻고 주변 적에게 피해를 입힙니다. 폭군 형태로 있는 동안에는 레넥톤의 분노가 주기적으로 상승합니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/RenektonReignOfTheTyrant.png')
            },
        ],
    },
    {
        numID: 109,
        id: 'Rengar_top_jug',
        Key: '107',
        name: '렝가',
        title: '추적하는 사자',
        lore: `포악한 기질의 렝가는 바스타야 종족으로, 난폭하고 사나운 생명체를 추적하고 처치하는 순간의 짜릿한 전율을 삶의 낙으로 여기는 전리품 수집가다. 그는 강하고 무시무시한 괴물을 사냥하기 위해 온 세상을 샅샅이 뒤진다. 그중에서도 그가 가장 찾고자 하는 사냥감은 그의 한쪽 눈을 앗아간 공허의 약탈자 카직스다. 렝가가 사냥을 하는 이유는 굶주린 배를 채우기 위함도, 영광을 누리기 위함도 아니다. 그는 사냥 그 자체의 즐거움을 만끽하기 위해 오늘도 먹잇감을 찾아 나선다.`,
        blurb: `포악한 기질의 렝가는 바스타야 종족으로, 난폭하고 사나운 생명체를 추적하고 처치하는 순간의 짜릿한 전율을 삶의 낙으로 여기는 전리품 수집가다. 그는 강하고 무시무시한 괴물을 사냥하기 위해 온 세상을 샅샅이 뒤진다. 그중에서도 그가 가장 찾고자 하는 사냥감은 그의 한쪽 눈을 앗아간 공허의 약탈자 카직스다. 렝가가 사냥을 하는 이유는 굶주린 배를 채우기 위함도, 영광을 누리기 위함도 아니다. 그는 사냥 그 자체의 즐거움을 만끽하기 위해 오늘도 먹잇감을...`,
        image: require('../../assets/lol_hero_icons/Rengar.png'),
        background_image: require('../../assets/lol_hero_icons/background/Rengar.jpg'),
        stats: {"hp": 590, "hpperlevel": 104, "mp": 4, "mpperlevel": 0, "movespeed": 345, "armor": 34, "armorperlevel": 4.2, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 6, "hpregenperlevel": 0.5, "mpregen": 0, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 68, "attackdamageperlevel": 3, "attackspeedperlevel": 3, "attackspeed": 0.667},
        spells: [
            {
                id: 'passive',
                name: '보이지 않는 포식자',
                description: `수풀에서 기본 공격을 사용하면 대상에게 도약합니다.스킬을 사용하면 야성 중첩을 얻습니다. 야성이 최대로 중첩되면 다음 스킬 공격이 강화됩니다.적 챔피언을 처치하면 뼈이빨 목걸이에 걸 전리품이 늘어나며 추가 공격력을 얻습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Rengar_P.png')
            },
            {
                id: 'RengarQ',
                name: '포악함',
                description: `렝가의 다음 기본 공격이 적을 찌르며 추가 피해를 입힙니다.야성 효과: 피해량과 공격 속도가 증가합니다.`,
                cooldownBurn: '0.25',
                image: require('../../assets/lol_hero_icons/skills/RengarQ.png')
            },
            {
                id: 'RengarW',
                name: '전투의 포효',
                description: `렝가가 전투의 포효를 내질러 적에게 피해를 입히고 지난 몇 초 동안 입은 피해의 일부를 회복합니다.야성 효과: 모든 군중 제어 효과를 없앱니다.`,
                cooldownBurn: '0.25',
                image: require('../../assets/lol_hero_icons/skills/RengarW.png')
            },
            {
                id: 'RengarE',
                name: '올가미 투척',
                description: `렝가가 올가미를 투척하여, 처음 맞은 대상에게 짧은 시간 동안 둔화를 겁니다.야성 효과: 대상을 제자리에 묶습니다.`,
                cooldownBurn: '0.25',
                image: require('../../assets/lol_hero_icons/skills/RengarE.png')
            },
            {
                id: 'RengarR',
                name: '사냥의 전율',
                description: `렝가가 맹수의 본능을 발동해 위장 상태가 되고 일정 범위 내에서 가장 가까이에 있는 적을 드러내 확인할 수 있습니다. 사냥의 전율이 활성화된 동안에는 이동 속도가 빨라지고 수풀에 있지 않아도 확인한 적에게 도약할 수 있으며, 이때 대상의 방어력을 감소시킵니다.`,
                cooldownBurn: '110/100/90',
                image: require('../../assets/lol_hero_icons/skills/RengarR.png')
            },
        ],
    },
    {
        numID: 110,
        id: 'Riven_top_mid',
        Key: '92',
        name: '리븐',
        title: '추방자',
        lore: `한때 녹서스 군의 소드마스터였던 리븐은 그녀가 정복하려던 땅에서 추방자로 살아가고 있다. 그녀는 확고한 믿음과 잔혹함에 가까운 능력에 힘입어 상급 군인으로 진급하고 전설의 룬 검과 군대를 포상으로 받았다. 그러나 녹서스에 대한 리븐의 믿음은 아이오니아 전선에서 시험대에 올랐고 결국 산산히 깨지고 말았다. 제국과의 모든 연결고리를 끊어버린 그녀는 산산이 조각난 세상 속 몸을 맡길 곳을 찾아 방랑하고 있다. 녹서스 제국이 재건되었다는 무성한 소문에도 불구하고...`,
        blurb: `한때 녹서스 군의 소드마스터였던 리븐은 그녀가 정복하려던 땅에서 추방자로 살아가고 있다. 그녀는 확고한 믿음과 잔혹함에 가까운 능력에 힘입어 상급 군인으로 진급하고 전설의 룬 검과 군대를 포상으로 받았다. 그러나 녹서스에 대한 리븐의 믿음은 아이오니아 전선에서 시험대에 올랐고 결국 산산히 깨지고 말았다. 제국과의 모든 연결고리를 끊어버린 그녀는 산산이 조각난 세상 속 몸을 맡길 곳을 찾아 방랑하고 있다. 녹서스 제국이 재건되었다는 무성한 소문에도...`,
        image: require('../../assets/lol_hero_icons/Riven.png'),
        background_image: require('../../assets/lol_hero_icons/background/Riven.jpg'),
        stats: {"hp": 630, "hpperlevel": 100, "mp": 0, "mpperlevel": 0, "movespeed": 340, "armor": 33, "armorperlevel": 4.4, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 8.5, "hpregenperlevel": 0.5, "mpregen": 0, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 64, "attackdamageperlevel": 3, "attackspeedperlevel": 3.5, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '룬 검',
                description: `리븐이 스킬을 사용하면 검이 충전됩니다. 기본 공격을 가하면 충전 횟수를 소모해 추가 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/RivenRunicBlades.png')
            },
            {
                id: 'RivenTriCleave',
                name: '부러진 날개',
                description: `리븐이 돌진하며 적을 베어 넘깁니다. 이 스킬은 세 번 사용할 수 있으며 세 번째로 사용할 때에는 맞은 적을 밀쳐냅니다.`,
                cooldownBurn: '13',
                image: require('../../assets/lol_hero_icons/skills/RivenTriCleave.png')
            },
            {
                id: 'RivenMartyr',
                name: '기 폭발',
                description: `리븐이 기를 폭발시켜 근처의 적에게 피해를 주며 기절시킵니다.`,
                cooldownBurn: '11/10/9/8/7',
                image: require('../../assets/lol_hero_icons/skills/RivenMartyr.png')
            },
            {
                id: 'RivenFeint',
                name: '용맹',
                description: `리븐이 짧은 거리를 나아가며 피해를 일부 흡수합니다.`,
                cooldownBurn: '10/9/8/7/6',
                image: require('../../assets/lol_hero_icons/skills/RivenFeint.png')
            },
            {
                id: 'RivenFengShuiEngine',
                name: '추방자의 검',
                description: `리븐이 자신의 옛 검에 힘을 불어넣어 추가 공격력과 공격 사거리를 얻습니다. 또한, 지속시간동안 강력한 원거리 스킬인 바람 가르기를 한 번 사용할 수 있게 됩니다.`,
                cooldownBurn: '120/90/60',
                image: require('../../assets/lol_hero_icons/skills/RivenFengShuiEngine.png')
            },
        ],
    },
    {
        numID: 111,
        id: 'Rumble_top_mid_jug',
        Key: '68',
        name: '럼블',
        title: '기계 악동',
        lore: `럼블은 한 성깔 하는 젊은 요들로, 탁월한 발명가이기도 하다. 두 손과 고철 더미만으로 전기 작살과 소이 로켓을 장착한 거대 기계 로봇을 뚝딱 만들어냈다. 고철부품으로 만든 럼블의 작품을 비웃고 조롱하는 자가 있더라도 럼블은 눈 하나 깜박하지 않는다. 어차피 전장을 휩쓸 화염방사기는 자신의 손에 있으니까.`,
        blurb: `럼블은 한 성깔 하는 젊은 요들로, 탁월한 발명가이기도 하다. 두 손과 고철 더미만으로 전기 작살과 소이 로켓을 장착한 거대 기계 로봇을 뚝딱 만들어냈다. 고철부품으로 만든 럼블의 작품을 비웃고 조롱하는 자가 있더라도 럼블은 눈 하나 깜박하지 않는다. 어차피 전장을 휩쓸 화염방사기는 자신의 손에 있으니까.`,
        image: require('../../assets/lol_hero_icons/Rumble.png'),
        background_image: require('../../assets/lol_hero_icons/background/Rumble.jpg'),
        stats: {"hp": 625, "hpperlevel": 105, "mp": 150, "mpperlevel": 0, "movespeed": 345, "armor": 36, "armorperlevel": 4.7, "spellblock": 28, "spellblockperlevel": 1.55, "attackrange": 125, "hpregen": 7, "hpregenperlevel": 0.6, "mpregen": 0, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 64, "attackdamageperlevel": 3.2, "attackspeedperlevel": 1.85, "attackspeed": 0.644},
        spells: [
            {
                id: 'passive',
                name: '고철장 거인',
                description: `럼블은 스킬을 사용할 때마다 열기를 얻습니다. 열기가 50%에 달하면 럼블은 위험 상태에 들어갑니다. 위험 상태가 되면 럼블의 모든 스킬은 추가 효과를 얻습니다. 열기가 100%에 달하면 과열 상태가 되어 공격 속도가 증가하고 기본 공격에 마법 피해가 추가되며 몇 초간 스킬을 사용할 수 없게 됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Rumble_JunkyardTitan1.png')
            },
            {
                id: 'RumbleFlameThrower',
                name: '화염방사기',
                description: `럼블이 3초 동안 정면을 향해 원뿔 형태의 공격을 가하며 적에게 불을 붙이고 마법 피해를 입힙니다. 위험 상태일 경우 피해가 증가합니다.`,
                cooldownBurn: '10/9/8/7/6',
                image: require('../../assets/lol_hero_icons/skills/RumbleFlameThrower.png')
            },
            {
                id: 'RumbleShield',
                name: '고철 방패',
                description: `럼블이 방어막을 전개하여 피해를 입지 않도록 자신을 보호하고 순간적으로 이동 속도를 높입니다. 위험 상태에서는 방어막의 내구력과 럼블의 이동 속도 증가량이 증가합니다.`,
                cooldownBurn: '6',
                image: require('../../assets/lol_hero_icons/skills/RumbleShield.png')
            },
            {
                id: 'RumbleGrenade',
                name: '전기 작살',
                description: `럼블이 작살을 발사하여 대상을 감전시키고 마법 피해를 입히면서 이동 속도와 마법 저항력을 감소시킵니다. 럼블은 최대 2개의 작살을 보유할 수 있습니다. 위험 상태일 경우 피해량과 적 둔화율이 증가합니다.`,
                cooldownBurn: '0.5',
                image: require('../../assets/lol_hero_icons/skills/RumbleGrenade.png')
            },
            {
                id: 'RumbleCarpetBomb',
                name: '이퀄라이저 미사일',
                description: `럼블이 로켓을 한꺼번에 발사하여 화염의 벽을 만들면, 해당 지점을 지나는 적은 피해를 입고 속도가 느려집니다.`,
                cooldownBurn: '130/105/80',
                image: require('../../assets/lol_hero_icons/skills/RumbleCarpetBomb.png')
            },
        ],
    },
    {
        numID: 112,
        id: 'Ryze_top_mid',
        Key: '13',
        name: '라이즈',
        title: '룬 마법사',
        lore: `룬테라의 최고 마법사로 널리 알려진 라이즈는 산전수전을 겪으며 중차대한 임무를 수행하는 고대의 대마법사다. 가공할 마력과 무한한 체력을 보유한 그는, 태초에 무에서 세계를 창조한 원초적 마법의 파편인 룬을 찾기 위해 쉴 틈 없이 이곳저곳을 떠돌고 있다. 룬이 룬테라에 어떤 참사를 일으킬 수 있는지 알고 있기에 라이즈는 룬이 잘못된 손에 들어가지 않도록 빠짐없이 찾아야만 한다.`,
        blurb: `룬테라의 최고 마법사로 널리 알려진 라이즈는 산전수전을 겪으며 중차대한 임무를 수행하는 고대의 대마법사다. 가공할 마력과 무한한 체력을 보유한 그는, 태초에 무에서 세계를 창조한 원초적 마법의 파편인 룬을 찾기 위해 쉴 틈 없이 이곳저곳을 떠돌고 있다. 룬이 룬테라에 어떤 참사를 일으킬 수 있는지 알고 있기에 라이즈는 룬이 잘못된 손에 들어가지 않도록 빠짐없이 찾아야만 한다.`,
        image: require('../../assets/lol_hero_icons/Ryze.png'),
        background_image: require('../../assets/lol_hero_icons/background/Ryze.jpg'),
        stats: {"hp": 645, "hpperlevel": 124, "mp": 300, "mpperlevel": 70, "movespeed": 340, "armor": 22, "armorperlevel": 4.2, "spellblock": 32, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 8, "hpregenperlevel": 0.8, "mpregen": 8, "mpregenperlevel": 1, "crit": 0, "critperlevel": 0, "attackdamage": 58, "attackdamageperlevel": 3, "attackspeedperlevel": 2.11, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '비전 연마',
                description: `라이즈의 스킬이 추가 마나에 따라 추가 피해를 입히고, 최대 마나가 주문력에 비례해 증가합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Ryze_P.png')
            },
            {
                id: 'RyzeQWrapper',
                name: '과부하',
                description: `기본 지속 효과로 라이즈가 다른 스킬을 사용하면 과부하의 재사용 대기시간이 초기화되고 룬 하나를 충전합니다. 룬이 2개 충전된 상태에서 과부하를 사용하면 이동 속도가 잠시 대폭 증가합니다.사용 시 라이즈가 순수한 에너지를 일직선으로 발사해 첫 번째 맞는 적에게 피해를 입힙니다. 대상에게 전이 표식이 있으면 과부하가 추가 피해를 입히고 전이 표식이 있는 주변 적에게 튕깁니다.`,
                cooldownBurn: '5',
                image: require('../../assets/lol_hero_icons/skills/RyzeQWrapper.png')
            },
            {
                id: 'RyzeW',
                name: '룬 감옥',
                description: `라이즈가 대상을 룬 감옥에 가두고 피해를 입히며 이동 속도를 늦춥니다. 대상에게 전이 표식이 있으면 이동 속도를 늦추는 대신 속박합니다.`,
                cooldownBurn: '11/10.5/10/9.5/9',
                image: require('../../assets/lol_hero_icons/skills/RyzeW.png')
            },
            {
                id: 'RyzeE',
                name: '주문 전이',
                description: `라이즈가 순수한 마법의 구체를 던져 적에게 피해를 입히고 주변 모든 적에게 표식을 남깁니다. 표식이 남은 적에게 라이즈가 스킬을 사용하면 추가 효과가 적용됩니다.`,
                cooldownBurn: '3.5/3.25/3/2.75/2.5',
                image: require('../../assets/lol_hero_icons/skills/RyzeE.png')
            },
            {
                id: 'RyzeR',
                name: '공간 왜곡',
                description: `기본 지속 효과로 과부하가 전이 표식이 있는 적에게 더 큰 피해를 입힙니다.사용 시 라이즈가 근처에 차원문을 생성합니다. 몇 초 후, 차원문 주변의 모든 아군이 대상 지점으로 순간이동 합니다.`,
                cooldownBurn: '180/160/140',
                image: require('../../assets/lol_hero_icons/skills/RyzeR.png')
            },
        ],
    },
    {
        numID: 113,
        id: 'Samira_adc',
        Key: '360',
        name: '사미라',
        title: '사막의 장미',
        lore: `사미라는 죽음의 순간에서도 눈 하나 깜짝하지 않는다. 그저 어디에 있든 도전을 찾아 헤맬 뿐이다. 어린 시절 슈리마의 고향이 파괴된 후로 녹서스에서 자신의 길을 찾았고, 그때부터 화려하면서도 무모한 방식으로 위험한 임무를 탁월하게 수행하는 자라는 명성을 쌓았다. 검은 화약을 담은 권총과 자신을 위해 정교히 만들어진 칼날과 함께, 사미라는 생사의 상황에서 빠른 몸놀림과 재능으로 그녀의 앞을 가로막는 자들을 모두 제거한다.`,
        blurb: `사미라는 죽음의 순간에서도 눈 하나 깜짝하지 않는다. 그저 어디에 있든 도전을 찾아 헤맬 뿐이다. 어린 시절 슈리마의 고향이 파괴된 후로 녹서스에서 자신의 길을 찾았고, 그때부터 화려하면서도 무모한 방식으로 위험한 임무를 탁월하게 수행하는 자라는 명성을 쌓았다. 검은 화약을 담은 권총과 자신을 위해 정교히 만들어진 칼날과 함께, 사미라는 생사의 상황에서 빠른 몸놀림과 재능으로 그녀의 앞을 가로막는 자들을 모두 제거한다.`,
        image: require('../../assets/lol_hero_icons/Samira.png'),
        background_image: require('../../assets/lol_hero_icons/background/Samira.jpg'),
        stats: {"hp": 630, "hpperlevel": 108, "mp": 349, "mpperlevel": 38, "movespeed": 335, "armor": 26, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 500, "hpregen": 3.25, "hpregenperlevel": 0.55, "mpregen": 8.2, "mpregenperlevel": 0.7, "crit": 0, "critperlevel": 0, "attackdamage": 57, "attackdamageperlevel": 3, "attackspeedperlevel": 3.3, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '무모한 충동',
                description: `사미라가 마지막으로 맞힌 공격과 다른 기본 공격 또는 스킬을 적중시키면 콤보를 1회 쌓습니다. 근접 공격 사거리 내에 있는 적을 공격하면 추가 마법 피해를 입힙니다. 이동 불가 효과에 영향을 받은 적에게 기본 공격을 가하면 최대 사거리까지 돌진합니다. 해당 적이 공중으로 띄워진 상태라면 사미라도 대상을 잠시 동안 공중으로 띄워 올립니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/SamiraP.png')
            },
            {
                id: 'SamiraQ',
                name: '천부적 재능',
                description: `사미라가 총을 쏘거나 검을 휘둘러 피해를 입힙니다. 거침없는 질주 도중 사용하면 돌진이 끝난 후 경로 내에 있는 모든 적을 공격합니다.`,
                cooldownBurn: '6/5/4/3/2',
                image: require('../../assets/lol_hero_icons/skills/SamiraQ.png')
            },
            {
                id: 'SamiraW',
                name: '원형 검무',
                description: `사미라가 주변에 검을 휘두르며 적에게 피해를 입히고 적의 투사체를 파괴합니다.`,
                cooldownBurn: '30/28/26/24/22',
                image: require('../../assets/lol_hero_icons/skills/SamiraW.png')
            },
            {
                id: 'SamiraE',
                name: '거침없는 질주',
                description: `사미라가 적(구조물 포함)을 통과해 돌진합니다. 돌진 도중 통과하는 모든 적을 베고 공격 속도를 얻습니다. 적 챔피언을 처치하면 이 스킬의 재사용 대기시간이 초기화됩니다.`,
                cooldownBurn: '20/18/16/14/12',
                image: require('../../assets/lol_hero_icons/skills/SamiraE.png')
            },
            {
                id: 'SamiraR',
                name: '지옥불 난사',
                description: `사미라가 무기를 난사해 주변의 모든 적에게 공격을 퍼붓습니다.`,
                cooldownBurn: '5',
                image: require('../../assets/lol_hero_icons/skills/SamiraR.png')
            },
        ],
    },
    {
        numID: 114,
        id: 'Sejuani_jug',
        Key: '113',
        name: '세주아니',
        title: '혹한의 분노',
        lore: `세주아니는 프렐요드에서 가장 공포스러운 부족 중 하나로 꼽히는 겨울 발톱 부족의 잔혹하고 무자비한 냉기의 화신이자 전쟁의 어머니이다. 세주아니의 부족은 생존을 위해 자연과 끊임 없이 절박한 싸움을 했고, 혹독한 겨울에서 살아남기 위해 녹서스, 데마시아, 아바로사를 침공해야 했다. 세주아니는 가장 위험한 공격의 선봉에 서서 멧돼지 브리슬의 안장에 타고 얼음 정수의 철퇴를 휘둘러 적을 얼리고 깨뜨린다.`,
        blurb: `세주아니는 프렐요드에서 가장 공포스러운 부족 중 하나로 꼽히는 겨울 발톱 부족의 잔혹하고 무자비한 냉기의 화신이자 전쟁의 어머니이다. 세주아니의 부족은 생존을 위해 자연과 끊임 없이 절박한 싸움을 했고, 혹독한 겨울에서 살아남기 위해 녹서스, 데마시아, 아바로사를 침공해야 했다. 세주아니는 가장 위험한 공격의 선봉에 서서 멧돼지 브리슬의 안장에 타고 얼음 정수의 철퇴를 휘둘러 적을 얼리고 깨뜨린다.`,
        image: require('../../assets/lol_hero_icons/Sejuani.png'),
        background_image: require('../../assets/lol_hero_icons/background/Sejuani.jpg'),
        stats: {"hp": 630, "hpperlevel": 114, "mp": 400, "mpperlevel": 40, "movespeed": 340, "armor": 34, "armorperlevel": 5.45, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 150, "hpregen": 8.5, "hpregenperlevel": 1, "mpregen": 7, "mpregenperlevel": 0.7, "crit": 0, "critperlevel": 0, "attackdamage": 66, "attackdamageperlevel": 4, "attackspeedperlevel": 3.5, "attackspeed": 0.688},
        spells: [
            {
                id: 'passive',
                name: '혹한의 분노',
                description: `세주아니는 일정 시간 동안 피해를 입지 않으면 서리 갑옷이 생겨 추가 방어력과 마법 저항력을 얻고 둔화 효과에 면역됩니다. 서리 갑옷은 세주아니가 피해를 입은 후에도 잠깐 동안 유지됩니다. 기절한 적을 공격하면 막대한 마법 피해를 입힐 수 있습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Sejuani_passive.png')
            },
            {
                id: 'SejuaniQ',
                name: '혹한의 맹습',
                description: `세주아니가 전방으로 돌진해 적들을 공중으로 띄웁니다. 적 챔피언에게 한 번 부딪히면 돌진을 멈춥니다.`,
                cooldownBurn: '19/17.5/16/14.5/13',
                image: require('../../assets/lol_hero_icons/skills/SejuaniQ.png')
            },
            {
                id: 'SejuaniW',
                name: '혹한의 서릿발',
                description: `세주아니가 철퇴를 두 번 휘둘러 피해를 입히고 적을 둔화시키며 서리 중첩을 적용시킵니다.`,
                cooldownBurn: '9/8/7/6/5',
                image: require('../../assets/lol_hero_icons/skills/SejuaniW.png')
            },
            {
                id: 'SejuaniE',
                name: '만년 서리',
                description: `세주아니가 서리가 최대로 중첩된 대상을 얼리고 기절시킵니다.`,
                cooldownBurn: '1.5',
                image: require('../../assets/lol_hero_icons/skills/SejuaniE.png')
            },
            {
                id: 'SejuaniR',
                name: '빙하 감옥',
                description: `세주아니가 올가미를 던져 첫 번째로 맞힌 챔피언을 얼리고 기절시킵니다. 올가미는 적들을 둔화시키는 얼음 폭풍을 일으킵니다.`,
                cooldownBurn: '130/110/90',
                image: require('../../assets/lol_hero_icons/skills/SejuaniR.png')
            },
        ],
    },
    {
        numID: 115,
        id: 'Senna_sup',
        Key: '235',
        name: '세나',
        title: '구원자',
        lore: `어린 시절부터 초자연적인 검은 안개에 쫓기는 저주를 받은 세나는 빛의 감시자들이라는 신성한 조직에 합류하여 검은 안개에 맹렬히 저항하지만, 잔혹한 악령 쓰레쉬의 손에 쓰러지고 랜턴에 영혼을 사로잡히게 된다. 그러나 희망을 잃지 않은 그녀는 랜턴 안에서 안개의 힘을 활용하는 법을 배워 완전히 새로운 모습으로 다시 태어난다. 이제 빛과 어둠을 모두 다스릴 수 있게 된 세나는 자신의 유물포로 검은 안개에 갇힌 영혼들을 구하고 검은 안개를 자멸케 하고자 한다.`,
        blurb: `어린 시절부터 초자연적인 검은 안개에 쫓기는 저주를 받은 세나는 빛의 감시자들이라는 신성한 조직에 합류하여 검은 안개에 맹렬히 저항하지만, 잔혹한 악령 쓰레쉬의 손에 쓰러지고 랜턴에 영혼을 사로잡히게 된다. 그러나 희망을 잃지 않은 그녀는 랜턴 안에서 안개의 힘을 활용하는 법을 배워 완전히 새로운 모습으로 다시 태어난다. 이제 빛과 어둠을 모두 다스릴 수 있게 된 세나는 자신의 유물포로 검은 안개에 갇힌 영혼들을 구하고 검은 안개를 자멸케 하고자 한다.`,
        image: require('../../assets/lol_hero_icons/Senna.png'),
        background_image: require('../../assets/lol_hero_icons/background/Senna.jpg'),
        stats: {"hp": 530, "hpperlevel": 89, "mp": 350, "mpperlevel": 45, "movespeed": 330, "armor": 28, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 600, "hpregen": 3.5, "hpregenperlevel": 0.55, "mpregen": 11.5, "mpregenperlevel": 0.7, "crit": 0, "critperlevel": 0, "attackdamage": 50, "attackdamageperlevel": 0, "attackspeedperlevel": 2, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '면죄',
                description: `세나 근처에서 유닛이 쓰러지면 그 영혼이 주기적으로 검은 안개에 갇히게 됩니다. 세나는 해당 영혼을 공격하여 영혼을 죽음 속에 가둔 안개를 흡수하고 영혼을 해방시킬 수 있습니다. 안개는 세나의 유물포를 강화시켜 추가 공격력, 공격 사거리, 치명타 확률을 부여합니다. 세나의 유물포 공격 속도가 느려지고 추가 피해를 입히며 잠시 공격 대상의 이동 속도를 일부 흡수합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Senna_Passive.png')
            },
            {
                id: 'SennaQ',
                name: '꿰뚫는 어둠',
                description: `세나가 유물포의 두 총열에서 대상을 관통하는 빛과 그림자를 발사하여 아군의 체력을 회복시키고 적에게는 피해를 줍니다.`,
                cooldownBurn: '15',
                image: require('../../assets/lol_hero_icons/skills/SennaQ.png')
            },
            {
                id: 'SennaW',
                name: '마지막 포옹',
                description: `세나가 검은 안개의 파동을 방출합니다. 검은 안개가 적에게 적중하면 맹렬히 달라붙어 잠시 후 해당 적과 주변의 모든 적을 속박합니다.`,
                cooldownBurn: '11',
                image: require('../../assets/lol_hero_icons/skills/SennaW.png')
            },
            {
                id: 'SennaE',
                name: '검은 안개의 저주',
                description: `세나가 어둠을 받아들이고 망령이 되어 무기에 흡수된 검은 안개를 폭풍으로 만듭니다. 폭풍 속에 들어간 아군은 위장 상태가 되며 세나처럼 망령이 됩니다. 망령이 되면 추가 이동 속도를 얻고 대상으로 지정할 수 없는 상태가 되며 정체를 숨길 수 있습니다.`,
                cooldownBurn: '26/24.5/23/21.5/20',
                image: require('../../assets/lol_hero_icons/skills/SennaE.png')
            },
            {
                id: 'SennaR',
                name: '여명의 그림자',
                description: `세나가 쓰러진 감시자들의 유물석으로부터 힘을 빌려 유물포를 해체한 후 신성한 빛과 그림자로 변형시킵니다. 그리고 전장을 가득 채우는 광선을 쏘아 아군에게 보호막을 부여하고 적에게는 피해를 줍니다.`,
                cooldownBurn: '140/120/100',
                image: require('../../assets/lol_hero_icons/skills/SennaR.png')
            },
        ],
    },
    {
        numID: 116,
        id: 'Seraphine_sup',
        Key: '147',
        name: '세라핀',
        title: '노래하는 별',
        lore: `자운 출신의 부모를 둔 세라핀은 필트오버에서 태어나 다른 사람의 영혼의 소리를 들을 수 있다. 세상이 그녀에게 노래하고 그녀 또한 답가를 불렀다. 어린 시절에는 이 소리가 그녀를 억눌렀지만 이제 그녀는 영감을 위해 소리를 이끌어내고 혼돈을 협화음으로 바꿀 수 있게 되었다. 세라핀은 두 도시를 위해 공연하며 시민들에게 그들은 혼자가 아니고 함께일 때 더 강하며, 그들의 잠재력은 무한하다는 것을 일깨워준다.`,
        blurb: `자운 출신의 부모를 둔 세라핀은 필트오버에서 태어나 다른 사람의 영혼의 소리를 들을 수 있다. 세상이 그녀에게 노래하고 그녀 또한 답가를 불렀다. 어린 시절에는 이 소리가 그녀를 억눌렀지만 이제 그녀는 영감을 위해 소리를 이끌어내고 혼돈을 협화음으로 바꿀 수 있게 되었다. 세라핀은 두 도시를 위해 공연하며 시민들에게 그들은 혼자가 아니고 함께일 때 더 강하며, 그들의 잠재력은 무한하다는 것을 일깨워준다.`,
        image: require('../../assets/lol_hero_icons/Seraphine.png'),
        background_image: require('../../assets/lol_hero_icons/background/Seraphine.jpg'),
        stats: {"hp": 570, "hpperlevel": 90, "mp": 360, "mpperlevel": 25, "movespeed": 330, "armor": 26, "armorperlevel": 4.2, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 525, "hpregen": 6.5, "hpregenperlevel": 0.6, "mpregen": 11.5, "mpregenperlevel": 0.95, "crit": 0, "critperlevel": 0, "attackdamage": 50, "attackdamageperlevel": 3, "attackspeedperlevel": 2, "attackspeed": 0.669},
        spells: [
            {
                id: 'passive',
                name: '무대 장악',
                description: `세라핀이 세 번째 기본 스킬을 사용할 때마다 두 번 사용됩니다. 추가로 아군 근처에서 스킬을 사용하면 다음 기본 공격이 추가 마법 피해를 입히고 사거리가 증가합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Seraphine_Passive.png')
            },
            {
                id: 'SeraphineQ',
                name: '고음',
                description: `세라핀이 대상 지역에 피해를 입힙니다.`,
                cooldownBurn: '8/7.5/7/6.5/6',
                image: require('../../assets/lol_hero_icons/skills/SeraphineQ.png')
            },
            {
                id: 'SeraphineW',
                name: '소리 장막',
                description: `세라핀이 주변 아군에게 보호막과 이동 속도를 부여합니다. 세라핀에게 이미 보호막이 있으면 주변 아군의 체력을 회복시킵니다.`,
                cooldownBurn: '22',
                image: require('../../assets/lol_hero_icons/skills/SeraphineW.png')
            },
            {
                id: 'SeraphineE',
                name: '비트 발사',
                description: `세라핀이 일직선상에 있는 적들에게 피해를 입히고 이동을 방해합니다.`,
                cooldownBurn: '11/10.5/10/9.5/9',
                image: require('../../assets/lol_hero_icons/skills/SeraphineE.png')
            },
            {
                id: 'SeraphineR',
                name: '앙코르',
                description: `세라핀이 적중한 적에게 피해를 입히고 매혹합니다. 아군 또는 적 챔피언에게 적중하면 사거리가 초기화됩니다.`,
                cooldownBurn: '160/140/120',
                image: require('../../assets/lol_hero_icons/skills/SeraphineR.png')
            },
        ],
    },
    {
        numID: 117,
        id: 'Sett_top_sup',
        Key: '875',
        name: '세트',
        title: '우두머리',
        lore: `점점 세력을 더해 가는 아이오니아 범죄 세계의 우두머리 세트는 녹서스와의 전쟁이 끝남과 동시에 두각을 드러내기 시작했다. 나보리 투기장의 신인 투사로 등장한 그는 무지막지한 힘과 상상을 초월하는 맷집으로 금세 유명인사가 되었고, 동네 싸움꾼에서 한때 그가 싸웠던 투기장을 지배하는 정상의 자리까지 올라섰다.`,
        blurb: `점점 세력을 더해 가는 아이오니아 범죄 세계의 우두머리 세트는 녹서스와의 전쟁이 끝남과 동시에 두각을 드러내기 시작했다. 나보리 투기장의 신인 투사로 등장한 그는 무지막지한 힘과 상상을 초월하는 맷집으로 금세 유명인사가 되었고, 동네 싸움꾼에서 한때 그가 싸웠던 투기장을 지배하는 정상의 자리까지 올라섰다.`,
        image: require('../../assets/lol_hero_icons/Sett.png'),
        background_image: require('../../assets/lol_hero_icons/background/Sett.jpg'),
        stats: {"hp": 670, "hpperlevel": 114, "mp": 0, "mpperlevel": 0, "movespeed": 340, "armor": 33, "armorperlevel": 5.2, "spellblock": 28, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 7, "hpregenperlevel": 0.5, "mpregen": 0, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 60, "attackdamageperlevel": 4, "attackspeedperlevel": 1.75, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '투기장의 투지',
                description: `세트는 기본 공격 시 양 주먹을 번갈아 사용합니다. 오른쪽 주먹이 약간 더 강하고 빠릅니다. 또한 세트는 불굴의 의지로 잃은 체력에 비례해 추가로 체력을 회복합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Sett_P.png')
            },
            {
                id: 'SettQ',
                name: '주먹다짐',
                description: `세트의 다음 두 번의 공격이 대상 최대 체력에 비례해 추가 피해를 입힙니다. 또한 세트는 적 챔피언을 향해 이동할 때 이동 속도가 올라갑니다.`,
                cooldownBurn: '9/8/7/6/5',
                image: require('../../assets/lol_hero_icons/skills/SettQ.png')
            },
            {
                id: 'SettW',
                name: '강펀치',
                description: `세트가 받은 피해를 기본 지속 효과를 통해 투지로 저장합니다. 스킬 사용 시 저장한 모든 투지를 소모하여 보호막을 얻고 지정한 방향으로 펀치를 날려 중심선에 있는 적들에게 고정 피해를 입히고 중심선 밖에 있는 적들에게 물리 피해를 입힙니다.`,
                cooldownBurn: '18/16.5/15/13.5/12',
                image: require('../../assets/lol_hero_icons/skills/SettW.png')
            },
            {
                id: 'SettE',
                name: '안면 강타',
                description: `세트가 양옆에 있는 모든 적을 끌어당겨 피해를 입히고 기절시킵니다. 한쪽에만 적이 있는 경우 기절시키는 대신 둔화시킵니다.`,
                cooldownBurn: '16/14.5/13/11.5/10',
                image: require('../../assets/lol_hero_icons/skills/SettE.png')
            },
            {
                id: 'SettR',
                name: '대미 장식',
                description: `세트가 적 하나를 붙잡아 공중으로 도약한 후 바닥에 내리꽂아 피해를 입히고 착지 지점 근처에 있는 모든 적을 둔화시킵니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/SettR.png')
            },
        ],
    },
    {
        numID: 118,
        id: 'Shaco_jug_sup',
        Key: '35',
        name: '샤코',
        title: '악마 어릿광대',
        lore: `샤코는 오래 전, 외로움을 타던 어느 왕자를 위한 장난감으로 만들어졌다. 하지만 이제는 살육과 참사를 즐기는 마법 깃든 인형이다. 이전에는 친절한 마음씨를 지닌 광대였지만, 흑마법으로 타락하고 사랑하는 이를 잃은 상실감 때문에 오로지 불쌍한 인간들을 고문하는 것에서만 기쁨을 느끼게 되었다. 장난감과 단순한 속임수를 이용하여 상대를 농락하고 목숨을 빼앗은 다음, 유혈낭자한 '유희'의 결과에 만족하며 웃는다. 한밤중에 음산한 웃음소리가 들리는가? 그렇다면 이 악마의 어릿광대에게 다음 장난감으로 선택을 받은 것인지도 모른다.`,
        blurb: `샤코는 오래 전, 외로움을 타던 어느 왕자를 위한 장난감으로 만들어졌다. 하지만 이제는 살육과 참사를 즐기는 마법 깃든 인형이다. 이전에는 친절한 마음씨를 지닌 광대였지만, 흑마법으로 타락하고 사랑하는 이를 잃은 상실감 때문에 오로지 불쌍한 인간들을 고문하는 것에서만 기쁨을 느끼게 되었다. 장난감과 단순한 속임수를 이용하여 상대를 농락하고 목숨을 빼앗은 다음, 유혈낭자한 '유희'의 결과에 만족하며 웃는다. 한밤중에 음산한 웃음소리가 들리는가?...`,
        image: require('../../assets/lol_hero_icons/Shaco.png'),
        background_image: require('../../assets/lol_hero_icons/background/Shaco.jpg'),
        stats: {"hp": 630, "hpperlevel": 99, "mp": 297, "mpperlevel": 40, "movespeed": 345, "armor": 30, "armorperlevel": 4, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 8.5, "hpregenperlevel": 0.55, "mpregen": 6, "mpregenperlevel": 0.35, "crit": 0, "critperlevel": 0, "attackdamage": 63, "attackdamageperlevel": 3, "attackspeedperlevel": 3, "attackspeed": 0.694},
        spells: [
            {
                id: 'passive',
                name: '암습',
                description: `샤코의 기본 공격과 양날 독을 뒤에서 사용하면 추가 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Jester_CarefulStrikes.png')
            },
            {
                id: 'Deceive',
                name: '속임수',
                description: `샤코가 즉시 투명해지며 지정한 위치로 순간이동합니다.투명 상태에서 가하는 첫 번째 기본 공격이 강화되어 추가 피해를 입히고 뒤에서 공격 시 치명타로 적중합니다.`,
                cooldownBurn: '12/11.5/11/10.5/10',
                image: require('../../assets/lol_hero_icons/skills/Deceive.png')
            },
            {
                id: 'JackInTheBox',
                name: '깜짝 상자',
                description: `샤코가 깜짝 상자를 숨깁니다. 상자가 발동되면 주변의 적들을 공포 상태에 빠뜨린 다음 공격합니다.`,
                cooldownBurn: '15',
                image: require('../../assets/lol_hero_icons/skills/JackInTheBox.png')
            },
            {
                id: 'TwoShivPoison',
                name: '양날 독',
                description: `샤코의 단검은 공격에 맞은 대상을 중독시켜 이동 속도를 늦춥니다. 샤코는 단검을 던져 적에게 피해를 입히고 중독시킬 수 있으며 이때 대상의 체력이 30% 이하면 추가 피해를 입힙니다.`,
                cooldownBurn: '8',
                image: require('../../assets/lol_hero_icons/skills/TwoShivPoison.png')
            },
            {
                id: 'HallucinateFull',
                name: '환각',
                description: `샤코가 자신의 환영을 생성합니다. 적 포탑에게는 환영의 피해량이 줄어듭니다. 환영은 죽을 경우 폭발하며 세 개의 작은 깜짝 상자를 남겨 주변 적에게 피해를 입힙니다.`,
                cooldownBurn: '100/90/80',
                image: require('../../assets/lol_hero_icons/skills/HallucinateFull.png')
            },
        ],
    },
    {
        numID: 119,
        id: 'Shen_top',
        Key: '98',
        name: '쉔',
        title: '황혼의 눈',
        lore: `쉔은 '킨코우'라고 하는 아이오니아 비밀결사단의 수장이자, '황혼의 눈'이다. 감정, 편견, 아집에서 벗어나는 자유로운 정신을 유지하려 노력하며, 영적 세계와 현실 세계 사이에서 감정에 흔들리지 않는 공명정대함을 실현하기 위해 그 누구도 걷지 않았던 길을 걷는다. 두 세계 사이의 균형을 맞추는 임무를 맡았기에, 그 균형을 위협하려는 자에게 강철검을 휘두르고 신비한 기운을 사용한다.`,
        blurb: `쉔은 '킨코우'라고 하는 아이오니아 비밀결사단의 수장이자, '황혼의 눈'이다. 감정, 편견, 아집에서 벗어나는 자유로운 정신을 유지하려 노력하며, 영적 세계와 현실 세계 사이에서 감정에 흔들리지 않는 공명정대함을 실현하기 위해 그 누구도 걷지 않았던 길을 걷는다. 두 세계 사이의 균형을 맞추는 임무를 맡았기에, 그 균형을 위협하려는 자에게 강철검을 휘두르고 신비한 기운을 사용한다.`,
        image: require('../../assets/lol_hero_icons/Shen.png'),
        background_image: require('../../assets/lol_hero_icons/background/Shen.jpg'),
        stats: {"hp": 610, "hpperlevel": 99, "mp": 400, "mpperlevel": 0, "movespeed": 340, "armor": 34, "armorperlevel": 4.2, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 8.5, "hpregenperlevel": 0.75, "mpregen": 50, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 64, "attackdamageperlevel": 3, "attackspeedperlevel": 3, "attackspeed": 0.751},
        spells: [
            {
                id: 'passive',
                name: '기 보호막',
                description: `스킬을 사용하면 쉔이 보호막을 얻습니다. 다른 챔피언에게 스킬로 영향을 주면 이 효과의 재사용 대기시간이 감소합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Shen_Passive.png')
            },
            {
                id: 'ShenQ',
                name: '황혼 강습',
                description: `쉔이 기의 검을 불러들여 공격해 대상의 최대 체력에 비례한 피해를 입힙니다. 기의 검이 적 챔피언과 충돌하면 이 공격이 크게 강화되며, 기의 검에 부딪힌 적들은 쉔으로부터 달아날 때 둔화됩니다.`,
                cooldownBurn: '8/7.25/6.5/5.75/5',
                image: require('../../assets/lol_hero_icons/skills/ShenQ.png')
            },
            {
                id: 'ShenW',
                name: '의지의 결계',
                description: `쉔이나 기의 검 근처 아군에 대한 공격이 차단됩니다.`,
                cooldownBurn: '18/16.5/15/13.5/12',
                image: require('../../assets/lol_hero_icons/skills/ShenW.png')
            },
            {
                id: 'ShenE',
                name: '그림자 돌진',
                description: `쉔이 지정한 방향으로 돌진해, 경로상의 적들을 도발합니다.`,
                cooldownBurn: '18/16/14/12/10',
                image: require('../../assets/lol_hero_icons/skills/ShenE.png')
            },
            {
                id: 'ShenR',
                name: '단결된 의지',
                description: `쉔이 공격 받는 아군을 포착하여 해당 위치로 순간 이동하며 아군에게 보호막을 쳐 줍니다.`,
                cooldownBurn: '200/180/160',
                image: require('../../assets/lol_hero_icons/skills/ShenR.png')
            },
        ],
    },
    {
        numID: 120,
        id: 'Shyvana_jug',
        Key: '102',
        name: '쉬바나',
        title: '하프 드래곤',
        lore: `쉬바나는 심장 속에서 불타는 룬 조각 덕분에 마력을 발휘하는 존재로, 평소에는 인간의 모습을 하고 있으나 사실은 강력한 힘을 지닌 용이다. 용의 형상으로 변하면 불타오르는 숨결로 적을 그 자리에서 태워버린다. 자르반 4세의 목숨을 구해준 후 그의 친위대에 들어갔지만, 데마시아 인들은 여전히 쉬바나에게 미심쩍은 눈길을 보내고 있다. 쉬바나로서도 친위대원 노릇이나 데마시아 인들의 신임을 받는 일이 쉽지만은 않다.`,
        blurb: `쉬바나는 심장 속에서 불타는 룬 조각 덕분에 마력을 발휘하는 존재로, 평소에는 인간의 모습을 하고 있으나 사실은 강력한 힘을 지닌 용이다. 용의 형상으로 변하면 불타오르는 숨결로 적을 그 자리에서 태워버린다. 자르반 4세의 목숨을 구해준 후 그의 친위대에 들어갔지만, 데마시아 인들은 여전히 쉬바나에게 미심쩍은 눈길을 보내고 있다. 쉬바나로서도 친위대원 노릇이나 데마시아 인들의 신임을 받는 일이 쉽지만은 않다.`,
        image: require('../../assets/lol_hero_icons/Shyvana.png'),
        background_image: require('../../assets/lol_hero_icons/background/Shyvana.jpg'),
        stats: {"hp": 665, "hpperlevel": 104, "mp": 100, "mpperlevel": 0, "movespeed": 350, "armor": 38, "armorperlevel": 4.55, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 8.5, "hpregenperlevel": 0.8, "mpregen": 0, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 66, "attackdamageperlevel": 3, "attackspeedperlevel": 2.5, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '용족의 분노',
                description: `쉬바나가 용에게 추가 피해를 입히고 추가 방어력과 마법 저항력을 얻습니다. 아군이 용을 처치할 때마다 쉬바나의 방어력과 마법 저항력이 추가로 증가합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/ShyvanaReinforcedScales.png')
            },
            {
                id: 'ShyvanaDoubleAttack',
                name: '두 번 물어뜯기',
                description: `쉬바나는 다음 공격 시 두 번 공격하고 공격 속도가 증가합니다. 기본 공격 시 두 번 물어뜯기의 재사용 대기시간이 0.5초 감소합니다.용 형상: 두 번 물어뜯기를 사용하면 쉬바나 앞에 있는 모든 유닛을 베어 가릅니다.`,
                cooldownBurn: '8/7.5/7/6.5/6',
                image: require('../../assets/lol_hero_icons/skills/ShyvanaDoubleAttack.png')
            },
            {
                id: 'ShyvanaImmolationAura',
                name: '연소',
                description: `쉬바나가 화염으로 몸을 감싸 3초간 주위 적에게 초당 마법 피해를 입히며 이동 속도가 빨라집니다. 연소가 활성화되어 있는 적을 쉬바나가 기본 공격하면 이 피해량의 일부가 다시 적용됩니다. 이동 속도는 시간이 흐를수록 점차 정상으로 줄어듭니다. 기본 공격 시 연소의 지속시간이 늘어납니다.용 형상: 연소의 크기가 커집니다.`,
                cooldownBurn: '12',
                image: require('../../assets/lol_hero_icons/skills/ShyvanaImmolationAura.png')
            },
            {
                id: 'ShyvanaFireball',
                name: '화염 숨결',
                description: `쉬바나가 화염구를 던져 맞은 적 모두에게 피해를 가하며 맞은 적에게 5초간 불타는 재 표식을 남깁니다. 표식이 남은 대상에게 쉬바나의 기본 공격이 적중하면 대상의 최대 체력의 일정 비율에 해당하는 피해를 입힙니다.용 형상: 화염 숨결이 대상에게 닿거나 목표 지점에 도달하면 폭발하며 추가 피해를 입히고 잠깐 동안 땅을 불태웁니다.`,
                cooldownBurn: '12/11/10/9/8',
                image: require('../../assets/lol_hero_icons/skills/ShyvanaFireball.png')
            },
            {
                id: 'ShyvanaTransformCast',
                name: '용의 강림',
                description: `쉬바나가 용으로 변신해 목표 지점으로 날아갑니다. 비행 중 쉬바나와 부딪힌 적들은 피해를 입으며 목표 지점 쪽으로 밀려납니다.쉬바나는 기본 지속 효과로 매 초 분노가 오르며, 기본 공격 시 분노가 2씩 오릅니다.`,
                cooldownBurn: '0',
                image: require('../../assets/lol_hero_icons/skills/ShyvanaTransformCast.png')
            },
        ],
    },
    {
        numID: 121,
        id: 'Singed_top',
        Key: '27',
        name: '신지드',
        title: '미친 화학자',
        lore: `신지드가 자운에서 가장 머리 좋은 화학자라는 데에는 이견이 없다. 그는 지식의 한계를 돌파하는 데 자신의 삶을 몽땅 바쳤다. 아무런 대가도 바라지 않았건만, 신지드에게 돌아온 대가는 너무 가혹했다. 바로 정신이 나가 버린 것이다. 광기를 얻는 방법이라도 알아낸 것일까? 신지드가 만들어내는 혼합물은 실패하는 법이 거의 없지만, 사람들의 눈에 신지드는 이미 인간성을 모두 잃고 고통과 공포로 얼룩진 독극물의 자취를 남기는 사악한 과학자일 뿐이다.`,
        blurb: `신지드가 자운에서 가장 머리 좋은 화학자라는 데에는 이견이 없다. 그는 지식의 한계를 돌파하는 데 자신의 삶을 몽땅 바쳤다. 아무런 대가도 바라지 않았건만, 신지드에게 돌아온 대가는 너무 가혹했다. 바로 정신이 나가 버린 것이다. 광기를 얻는 방법이라도 알아낸 것일까? 신지드가 만들어내는 혼합물은 실패하는 법이 거의 없지만, 사람들의 눈에 신지드는 이미 인간성을 모두 잃고 고통과 공포로 얼룩진 독극물의 자취를 남기는 사악한 과학자일 뿐이다.`,
        image: require('../../assets/lol_hero_icons/Singed.png'),
        background_image: require('../../assets/lol_hero_icons/background/Singed.jpg'),
        stats: {"hp": 650, "hpperlevel": 99, "mp": 330, "mpperlevel": 45, "movespeed": 345, "armor": 34, "armorperlevel": 4.7, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 9.5, "hpregenperlevel": 0.55, "mpregen": 7.5, "mpregenperlevel": 0.55, "crit": 0, "critperlevel": 0, "attackdamage": 63, "attackdamageperlevel": 3.4, "attackspeedperlevel": 1.9, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '독성 급류',
                description: `신지드가 근처 챔피언을 회피하며 일시적으로 이동 속도가 증가합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Singed_Passive.png')
            },
            {
                id: 'PoisonTrail',
                name: '맹독의 자취',
                description: `신지드 뒤로 독구름을 남겨 구름에 들어가는 적에게 피해를 입힙니다.`,
                cooldownBurn: '0',
                image: require('../../assets/lol_hero_icons/skills/PoisonTrail.png')
            },
            {
                id: 'MegaAdhesive',
                name: '초강력 접착제',
                description: `초강력 접착제가 든 시험관을 바닥에 던져 그 위를 지나가는 적을 둔화시키고 이동 스킬을 사용할 수 없게 합니다.`,
                cooldownBurn: '17/16/15/14/13',
                image: require('../../assets/lol_hero_icons/skills/MegaAdhesive.png')
            },
            {
                id: 'Fling',
                name: '던져넘기기',
                description: `적을 신지드 뒤편으로 높이 던지며 피해를 줍니다. 신지드가 뒤로 던진 대상이 초강력 접착제 위에 착지하면 속박 효과가 적용됩니다.`,
                cooldownBurn: '10/9.5/9/8.5/8',
                image: require('../../assets/lol_hero_icons/skills/Fling.png')
            },
            {
                id: 'InsanityPotion',
                name: '광기의 물약',
                description: `신지드가 조합된 화학 물질을 마시고 향상된 전투 능력을 얻으며 맹독의 자취로 고통스러운 상처를 남깁니다.`,
                cooldownBurn: '100',
                image: require('../../assets/lol_hero_icons/skills/InsanityPotion.png')
            },
        ],
    },
    {
        numID: 122,
        id: 'Sion_top_mid',
        Key: '14',
        name: '사이온',
        title: '언데드 학살병기',
        lore: `과거 사이온은 데마시아 왕을 맨손으로 목 졸라 살해한 전공으로 녹서스에서 존경을 받았다. 이후에는 지나간 시대의 전쟁 영웅으로 잊혀질 뻔했으나, 죽은 후에 부활하여 다시금 녹서스에 충성을 다하게 되었다. 부활한 사이온은 썩어버린 육체에 조악한 방어구를 고정시켜 걸치고, 자신의 앞을 가로막는 자라면 충성 여부에 상관없이 닥치는 대로 학살했다. 죽기 전의 인간성이 더 이상 남아 있지 않은 것이었다. 하지만 그렇게 앞뒤 재지 않고 무작정 전장으로 뛰어들면서도, 사이온이 휘두르는 도끼날에는 진정한 자아를 기억해 내고 싶다는 열망이 숨어 있다.`,
        blurb: `과거 사이온은 데마시아 왕을 맨손으로 목 졸라 살해한 전공으로 녹서스에서 존경을 받았다. 이후에는 지나간 시대의 전쟁 영웅으로 잊혀질 뻔했으나, 죽은 후에 부활하여 다시금 녹서스에 충성을 다하게 되었다. 부활한 사이온은 썩어버린 육체에 조악한 방어구를 고정시켜 걸치고, 자신의 앞을 가로막는 자라면 충성 여부에 상관없이 닥치는 대로 학살했다. 죽기 전의 인간성이 더 이상 남아 있지 않은 것이었다. 하지만 그렇게 앞뒤 재지 않고 무작정 전장으로...`,
        image: require('../../assets/lol_hero_icons/Sion.png'),
        background_image: require('../../assets/lol_hero_icons/background/Sion.jpg'),
        stats: {"hp": 655, "hpperlevel": 87, "mp": 400, "mpperlevel": 52, "movespeed": 345, "armor": 32, "armorperlevel": 4.2, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 7.5, "hpregenperlevel": 0.8, "mpregen": 8, "mpregenperlevel": 0.6, "crit": 0, "critperlevel": 0, "attackdamage": 68, "attackdamageperlevel": 4, "attackspeedperlevel": 1.3, "attackspeed": 0.679},
        spells: [
            {
                id: 'passive',
                name: '영광스러운 죽음',
                description: `사이온은 사망한 이후 잠시 되살아나지만 체력이 급속히 떨어집니다. 이 동안 사이온은 매우 빠르게 공격하며 체력을 회복합니다. 공격 적중 시 대상 최대 체력에 비례해 추가 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Sion_Passive1.png')
            },
            {
                id: 'SionQ',
                name: '대량 학살 강타',
                description: `사이온이 강력한 한 방을 충전하여 전방의 적들에게 피해를 입힙니다. 충분한 시간 동안 충전하면, 이 타격에 맞은 적들을 공중으로 띄우고 기절시킵니다.`,
                cooldownBurn: '10/9/8/7/6',
                image: require('../../assets/lol_hero_icons/skills/SionQ.png')
            },
            {
                id: 'SionW',
                name: '영혼의 용광로',
                description: `사이온이 자기 자신에게 보호막을 씌우고 3초 후에 재시전하면 주변 적들에게 마법 피해를 입힙니다.`,
                cooldownBurn: '15/14/13/12/11',
                image: require('../../assets/lol_hero_icons/skills/SionW.png')
            },
            {
                id: 'SionE',
                name: '학살자의 포효',
                description: `사이온이 단거리 충격파를 발사해 첫 번째로 맞는 적에게 피해를 입히고 속도를 늦추며, 방어력을 낮춥니다. 충격파가 미니언이나 몬스터를 맞히면 뒤로 밀려나며 피해를 입고 둔화되며 관통하는 모든 적의 방어력을 낮춥니다.`,
                cooldownBurn: '12/11/10/9/8',
                image: require('../../assets/lol_hero_icons/skills/SionE.png')
            },
            {
                id: 'SionR',
                name: '멈출 수 없는 맹공',
                description: `사이온이 한 방향으로 돌진하며 점차 속도가 상승합니다. 돌진 방향은 마우스 커서 위치로 약간 조종할 수 있습니다. 적과 충돌하면 돌진한 거리에 비례하여 피해를 입히고 띄워올립니다.`,
                cooldownBurn: '140/100/60',
                image: require('../../assets/lol_hero_icons/skills/SionR.png')
            },
        ],
    },
    {
        numID: 123,
        id: 'Sivir_adc',
        Key: '15',
        name: '시비르',
        title: '전장의 여제',
        lore: `시비르는 슈리마 사막에서 활동하는 보물 사냥꾼이자 용병 대장이다. 몸값은 입이 떡 벌어질 정도로 비싸지만 전투를 벌이는 족족 이겨 몸값에 걸맞은 솜씨로 명성이 자자하다. 대담무쌍한 성격에 원대한 야심까지 겸비한 시비르. 그녀는 위험하기 짝이 없는 슈리마의 묘역에서 진귀한 보물을 찾으며 남다른 자부심을 느낀다. 의뢰인에게서 두둑한 대가를 챙기는 것은 물론이다. 하지만 슈리마에 고대의 존재들이 귀환하면서 시비르도 운명의 갈림길에 서게 된다.`,
        blurb: `시비르는 슈리마 사막에서 활동하는 보물 사냥꾼이자 용병 대장이다. 몸값은 입이 떡 벌어질 정도로 비싸지만 전투를 벌이는 족족 이겨 몸값에 걸맞은 솜씨로 명성이 자자하다. 대담무쌍한 성격에 원대한 야심까지 겸비한 시비르. 그녀는 위험하기 짝이 없는 슈리마의 묘역에서 진귀한 보물을 찾으며 남다른 자부심을 느낀다. 의뢰인에게서 두둑한 대가를 챙기는 것은 물론이다. 하지만 슈리마에 고대의 존재들이 귀환하면서 시비르도 운명의 갈림길에 서게 된다.`,
        image: require('../../assets/lol_hero_icons/Sivir.png'),
        background_image: require('../../assets/lol_hero_icons/background/Sivir.jpg'),
        stats: {"hp": 600, "hpperlevel": 104, "mp": 340, "mpperlevel": 45, "movespeed": 335, "armor": 30, "armorperlevel": 4.45, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 500, "hpregen": 3.25, "hpregenperlevel": 0.55, "mpregen": 6, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 58, "attackdamageperlevel": 2.5, "attackspeedperlevel": 2, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '재빠른 발놀림',
                description: `시비르가 적 챔피언을 공격할 때 짧은 시간 동안 이동 속도가 대폭 상승합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Sivir_Passive.png')
            },
            {
                id: 'SivirQ',
                name: '부메랑 검',
                description: `시비르가 십자날 검을 부메랑처럼 던져서 두 번 피해를 입힙니다.`,
                cooldownBurn: '10/9.5/9/8.5/8',
                image: require('../../assets/lol_hero_icons/skills/SivirQ.png')
            },
            {
                id: 'SivirW',
                name: '튕기는 부메랑',
                description: `시비르의 다음 몇 번의 기본 공격은 공격 속도가 증가하고 첫 번째 목표물에 적중한 후 주위 적들에게 튕기며, 튕겼을 때는 감소된 피해를 입힙니다.`,
                cooldownBurn: '12',
                image: require('../../assets/lol_hero_icons/skills/SivirW.png')
            },
            {
                id: 'SivirE',
                name: '주문 방어막',
                description: `시비르가 마법 보호막을 만들어 자신을 대상으로 한 적 스킬 1개를 막아냅니다. 성공적으로 방어 시 체력을 얻고 일시적으로 이동 속도가 대폭 증가합니다.`,
                cooldownBurn: '24/22.5/21/19.5/18',
                image: require('../../assets/lol_hero_icons/skills/SivirE.png')
            },
            {
                id: 'SivirR',
                name: '사냥 개시',
                description: `시비르가 전장에서 아군을 이끌며 잠시 동안 이동 속도를 대폭 상승시킵니다. 또한 공격 시 시비르의 스킬 재사용 대기시간이 감소합니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/SivirR.png')
            },
        ],
    },
    {
        numID: 124,
        id: 'Skarner_top_jug',
        Key: '72',
        name: '스카너',
        title: '태고의 군주',
        lore: `거대한 고대 브래컨, 스카너는 지배 계급인 윤 탈의 창립 일원으로 이쉬탈에서 추앙받는다. 자신의 나라를 외부 세계로부터 안전하게 지키기 위해 헌신하는 스카너는 이샤오칸 아래 내실에서 살아가며 대지의 진동에 귀를 기울이고 잠재적 위협을 감지한다. 이쉬탈의 고립에 의문을 품는 윤 탈의 구성원이 많아지면서 스카너의 편집증은 갈수록 심해지고 있다. 이쉬탈과 이쉬탈 사람들의 안전을 지키기 위해서라면 스카너는 무엇이든 할 것이다. 어떤 대가가 따르더라도.`,
        blurb: `거대한 고대 브래컨, 스카너는 지배 계급인 윤 탈의 창립 일원으로 이쉬탈에서 추앙받는다. 자신의 나라를 외부 세계로부터 안전하게 지키기 위해 헌신하는 스카너는 이샤오칸 아래 내실에서 살아가며 대지의 진동에 귀를 기울이고 잠재적 위협을 감지한다. 이쉬탈의 고립에 의문을 품는 윤 탈의 구성원이 많아지면서 스카너의 편집증은 갈수록 심해지고 있다. 이쉬탈과 이쉬탈 사람들의 안전을 지키기 위해서라면 스카너는 무엇이든 할 것이다. 어떤 대가가 따르더라도.`,
        image: require('../../assets/lol_hero_icons/Skarner.png'),
        background_image: require('../../assets/lol_hero_icons/background/Skarner.jpg'),
        stats: {"hp": 630, "hpperlevel": 110, "mp": 320, "mpperlevel": 40, "movespeed": 335, "armor": 33, "armorperlevel": 4.8, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 150, "hpregen": 7.5, "hpregenperlevel": 0.75, "mpregen": 7.2, "mpregenperlevel": 0.75, "crit": 0, "critperlevel": 0, "attackdamage": 63, "attackdamageperlevel": 3, "attackspeedperlevel": 2, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '진동의 가닥',
                description: `스카너의 기본 공격, 부서진 대지, 지반 돌출, 꿰뚫기가 전율을 적용합니다. 전율 최대 중첩 시 지속시간 동안 적들이 최대 체력 비례 마법 피해를 입습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Skarner_Passive.png')
            },
            {
                id: 'SkarnerQ',
                name: '부서진 대지/지반 돌출',
                description: `스카너가 대지에서 바위를 뜯어냅니다. 바위는 기본 공격을 강화하며 강력한 투사체로 던질 수 있습니다.`,
                cooldownBurn: '13/11.5/10/8.5/7',
                image: require('../../assets/lol_hero_icons/skills/SkarnerQ.png')
            },
            {
                id: 'SkarnerW',
                name: '대지의 수호자',
                description: `스카너가 방어막을 얻고 지진을 일으켜 그 충격파로 적에게 피해를 입히고 둔화 효과를 적용합니다.`,
                cooldownBurn: '10/9/8/7/6',
                image: require('../../assets/lol_hero_icons/skills/SkarnerW.png')
            },
            {
                id: 'SkarnerE',
                name: '이쉬탈의 격돌',
                description: `스카너가 앞으로 돌진하며 지형을 통과합니다. 챔피언이나 대형 몬스터와 충돌하면 다음에 부딪치는 벽에 내동댕이쳐 피해를 입히고 기절시킵니다.`,
                cooldownBurn: '20/19/18/17/16',
                image: require('../../assets/lol_hero_icons/skills/SkarnerE.png')
            },
            {
                id: 'SkarnerR',
                name: '꿰뚫기',
                description: `스카너가 꼬리를 앞으로 후려쳐 적 챔피언을 제압합니다. 제압한 적 챔피언은 스카너를 따라 끌려다닙니다.`,
                cooldownBurn: '120/105/90',
                image: require('../../assets/lol_hero_icons/skills/SkarnerR.png')
            },
        ],
    },
    {
        numID: 125,
        id: 'Smolder_top_mid_adc',
        Key: '901',
        name: '스몰더',
        title: '꼬마 불꽃용',
        lore: `녹서스 변경 부근의 깎아지른 절벽 지대에서 한 어린 용이 어미 용의 냉엄한 시선 아래 카마보르 황실의 용 혈통을 이을 후계자 수업을 받고 있다. 천성 자체가 쾌활한 스몰더는 하루라도 빨리 어른이 될 날을 꿈꾸면서, 오늘도 몰라보게 성장하는 제 능력을 시험할 구실을 찾아다니는 중이다. 아직 좀 어리긴 하지만, 스몰더는 어떤 것이든지 불에 타기만 한다면 가볍게 태워버릴 수 있는 능력을 지니고 있다.`,
        blurb: `녹서스 변경 부근의 깎아지른 절벽 지대에서 한 어린 용이 어미 용의 냉엄한 시선 아래 카마보르 황실의 용 혈통을 이을 후계자 수업을 받고 있다. 천성 자체가 쾌활한 스몰더는 하루라도 빨리 어른이 될 날을 꿈꾸면서, 오늘도 몰라보게 성장하는 제 능력을 시험할 구실을 찾아다니는 중이다. 아직 좀 어리긴 하지만, 스몰더는 어떤 것이든지 불에 타기만 한다면 가볍게 태워버릴 수 있는 능력을 지니고 있다.`,
        image: require('../../assets/lol_hero_icons/Smolder.png'),
        background_image: require('../../assets/lol_hero_icons/background/Smolder.jpg'),
        stats: {"hp": 575, "hpperlevel": 100, "mp": 300, "mpperlevel": 40, "movespeed": 330, "armor": 26, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 4.5, "hpregenperlevel": 0.6, "mpregen": 8.5, "mpregenperlevel": 0.7, "crit": 0, "critperlevel": 0, "attackdamage": 60, "attackdamageperlevel": 2.3, "attackspeedperlevel": 4, "attackspeed": 0.638},
        spells: [
            {
                id: 'passive',
                name: '용 훈련',
                description: `스킬로 챔피언을 맞히고 초강력 화염 숨결 스킬로 적을 처치하면 용 훈련 중첩을 1회 얻습니다. 중첩이 쌓이면 스몰더 기본 스킬의 피해량이 증가합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Icons_Smolder_Passive.png')
            },
            {
                id: 'SmolderQ',
                name: '초강력 화염 숨결',
                description: `스몰더가 적에게 불을 내뿜습니다. 이 스킬은 스몰더가 중첩을 쌓을수록 더 강력해집니다.`,
                cooldownBurn: '5.5/5/4.5/4/3.5',
                image: require('../../assets/lol_hero_icons/skills/SmolderQ.png')
            },
            {
                id: 'SmolderW',
                name: '에취!',
                description: `스몰더가 적 챔피언에게 적중 시 폭발하는 앙증맞은 불꽃 재채기를 내뿜습니다.`,
                cooldownBurn: '14/13/12/11/10',
                image: require('../../assets/lol_hero_icons/skills/SmolderW.png')
            },
            {
                id: 'SmolderE',
                name: '펄럭펄럭',
                description: `스몰더가 지형을 무시하고 날며 체력이 가장 낮은 적을 폭격합니다.`,
                cooldownBurn: '24/22/20/18/16',
                image: require('../../assets/lol_hero_icons/skills/SmolderE.png')
            },
            {
                id: 'SmolderR',
                name: '엄마아아아!',
                description: `스몰더의 울음에 어미가 나타나 위에서 불을 내뿜어 추가 피해를 입히고 화염 중심에 있는 적을 둔화시킵니다.`,
                cooldownBurn: '140/130/120',
                image: require('../../assets/lol_hero_icons/skills/SmolderR.png')
            },
        ],
    },
    {
        numID: 126,
        id: 'Sona_sup',
        Key: '37',
        name: '소나',
        title: '현의 명인',
        lore: `소나는 현악기 에트왈 연주에서 데마시아 제일가는 거장으로, 말을 하지 못하며 오로지 우아한 화음과 심금을 울리는 아리아로만 의사를 표현한다. 특유의 고상한 몸가짐 때문에 데마시아 상류층의 사랑을 받지만, 듣는 이의 마음을 사로잡는 소나의 선율이 실제로 마법이 아닌가 의심하는 사람들도 많다. 알다시피 마법은 데마시아에서 금기시되고 있기 때문이다. 소나는 낯선 이들에게 침묵을 지키지만, 가까운 지인들은 그녀의 의사를 어느 정도 이해한다. 소나가 연주하는 화음은 아군의 상처를 어루만질 뿐 아니라 방심하고 있는 적을 공격하기도 한다.`,
        blurb: `소나는 현악기 에트왈 연주에서 데마시아 제일가는 거장으로, 말을 하지 못하며 오로지 우아한 화음과 심금을 울리는 아리아로만 의사를 표현한다. 특유의 고상한 몸가짐 때문에 데마시아 상류층의 사랑을 받지만, 듣는 이의 마음을 사로잡는 소나의 선율이 실제로 마법이 아닌가 의심하는 사람들도 많다. 알다시피 마법은 데마시아에서 금기시되고 있기 때문이다. 소나는 낯선 이들에게 침묵을 지키지만, 가까운 지인들은 그녀의 의사를 어느 정도 이해한다. 소나가 연주하는...`,
        image: require('../../assets/lol_hero_icons/Sona.png'),
        background_image: require('../../assets/lol_hero_icons/background/Sona.jpg'),
        stats: {"hp": 550, "hpperlevel": 91, "mp": 340, "mpperlevel": 45, "movespeed": 325, "armor": 26, "armorperlevel": 4.2, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 5.5, "hpregenperlevel": 0.55, "mpregen": 11.5, "mpregenperlevel": 0.4, "crit": 0, "critperlevel": 0, "attackdamage": 49, "attackdamageperlevel": 3, "attackspeedperlevel": 2.3, "attackspeed": 0.644},
        spells: [
            {
                id: 'passive',
                name: '파워 코드',
                description: `아첼레란도: 소나가 기본 스킬을 잘 사용하면 최대치가 될 때까지 영구적으로 궁극기를 제외한 스킬 가속 효과를 얻습니다. 최대치에 도달한 후 스킬을 성공적으로 사용하면 중첩이 쌓이는 대신 남은 궁극기 재사용 대기시간이 감소합니다.파워 코드소나가 스킬을 특정 횟수 사용하고 나면 다음 기본 공격이 추가 마법 피해를 입히고, 소나가 마지막으로 사용한 기본 스킬에 따라 그 효과가 더 증폭될 수 있습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Sona_Passive_Charged.png')
            },
            {
                id: 'SonaQ',
                name: '용맹의 찬가',
                description: `소나가 용맹의 찬가를 연주하여 강렬한 선율을 발사하여 주변에 있는 두 명의 적에게 마법 피해를 입힙니다. 이때 챔피언과 몬스터를 우선 공격합니다. 또한 이 스킬을 사용하면 잠시 동안 오오라가 생겨서 효과 범위 안에 있는 아군이 다음번 적 공격 시 추가 피해를 입힙니다.`,
                cooldownBurn: '8',
                image: require('../../assets/lol_hero_icons/skills/SonaQ.png')
            },
            {
                id: 'SonaW',
                name: '인내의 아리아',
                description: `소나가 인내의 아리아를 연주하여 보호의 음률을 내보내 근처 부상 당한 아군 1명과 자신의 체력을 회복합니다. 또한 이 스킬을 사용하면 잠시 동안 오오라가 생겨서 효과 범위 안의 모든 아군에게 일시적으로 보호막을 씌워줍니다.`,
                cooldownBurn: '10',
                image: require('../../assets/lol_hero_icons/skills/SonaW.png')
            },
            {
                id: 'SonaE',
                name: '기민함의 노래',
                description: `소나가 기민함의 노래를 연주하여 주변 아군의 이동 속도를 증가시키고 잠시 동안 오오라를 생성합니다. 오오라에 닿은 아군 챔피언은 추가 이동 속도를 얻습니다.`,
                cooldownBurn: '14',
                image: require('../../assets/lol_hero_icons/skills/SonaE.png')
            },
            {
                id: 'SonaR',
                name: '크레센도',
                description: `소나가 궁극의 선율을 연주하여 적 챔피언들을 기절시키며 춤을 추게 만들고, 마법 피해를 입힙니다. 크레센도의 레벨이 오를 때마다 궁극기 외 스킬의 기본 재사용 대기시간이 줄어듭니다.`,
                cooldownBurn: '140/120/100',
                image: require('../../assets/lol_hero_icons/skills/SonaR.png')
            },
        ],
    },
    {
        numID: 127,
        id: 'Soraka_sup',
        Key: '16',
        name: '소라카',
        title: '별의 아이',
        lore: `타곤 산 너머 천상계의 방랑자 소라카는 필멸자들이 스스로의 폭력성 때문에 고통받는 것을 치유하기 위해 자신의 불멸을 포기했다. 소라카는 만나는 모든 이에게 동정심과 자비의 마음을 심어주려고 노력하며, 심지어 자신에게 해를 입히려 획책하는 자들마저 치유한다. 이 세계의 갈등과 혼란을 모두 지켜보았음에도, 소라카는 아직 룬테라 인들이 잠재력을 모두 끌어낸 것은 아니라고 믿고 있다.`,
        blurb: `타곤 산 너머 천상계의 방랑자 소라카는 필멸자들이 스스로의 폭력성 때문에 고통받는 것을 치유하기 위해 자신의 불멸을 포기했다. 소라카는 만나는 모든 이에게 동정심과 자비의 마음을 심어주려고 노력하며, 심지어 자신에게 해를 입히려 획책하는 자들마저 치유한다. 이 세계의 갈등과 혼란을 모두 지켜보았음에도, 소라카는 아직 룬테라 인들이 잠재력을 모두 끌어낸 것은 아니라고 믿고 있다.`,
        image: require('../../assets/lol_hero_icons/Soraka.png'),
        background_image: require('../../assets/lol_hero_icons/background/Soraka.jpg'),
        stats: {"hp": 605, "hpperlevel": 88, "mp": 425, "mpperlevel": 40, "movespeed": 325, "armor": 32, "armorperlevel": 5, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 2.5, "hpregenperlevel": 0.5, "mpregen": 11.5, "mpregenperlevel": 0.4, "crit": 0, "critperlevel": 0, "attackdamage": 50, "attackdamageperlevel": 3, "attackspeedperlevel": 2.14, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '구원',
                description: `소라카는 체력이 낮은 아군 쪽으로 이동할 때 속도가 더 빨라집니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Soraka_Passive.png')
            },
            {
                id: 'SorakaQ',
                name: '별부름',
                description: `지정한 위치에 하늘에서 별이 떨어져 적에게 마법 피해를 입히고 이동 속도를 느려지게 합니다. 별부름이 적 챔피언에게 적중하면 소라카가 체력을 회복합니다.`,
                cooldownBurn: '8/7/6/5/4',
                image: require('../../assets/lol_hero_icons/skills/SorakaQ.png')
            },
            {
                id: 'SorakaW',
                name: '은하의 마력',
                description: `소라카가 자신의 체력을 일정 부분 희생하여 아군 유닛을 치유합니다.`,
                cooldownBurn: '6/5/4/3/2',
                image: require('../../assets/lol_hero_icons/skills/SorakaW.png')
            },
            {
                id: 'SorakaE',
                name: '별의 균형',
                description: `영역 내의 모든 적을 침묵시키는 구역을 생성합니다. 영역이 해제될 때 아직 안에 남아있는 모든 적은 제자리에 묶입니다.`,
                cooldownBurn: '20/19/18/17/16',
                image: require('../../assets/lol_hero_icons/skills/SorakaE.png')
            },
            {
                id: 'SorakaR',
                name: '기원',
                description: `소라카가 아군에게 희망을 불어넣어 자신과 아군 챔피언들의 체력을 즉시 회복합니다.`,
                cooldownBurn: '150/135/120',
                image: require('../../assets/lol_hero_icons/skills/SorakaR.png')
            },
        ],
    },
    {
        numID: 128,
        id: 'Swain_mid_sup',
        Key: '50',
        name: '스웨인',
        title: '녹서스 대장군',
        lore: `제리코 스웨인은 오로지 힘만을 숭상하는 확장주의 국가 녹서스를 탁월한 예지력으로 이끄는 지도자다. 아이오니아 전쟁에서 부상을 당해 절름발이가 되고 왼팔을 잃었지만, 가차 없는 결단력으로 제국을 통치하는 자리에까지 올랐다. 악마에게 새로이 받은 왼팔과, 그 못지않게 악마 같은 수를 써서… 이제 스웨인은 최전선에서 군을 지휘하며 자신만이 볼 수 있는 어둠, 주변에 흩어진 시체에 몰려든 새까만 까마귀들에서 얼핏얼핏 목격한 광경이 다가오는 것에 대비하고 있다. 희생과 비밀의 소용돌이 속에서도 가장 큰 비밀은, 진정한 적은 내부에 있다는 것이다.`,
        blurb: `제리코 스웨인은 오로지 힘만을 숭상하는 확장주의 국가 녹서스를 탁월한 예지력으로 이끄는 지도자다. 아이오니아 전쟁에서 부상을 당해 절름발이가 되고 왼팔을 잃었지만, 가차 없는 결단력으로 제국을 통치하는 자리에까지 올랐다. 악마에게 새로이 받은 왼팔과, 그 못지않게 악마 같은 수를 써서… 이제 스웨인은 최전선에서 군을 지휘하며 자신만이 볼 수 있는 어둠, 주변에 흩어진 시체에 몰려든 새까만 까마귀들에서 얼핏얼핏 목격한 광경이 다가오는 것에 대비하고...`,
        image: require('../../assets/lol_hero_icons/Swain.png'),
        background_image: require('../../assets/lol_hero_icons/background/Swain.jpg'),
        stats: {"hp": 595, "hpperlevel": 99, "mp": 468, "mpperlevel": 29, "movespeed": 330, "armor": 26, "armorperlevel": 5.2, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 525, "hpregen": 7, "hpregenperlevel": 0.65, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 58, "attackdamageperlevel": 2.7, "attackspeedperlevel": 2.11, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '굶주린 새떼',
                description: `까마귀가 스웨인의 체력을 회복시키고 최대 체력을 영구적으로 증가시키는 '영혼 조각'을 모읍니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Swain_P.png')
            },
            {
                id: 'SwainQ',
                name: '죽음의 손길',
                description: `스웨인이 섬뜩한 힘을 지닌 번개를 여러 갈래 방출합니다. 적중당한 적이 죽으면 번개가 해당 유닛을 관통합니다. 적중한 번개의 수에 따라 피해량도 증가합니다.`,
                cooldownBurn: '7/6/5/4/3',
                image: require('../../assets/lol_hero_icons/skills/SwainQ.png')
            },
            {
                id: 'SwainW',
                name: '제국의 눈',
                description: `스웨인이 악마의 눈을 소환해 적에게 피해를 입히고 둔화시킵니다. 챔피언이 적중당하면 모습이 드러나고 스웨인은 영혼 조각을 얻습니다.`,
                cooldownBurn: '22/21/20/19/18',
                image: require('../../assets/lol_hero_icons/skills/SwainW.png')
            },
            {
                id: 'SwainE',
                name: '속박명령',
                description: `스웨인이 전방으로 악마의 파동을 방출합니다. 파동은 다시 스웨인에게 돌아오며 부딪힌 적을 모두 속박합니다. 이후 속박한 챔피언을 모두 가까이 끌어당길 수 있습니다. 악의 승천 사용 중에는 이 스킬의 재사용 대기시간이 더 짧습니다.`,
                cooldownBurn: '10',
                image: require('../../assets/lol_hero_icons/skills/SwainE.png')
            },
            {
                id: 'SwainR',
                name: '악의 승천',
                description: `스웨인이 악마로 변신해 근처 적 챔피언, 미니언, 중립 몬스터에게서 생명력을 흡수합니다. 악의 불길을 사용하면 주변 적을 학살하고 둔화시킵니다. 이 형태는 스웨인이 적 챔피언을 흡수하는 한 무기한 지속됩니다.`,
                cooldownBurn: '100/80/60',
                image: require('../../assets/lol_hero_icons/skills/SwainR.png')
            },
        ],
    },
    {
        numID: 129,
        id: 'Sylas_mid_jug_top_sup',
        Key: '517',
        name: '사일러스',
        title: '해방된 자',
        lore: `데마시아의 빈민 구역, 드레그본에서 자란 사일러스는 위대한 도시의 어두운 면을 상징한다. 숨겨진 마력을 탐지하는 능력을 지닌 사일러스는 어렸을 때 마력척결관들의 눈에 띄지만, 결국 마력척결관을 상대로 마력을 사용하면서 감옥에 갇힌다. 감옥에서 탈출한 사일러스는 이제 불굴의 혁명가로 살며 한때 자신이 섬겼던 왕국을 파괴하기 위해 주변 사람들의 마법을 이용한다. 추방자들로 이루어진 사일러스의 마법사 군단은 날로 그 기세를 더해가는 듯 보인다.`,
        blurb: `데마시아의 빈민 구역, 드레그본에서 자란 사일러스는 위대한 도시의 어두운 면을 상징한다. 숨겨진 마력을 탐지하는 능력을 지닌 사일러스는 어렸을 때 마력척결관들의 눈에 띄지만, 결국 마력척결관을 상대로 마력을 사용하면서 감옥에 갇힌다. 감옥에서 탈출한 사일러스는 이제 불굴의 혁명가로 살며 한때 자신이 섬겼던 왕국을 파괴하기 위해 주변 사람들의 마법을 이용한다. 추방자들로 이루어진 사일러스의 마법사 군단은 날로 그 기세를 더해가는 듯 보인다.`,
        image: require('../../assets/lol_hero_icons/Sylas.png'),
        background_image: require('../../assets/lol_hero_icons/background/Sylas.jpg'),
        stats: {"hp": 600, "hpperlevel": 129, "mp": 400, "mpperlevel": 70, "movespeed": 340, "armor": 29, "armorperlevel": 5.2, "spellblock": 32, "spellblockperlevel": 2.55, "attackrange": 175, "hpregen": 9, "hpregenperlevel": 0.9, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 61, "attackdamageperlevel": 3, "attackspeedperlevel": 3.5, "attackspeed": 0.645},
        spells: [
            {
                id: 'passive',
                name: '페트리사이트 폭발',
                description: `스킬 사용 후 사일러스가 페트리사이트 폭발을 1회 충전합니다. 다음 기본 공격 시 충전량을 하나 소모하여 사슬을 세차게 휘두르며 적중한 적들에게 추가 마법 피해를 입힙니다. 페트리사이트 폭발이 충전되어 있으면 사일러스의 공격 속도가 증가합니다. `,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/SylasP.png')
            },
            {
                id: 'SylasQ',
                name: '사슬 후려치기',
                description: `사일러스가 사슬을 후려쳐 교차시키며 대상 지점에 있는 적에게 피해를 입히고 이동 속도를 늦춥니다. 잠시 후 사슬이 교차한 지점에서 마력이 폭발해 피해를 입힙니다.`,
                cooldownBurn: '10/9/8/7/6',
                image: require('../../assets/lol_hero_icons/skills/SylasQ.png')
            },
            {
                id: 'SylasW',
                name: '국왕시해자',
                description: `사일러스가 마법의 힘으로 적에게 돌진해 피해를 입히며 적 챔피언을 공격하면 체력을 회복합니다.`,
                cooldownBurn: '12/10.5/9/7.5/6',
                image: require('../../assets/lol_hero_icons/skills/SylasW.png')
            },
            {
                id: 'SylasE',
                name: '도주 / 억압',
                description: `사일러스가 지정한 위치로 돌진합니다. 스킬을 다시 사용하면 사슬을 던져 적중한 적 방향으로 이동합니다.`,
                cooldownBurn: '13/12/11/10/9',
                image: require('../../assets/lol_hero_icons/skills/SylasE.png')
            },
            {
                id: 'SylasR',
                name: '강탈',
                description: `사일러스가 적의 궁극기를 강탈해 자유롭게 사용합니다.`,
                cooldownBurn: '80/55/30',
                image: require('../../assets/lol_hero_icons/skills/SylasR.png')
            },
        ],
    },
    {
        numID: 130,
        id: 'Syndra_mid',
        Key: '134',
        name: '신드라',
        title: '어둠의 여제',
        lore: `아이오니아의 무시무시한 마법사 신드라는 믿을 수 없을 정도로 강대한 힘을 자유자재로 다룬다. 어렸을 때부터 엄청난 마법을 제멋대로 쓰고 다니는 바람에 마을 장로들을 아연실색하게 만들었다. 신드라는 절제를 배우도록 외딴곳으로 보내졌지만, 결국 소위 스승이라는 자가 그동안 자신의 힘을 억제했다는 사실을 알게 되었다. 신드라는 배신감과 상처를 어둠의 구체로 만들어 자신을 통제하려는 자는 모조리 파멸시키겠다고 마음먹었다.`,
        blurb: `아이오니아의 무시무시한 마법사 신드라는 믿을 수 없을 정도로 강대한 힘을 자유자재로 다룬다. 어렸을 때부터 엄청난 마법을 제멋대로 쓰고 다니는 바람에 마을 장로들을 아연실색하게 만들었다. 신드라는 절제를 배우도록 외딴곳으로 보내졌지만, 결국 소위 스승이라는 자가 그동안 자신의 힘을 억제했다는 사실을 알게 되었다. 신드라는 배신감과 상처를 어둠의 구체로 만들어 자신을 통제하려는 자는 모조리 파멸시키겠다고 마음먹었다.`,
        image: require('../../assets/lol_hero_icons/Syndra.png'),
        background_image: require('../../assets/lol_hero_icons/background/Syndra.jpg'),
        stats: {"hp": 563, "hpperlevel": 104, "mp": 480, "mpperlevel": 40, "movespeed": 330, "armor": 25, "armorperlevel": 4.6, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 6.5, "hpregenperlevel": 0.6, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 54, "attackdamageperlevel": 2.9, "attackspeedperlevel": 2, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '초월',
                description: `신드라가 레벨을 올리고 적에게 피해를 입혀서 분노의 조각을 획득합니다. 분노의 조각은 스킬을 강화합니다.어둠 구체: 신드라가 1번의 추가 충전량을 유지할 수 있습니다.의지의 힘: 추가 고정 피해를 입힙니다.적군 와해: 스킬 적용 범위 폭이 증가하고 모든 대상을 둔화시킵니다.풀려난 힘: 체력이 낮은 대상을 처형합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/SyndraPassive.png')
            },
            {
                id: 'SyndraQ',
                name: '어둠 구체',
                description: `신드라가 어둠 구체를 만들어내 마법 피해를 가합니다. 구체는 제자리에 유지되며, 신드라의 다른 스킬로 조종할 수도 있습니다.`,
                cooldownBurn: '7',
                image: require('../../assets/lol_hero_icons/skills/SyndraQ.png')
            },
            {
                id: 'SyndraW',
                name: '의지의 힘',
                description: `신드라가 적 미니언 혹은 어둠 구체를 잡아서 던져 마법 피해를 입히고, 적의 이동 속도를 감소시킵니다.`,
                cooldownBurn: '12/11/10/9/8',
                image: require('../../assets/lol_hero_icons/skills/SyndraW.png')
            },
            {
                id: 'SyndraE',
                name: '적군 와해',
                description: `신드라가 어둠 구체와 적들을 뒤로 밀어내며 마법 피해를 입힙니다. 어둠 구체에 맞은 적은 기절합니다.`,
                cooldownBurn: '17',
                image: require('../../assets/lol_hero_icons/skills/SyndraE.png')
            },
            {
                id: 'SyndraR',
                name: '풀려난 힘',
                description: `신드라가 적 챔피언 하나에게 어둠 구체를 모두 날려 집중 포격을 가합니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/SyndraR.png')
            },
        ],
    },
    {
        numID: 131,
        id: 'TahmKench_top_sup',
        Key: '223',
        name: '탐 켄치',
        title: '강의 폭군',
        lore: `역사 속에서 여러 이름으로 알려져 있는 악마 탐 켄치는 룬테라의 물길을 따라 이동하며 끝없는 식욕을 다른 이들의 고통으로 채운다. 탐 켄치를 매우 매력적이고 자신만만한 존재로 생각하는 이들도 있지만, 탐 켄치는 방심한 먹잇감을 찾아 현실 세계를 활보하는 방랑자일 뿐이다. 탐 켄치의 채찍 같은 혓바닥은 수십 걸음 떨어진 중무장한 전사도 기절시킬 수 있으며, 탐 켄치의 꾸르륵대는 뱃속으로 들어가는 것은 다시 돌아올 희망이 거의 없는 심연에 떨어지는 것과도 같다. `,
        blurb: `역사 속에서 여러 이름으로 알려져 있는 악마 탐 켄치는 룬테라의 물길을 따라 이동하며 끝없는 식욕을 다른 이들의 고통으로 채운다. 탐 켄치를 매우 매력적이고 자신만만한 존재로 생각하는 이들도 있지만, 탐 켄치는 방심한 먹잇감을 찾아 현실 세계를 활보하는 방랑자일 뿐이다. 탐 켄치의 채찍 같은 혓바닥은 수십 걸음 떨어진 중무장한 전사도 기절시킬 수 있으며, 탐 켄치의 꾸르륵대는 뱃속으로 들어가는 것은 다시 돌아올 희망이 거의 없는 심연에 떨어지는...`,
        image: require('../../assets/lol_hero_icons/TahmKench.png'),
        background_image: require('../../assets/lol_hero_icons/background/TahmKench.jpg'),
        stats: {"hp": 640, "hpperlevel": 103, "mp": 325, "mpperlevel": 50, "movespeed": 335, "armor": 42, "armorperlevel": 4.7, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 6.5, "hpregenperlevel": 0.55, "mpregen": 8, "mpregenperlevel": 1, "crit": 0, "critperlevel": 0, "attackdamage": 56, "attackdamageperlevel": 3.2, "attackspeedperlevel": 2.5, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '절대 미각',
                description: `탐 켄치가 어마어마한 체구를 이용해 기본 공격 시 총 체력에 기반해 추가 피해를 입힙니다. 적 챔피언에게 피해를 입히면 이들에게 절대 미각 중첩이 쌓입니다. 중첩이 3번 쌓이면 집어삼키기 스킬을 사용하여 적 챔피언을 집어삼킬 수 있습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/TahmKenchP.png')
            },
            {
                id: 'TahmKenchQ',
                name: '혀 채찍',
                description: `탐 켄치가 혀를 채찍처럼 휘둘러 처음 맞는 유닛에 피해를 입히고 속도를 늦춥니다. 적 챔피언에게 적중하면 자신의 체력을 회복합니다.적 챔피언에게 절대 미각 중첩을 적용합니다. 해당 챔피언에게 절대 미각 중첩이 이미 3회 쌓였다면 챔피언은 기절하고 중첩이 소모됩니다.`,
                cooldownBurn: '7/6.5/6/5.5/5',
                image: require('../../assets/lol_hero_icons/skills/TahmKenchQ.png')
            },
            {
                id: 'TahmKenchW',
                name: '심연 잠수',
                description: `아래로 잠수한 후 지정한 장소에서 다시 나타나며 피해를 입히고 일정 지역에 있는 모든 적을 공중으로 띄웁니다.`,
                cooldownBurn: '21/20/19/18/17',
                image: require('../../assets/lol_hero_icons/skills/TahmKenchW.png')
            },
            {
                id: 'TahmKenchE',
                name: '두꺼운 피부',
                description: `기본 지속 효과: 탐 켄치가 입은 피해량의 일부를 비축하고 전투에서 벗어났을 때 비축량에 비례하여 체력을 회복합니다.사용 시: 비축한 모든 피해량을 일시적인 보호막으로 전환합니다.`,
                cooldownBurn: '3',
                image: require('../../assets/lol_hero_icons/skills/TahmKenchE.png')
            },
            {
                id: 'TahmKenchRWrapper',
                name: '집어삼키기',
                description: `탐 켄치가 몇 초 동안 챔피언을 집어삼키며 대상이 적이면 마법 피해를 입히고 아군이면 보호막을 부여합니다.`,
                cooldownBurn: '0',
                image: require('../../assets/lol_hero_icons/skills/TahmKenchRWrapper.png')
            },
        ],
    },
    {
        numID: 132,
        id: 'Taliyah_mid_jug',
        Key: '163',
        name: '탈리야',
        title: '바위술사',
        lore: `슈리마의 떠돌이 마법사 탈리야는 10대의 호기심과 어른으로서의 책임 사이에서 괴로워한다. 탈리야는 자신 안에서 커져 가는 힘의 본질을 깨닫기 위해 발로란 전역을 누빈 끝에, 최근에는 자신의 부족을 보호하기 위해 돌아왔다. 탈리야의 여린 마음을 약점으로 착각한 사람들은 호되게 대가를 치렀다. 탈리야의 천진난만한 모습 뒤에는 산도 움직이는 불굴의 의지와 대지도 흔드는 강인한 정신이 있기 때문이다.`,
        blurb: `슈리마의 떠돌이 마법사 탈리야는 10대의 호기심과 어른으로서의 책임 사이에서 괴로워한다. 탈리야는 자신 안에서 커져 가는 힘의 본질을 깨닫기 위해 발로란 전역을 누빈 끝에, 최근에는 자신의 부족을 보호하기 위해 돌아왔다. 탈리야의 여린 마음을 약점으로 착각한 사람들은 호되게 대가를 치렀다. 탈리야의 천진난만한 모습 뒤에는 산도 움직이는 불굴의 의지와 대지도 흔드는 강인한 정신이 있기 때문이다.`,
        image: require('../../assets/lol_hero_icons/Taliyah.png'),
        background_image: require('../../assets/lol_hero_icons/background/Taliyah.jpg'),
        stats: {"hp": 550, "hpperlevel": 104, "mp": 470, "mpperlevel": 30, "movespeed": 330, "armor": 18, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 525, "hpregen": 6.5, "hpregenperlevel": 0.65, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 58, "attackdamageperlevel": 3.3, "attackspeedperlevel": 1.36, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '바위타기',
                description: `벽 근처에서 이동 속도가 상승합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Taliyah_Passive.png')
            },
            {
                id: 'TaliyahQ',
                name: '파편 난사',
                description: `탈리야가 지정한 방향으로 바위 조각을 던집니다. 이 때 탈리야는 자유롭게 이동할 수 있으며 탈리야 아래의 땅이 다져집니다. 다져진 땅 위에서 파편 난사를 사용하면 다져진 땅이 사라지면서 적을 둔화하는 큰 바위를 던집니다.`,
                cooldownBurn: '7/6/5/4/3',
                image: require('../../assets/lol_hero_icons/skills/TaliyahQ.png')
            },
            {
                id: 'TaliyahWVC',
                name: '지각변동',
                description: `탈리야가 특정 지점을 솟구치게 만들어 탈리야가 선택한 방향으로 적을 띄워 올립니다.`,
                cooldownBurn: '14/12.5/11/9.5/8',
                image: require('../../assets/lol_hero_icons/skills/TaliyahWVC.png')
            },
            {
                id: 'TaliyahE',
                name: '대지의 파동',
                description: `적을 둔화시키는 바위밭을 만듭니다. 적이 그 위로 돌진하거나 밀려나면 바위가 폭발해 대상을 기절시킵니다.`,
                cooldownBurn: '14',
                image: require('../../assets/lol_hero_icons/skills/TaliyahE.png')
            },
            {
                id: 'TaliyahR',
                name: '바위술사의 벽',
                description: `아주 긴 벽을 세웁니다. 탈리야는 이 벽을 타고 이동할 수 있습니다.`,
                cooldownBurn: '180/150/120',
                image: require('../../assets/lol_hero_icons/skills/TaliyahR.png')
            },
        ],
    },
    {
        numID: 133,
        id: 'Talon_mid_jug',
        Key: '91',
        name: '탈론',
        title: '검의 그림자',
        lore: `탈론은 음지에서 암약하는 무자비한 자객이다. 불의의 일격을 가하는 데에도, 이상한 낌새가 느껴지기도 전에 자취를 감추는 데도 능하다. 거칠기 짝이 없는 녹서스의 거리에서 싸우고, 상대를 처치하고, 도둑질을 하면서 살아남았고 위험한 존재라는 명성을 쌓았다. 악명이 자자한 뒤 쿠토 가문에 발탁된 뒤로는 녹서스 제국의 명을 받들어 적의 지도자, 대장, 영웅은 물론이고, 감히 자신이 섬기는 주인의 심기를 거스르는 녹서스 인마저도 종횡무진 암살하고 있다.`,
        blurb: `탈론은 음지에서 암약하는 무자비한 자객이다. 불의의 일격을 가하는 데에도, 이상한 낌새가 느껴지기도 전에 자취를 감추는 데도 능하다. 거칠기 짝이 없는 녹서스의 거리에서 싸우고, 상대를 처치하고, 도둑질을 하면서 살아남았고 위험한 존재라는 명성을 쌓았다. 악명이 자자한 뒤 쿠토 가문에 발탁된 뒤로는 녹서스 제국의 명을 받들어 적의 지도자, 대장, 영웅은 물론이고, 감히 자신이 섬기는 주인의 심기를 거스르는 녹서스 인마저도 종횡무진 암살하고 있다.`,
        image: require('../../assets/lol_hero_icons/Talon.png'),
        background_image: require('../../assets/lol_hero_icons/background/Talon.jpg'),
        stats: {"hp": 658, "hpperlevel": 109, "mp": 400, "mpperlevel": 37, "movespeed": 335, "armor": 30, "armorperlevel": 4.7, "spellblock": 39, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 8.5, "hpregenperlevel": 0.75, "mpregen": 7.6, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 68, "attackdamageperlevel": 3.1, "attackspeedperlevel": 2.9, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '검의 최후',
                description: `탈론이 챔피언이나 대형 몬스터에게 스킬을 사용하면 최대 3회까지 중첩되는 상처가 남습니다. 상처가 3회 중첩된 챔피언에게 기본 공격을 가하면 출혈을 일으켜 일정 시간 동안 큰 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/TalonP.png')
            },
            {
                id: 'TalonQ',
                name: '녹서스식 외교',
                description: `탈론이 대상 유닛을 찌릅니다. 근접 공격이 가능한 거리에서 사용하면 치명타가 적용됩니다. 근접 공격이 불가능한 거리에서 사용하면 대상에게 도약해서 찌릅니다. 이 스킬로 대상을 처치하면 체력을 약간 회복하고 재사용 대기시간을 일부 돌려받습니다.`,
                cooldownBurn: '8/7.5/7/6.5/6',
                image: require('../../assets/lol_hero_icons/skills/TalonQ.png')
            },
            {
                id: 'TalonW',
                name: '갈퀴손',
                description: `탈론이 부메랑 단검을 여러 개 던져 명중하는 적에게 물리 피해를 줍니다. 단검이 다시 돌아올 때 맞은 적은 추가 피해를 입고 둔화됩니다.`,
                cooldownBurn: '9/8.5/8/7.5/7',
                image: require('../../assets/lol_hero_icons/skills/TalonW.png')
            },
            {
                id: 'TalonE',
                name: '암살자의 길',
                description: `탈론이 구조물이나 지형 위로 일정 거리를 도약해 넘습니다. 이 스킬 자체는 재사용 대기시간이 짧지만 한 번 넘은 지형은 상당 시간 동안 다시 넘을 수 없습니다.`,
                cooldownBurn: '0',
                image: require('../../assets/lol_hero_icons/skills/TalonE.png')
            },
            {
                id: 'TalonR',
                name: '그림자 공격',
                description: `탈론이 사방에 검을 던지면서 투명 상태가 되며 추가 이동 속도를 얻습니다. 투명 상태가 풀리면 검이 다시 탈론이 있는 곳으로 모여듭니다. 검이 움직일 때마다, 한 개 이상의 검에 맞은 적은 그림자 공격으로 물리 피해를 입습니다.`,
                cooldownBurn: '100/80/60',
                image: require('../../assets/lol_hero_icons/skills/TalonR.png')
            },
        ],
    },
    {
        numID: 134,
        id: 'Taric_sup',
        Key: '44',
        name: '타릭',
        title: '발로란의 방패',
        lore: `타릭은 초월적인 힘으로 룬테라의 생명과 사랑, 아름다움을 수호하는 수호자의 성위이다. 고국 데마시아에서 직무태만죄를 범하고 수치스럽게 추방당한 타릭은 속죄를 위해 타곤 산을 올랐고, 이 산 정상에서 하늘의 별들에게 더 큰 소명을 부여받았다. 고대 타곤의 신비한 힘을 가득 받아 끔찍한 공허의 침식으로부터 밤낮없이 세계를 지키는 발로란의 방패가 된 것이다.`,
        blurb: `타릭은 초월적인 힘으로 룬테라의 생명과 사랑, 아름다움을 수호하는 수호자의 성위이다. 고국 데마시아에서 직무태만죄를 범하고 수치스럽게 추방당한 타릭은 속죄를 위해 타곤 산을 올랐고, 이 산 정상에서 하늘의 별들에게 더 큰 소명을 부여받았다. 고대 타곤의 신비한 힘을 가득 받아 끔찍한 공허의 침식으로부터 밤낮없이 세계를 지키는 발로란의 방패가 된 것이다.`,
        image: require('../../assets/lol_hero_icons/Taric.png'),
        background_image: require('../../assets/lol_hero_icons/background/Taric.jpg'),
        stats: {"hp": 645, "hpperlevel": 99, "mp": 300, "mpperlevel": 60, "movespeed": 340, "armor": 40, "armorperlevel": 4.3, "spellblock": 28, "spellblockperlevel": 2.05, "attackrange": 150, "hpregen": 6, "hpregenperlevel": 0.5, "mpregen": 8.5, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 55, "attackdamageperlevel": 3.5, "attackspeedperlevel": 2, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '담대함',
                description: `타릭이 스킬을 사용하면 다음 2회의 기본 공격에 추가 마법 피해가 적용되고 공격 속도가 빨라지며 스킬의 재사용 대기시간이 단축됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Taric_Passive.png')
            },
            {
                id: 'TaricQ',
                name: '별빛 손길',
                description: `충전량을 모두 소모해 근처의 아군 챔피언을 회복시킵니다.담대함으로 강화된 기본 공격 시 충전 대기시간이 줄어듭니다.`,
                cooldownBurn: '3',
                image: require('../../assets/lol_hero_icons/skills/TaricQ.png')
            },
            {
                id: 'TaricW',
                name: '수호의 고리',
                description: `수호의 고리로 연결된 아군 챔피언과 타릭의 방어력이 상승합니다.연결된 아군 챔피언이 타릭 근처에 있는 동안 수호의 고리를 사용하면 연결된 아군에게 보호막을 씌웁니다. 타릭이 스킬을 사용하면 연결된 아군도 같은 스킬을 사용합니다.`,
                cooldownBurn: '15',
                image: require('../../assets/lol_hero_icons/skills/TaricW.png')
            },
            {
                id: 'TaricE',
                name: '황홀한 강타',
                description: `타릭이 천상의 별빛을 준비해 잠시 후 적에게 마법 피해를 입히고 기절시킵니다.`,
                cooldownBurn: '16/15/14/13/12',
                image: require('../../assets/lol_hero_icons/skills/TaricE.png')
            },
            {
                id: 'TaricR',
                name: '우주의 광휘',
                description: `잠시 후 근처의 아군 챔피언을 모두 우주의 에너지로 감싸 잠깐 동안 무적 상태로 만듭니다.`,
                cooldownBurn: '180/150/120',
                image: require('../../assets/lol_hero_icons/skills/TaricR.png')
            },
        ],
    },
    {
        numID: 135,
        id: 'Teemo_top_sup',
        Key: '17',
        name: '티모',
        title: '날쌘 정찰병',
        lore: `어떤 위협에도 꿈쩍 않는 티모는 끝 모를 적극성과 쾌활함으로 세상을 정찰한다. 티모는 확고한 도덕성을 가진 요들로, 밴들 시티의 정찰대 강령을 따르는 것을 자랑스럽게 여긴다. 강령을 얼마나 열심히 따르는지 그의 행동이 가져올 더 넓은 결과를 깨닫지 못하기도 한다. 더러 정찰대의 존재에 의문을 품는 자들도 있지만, 한 가지는 분명하다. 티모의 신념은 절대 얕잡아봐서는 안 된다.`,
        blurb: `어떤 위협에도 꿈쩍 않는 티모는 끝 모를 적극성과 쾌활함으로 세상을 정찰한다. 티모는 확고한 도덕성을 가진 요들로, 밴들 시티의 정찰대 강령을 따르는 것을 자랑스럽게 여긴다. 강령을 얼마나 열심히 따르는지 그의 행동이 가져올 더 넓은 결과를 깨닫지 못하기도 한다. 더러 정찰대의 존재에 의문을 품는 자들도 있지만, 한 가지는 분명하다. 티모의 신념은 절대 얕잡아봐서는 안 된다.`,
        image: require('../../assets/lol_hero_icons/Teemo.png'),
        background_image: require('../../assets/lol_hero_icons/background/Teemo.jpg'),
        stats: {"hp": 598, "hpperlevel": 104, "mp": 334, "mpperlevel": 25, "movespeed": 330, "armor": 24, "armorperlevel": 4.95, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 500, "hpregen": 5.5, "hpregenperlevel": 0.65, "mpregen": 9.6, "mpregenperlevel": 0.45, "crit": 0, "critperlevel": 0, "attackdamage": 54, "attackdamageperlevel": 3, "attackspeedperlevel": 3.38, "attackspeed": 0.69},
        spells: [
            {
                id: 'passive',
                name: '유격 전투',
                description: `티모가 아무 행동도 하지 않고 잠시 서 있으면 무기한 투명 상태가 됩니다. 수풀 속에서는 이동 중에도 투명 상태에 돌입해 유지할 수 있습니다 투명 상태에서 벗어나면 기습공격 효과를 얻어 몇 초간 공격 속도가 증가합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Teemo_P.png')
            },
            {
                id: 'BlindingDart',
                name: '실명 다트',
                description: `강력한 독으로 적의 시야를 가리고 피해를 입힙니다. 지속시간 동안 대상을 실명시킵니다.`,
                cooldownBurn: '7',
                image: require('../../assets/lol_hero_icons/skills/BlindingDart.png')
            },
            {
                id: 'MoveQuick',
                name: '신속한 이동',
                description: `티모의 이동 속도가 증가합니다. 포탑이나 적 챔피언에게 공격받으면 효과가 중단됩니다. 티모는 짧은 시간 공격 당하지 않으면 다시 이동 속도 증가 효과를 얻을 수 있습니다.`,
                cooldownBurn: '14',
                image: require('../../assets/lol_hero_icons/skills/MoveQuick.png')
            },
            {
                id: 'ToxicShot',
                name: '맹독 다트',
                description: `티모의 기본 공격에 맞은 적은 중독되어 4초 동안 매 초마다 피해를 입습니다. 기본 공격을 맞힐 때마다 독 피해도 같이 들어갑니다.`,
                cooldownBurn: '0',
                image: require('../../assets/lol_hero_icons/skills/ToxicShot.png')
            },
            {
                id: 'TeemoRCast',
                name: '유독성 함정',
                description: `티모가 가방에 있던 버섯을 사용하여 폭발성 독 함정을 던집니다. 적이 함정을 밟으면 독 구름이 퍼져나와 몇 초에 걸쳐 적의 이동 속도를 늦추고 피해를 입힙니다. 버섯 위에 새 버섯을 던지면 튕겨나며 사거리가 늘어납니다.`,
                cooldownBurn: '0.25',
                image: require('../../assets/lol_hero_icons/skills/TeemoRCast.png')
            },
        ],
    },
    {
        numID: 136,
        id: 'Thresh_sup',
        Key: '412',
        name: '쓰레쉬',
        title: '지옥의 간수',
        lore: `가학적이고 교활한 그림자 군도의 악령인 쓰레쉬는 이 세계에 고통을 전파하겠다는 야심을 품고 잠시도 쉬지 않는다. 원래는 신비로운 비밀이 가득한 지하 창고의 관리인이었으나, 삶이나 죽음보다 더 거대한 힘에 의해 타락했고 이제는 기발한 고문 방법을 생각해 내어 사람들을 괴롭히며, 오랫동안 견디기 힘든 고통을 가하여 서서히 망가뜨리는 일에 심취하고 있다. 쓰레쉬의 마수에 붙잡힌 자는 죽음으로도 그 손아귀를 벗어날 수 없다. 쓰레쉬가 랜턴에 영혼을 가두고는 영원히 끝나지 않는 고통을 가하기 때문이다.`,
        blurb: `가학적이고 교활한 그림자 군도의 악령인 쓰레쉬는 이 세계에 고통을 전파하겠다는 야심을 품고 잠시도 쉬지 않는다. 원래는 신비로운 비밀이 가득한 지하 창고의 관리인이었으나, 삶이나 죽음보다 더 거대한 힘에 의해 타락했고 이제는 기발한 고문 방법을 생각해 내어 사람들을 괴롭히며, 오랫동안 견디기 힘든 고통을 가하여 서서히 망가뜨리는 일에 심취하고 있다. 쓰레쉬의 마수에 붙잡힌 자는 죽음으로도 그 손아귀를 벗어날 수 없다. 쓰레쉬가 랜턴에 영혼을 가두고는...`,
        image: require('../../assets/lol_hero_icons/Thresh.png'),
        background_image: require('../../assets/lol_hero_icons/background/Thresh.jpg'),
        stats: {"hp": 600, "hpperlevel": 120, "mp": 274, "mpperlevel": 44, "movespeed": 330, "armor": 33, "armorperlevel": 0, "spellblock": 30, "spellblockperlevel": 1.55, "attackrange": 450, "hpregen": 7, "hpregenperlevel": 0.55, "mpregen": 6, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 56, "attackdamageperlevel": 2.2, "attackspeedperlevel": 3.5, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '지옥살이',
                description: `쓰레쉬는 근처에서 처치된 적의 영혼을 포획해 방어력과 주문력을 영구적으로 올릴 수 있습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Thresh_Passive.png')
            },
            {
                id: 'ThreshQ',
                name: '사형 선고',
                description: `쓰레쉬가 쇠사슬로 적을 묶어 자신 쪽으로 당겨옵니다. 스킬을 다시 사용하면 쓰레쉬가 적 쪽으로 당겨집니다.`,
                cooldownBurn: '19/16.5/14/11.5/9',
                image: require('../../assets/lol_hero_icons/skills/ThreshQ.png')
            },
            {
                id: 'ThreshW',
                name: '어둠의 통로',
                description: `쓰레쉬가 랜턴을 던져 근처의 아군 챔피언들을 피해로부터 보호합니다. 아군이 랜턴을 클릭하면 쓰레쉬에게 질주할 수 있습니다.`,
                cooldownBurn: '21/20/19/18/17',
                image: require('../../assets/lol_hero_icons/skills/ThreshW.png')
            },
            {
                id: 'ThreshE',
                name: '사슬 채찍',
                description: `쓰레쉬가 공격하기 위한 힘을 모아, 다음 공격까지 대기시간이 길수록 더 큰 피해를 가합니다. 활성화하면 쇠사슬을 휘둘러 맞은 적들을 휘두른 방향으로 밀어냅니다.`,
                cooldownBurn: '13/12.25/11.5/10.75/10',
                image: require('../../assets/lol_hero_icons/skills/ThreshE.png')
            },
            {
                id: 'ThreshRPenta',
                name: '영혼 감옥',
                description: `벽으로 된 감옥이 부서지면 둔화를 일으키며 피해를 입힙니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/ThreshRPenta.png')
            },
        ],
    },
    {
        numID: 137,
        id: 'Tristana_adc_mid',
        Key: '18',
        name: '트리스타나',
        title: '요들 사수',
        lore: `다른 많은 요들이 발견, 발명, 또는 그저 장난에 기력을 쏟지만, 트리스타나는 언제나 위대한 전사가 되기 위해 모험을 떠나는 꿈을 꿨다. 트리스타나는 룬테라, 룬테라의 파벌, 그리고 전쟁 이야기를 즐겨 들었고, 요들도 얼마든지 전설이 될 수 있다고 생각했다. 트리스타나는 이제 세계에 첫 발을 내딛으며, 든든한 대포 '부머'를 들고 변함없는 용기와 낙관적인 성격으로 전장에 뛰어 든다.`,
        blurb: `다른 많은 요들이 발견, 발명, 또는 그저 장난에 기력을 쏟지만, 트리스타나는 언제나 위대한 전사가 되기 위해 모험을 떠나는 꿈을 꿨다. 트리스타나는 룬테라, 룬테라의 파벌, 그리고 전쟁 이야기를 즐겨 들었고, 요들도 얼마든지 전설이 될 수 있다고 생각했다. 트리스타나는 이제 세계에 첫 발을 내딛으며, 든든한 대포 '부머'를 들고 변함없는 용기와 낙관적인 성격으로 전장에 뛰어 든다.`,
        image: require('../../assets/lol_hero_icons/Tristana.png'),
        background_image: require('../../assets/lol_hero_icons/background/Tristana.jpg'),
        stats: {"hp": 640, "hpperlevel": 102, "mp": 300, "mpperlevel": 32, "movespeed": 325, "armor": 30, "armorperlevel": 4.5, "spellblock": 28, "spellblockperlevel": 1.3, "attackrange": 525, "hpregen": 4, "hpregenperlevel": 0.65, "mpregen": 7.2, "mpregenperlevel": 0.45, "crit": 0, "critperlevel": 0, "attackdamage": 59, "attackdamageperlevel": 3.7, "attackspeedperlevel": 1.5, "attackspeed": 0.656},
        spells: [
            {
                id: 'passive',
                name: '정조준',
                description: `레벨이 올라갈수록 공격 사거리도 올라갑니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Tristana_Passive.png')
            },
            {
                id: 'TristanaQ',
                name: '속사',
                description: `트리스타나가 짧은 시간 동안 공격 속도를 높이며 빠르게 탄환을 발사합니다.`,
                cooldownBurn: '20/19/18/17/16',
                image: require('../../assets/lol_hero_icons/skills/TristanaQ.png')
            },
            {
                id: 'TristanaW',
                name: '로켓 점프',
                description: `트리스타나가 땅에 대포를 쏴 추진력을 얻어 먼 곳으로 이동합니다. 착륙한 지점 근처의 적 유닛에게 피해를 주며 잠깐 동안 이동 속도를 느리게 합니다.`,
                cooldownBurn: '22/20/18/16/14',
                image: require('../../assets/lol_hero_icons/skills/TristanaW.png')
            },
            {
                id: 'TristanaE',
                name: '폭발 화약',
                description: `트리스타나가 적을 처치할 때마다 대포알이 조각 조각 터지면서 주변 적에게 피해를 입힙니다. 스킬을 활성화하면 대상 적에게 폭탄을 부착하여, 잠시 후 터지면서 주위 유닛들에게도 피해를 입힙니다.`,
                cooldownBurn: '16/15.5/15/14.5/14',
                image: require('../../assets/lol_hero_icons/skills/TristanaE.png')
            },
            {
                id: 'TristanaR',
                name: '대구경 탄환',
                description: `트리스타나가 무기에 거대한 대포알을 장착하여 적 유닛에게 발사합니다. 이 스킬은 마법 피해를 입히고 적을 뒤로 밀어냅니다. 대상에게 폭발 화약이 붙어 있을 경우 폭발 범위가 두 배로 늘어납니다.`,
                cooldownBurn: '120/110/100',
                image: require('../../assets/lol_hero_icons/skills/TristanaR.png')
            },
        ],
    },
    {
        numID: 138,
        id: 'Trundle_top_jug',
        Key: '48',
        name: '트런들',
        title: '트롤 왕',
        lore: `트런들은 몸집이 크고 교활한데다 잔인한 면모를 두루 갖춘 트롤로, 일단 트런들이 몽둥이를 들면 굴복시키지 못할 상대는 없다. 심지어 프렐요드 전역을 통틀어서 말이다. 영역 본능이 매우 강한 트런들은 자신의 영토에 발을 디딘 멍청한 자들을 쫓아가서, 거대한 얼음 정수의 몽둥이를 들고 적을 뼛속까지 얼린 채 서서히 죽어가는 모습을 보고 껄껄 웃는다.`,
        blurb: `트런들은 몸집이 크고 교활한데다 잔인한 면모를 두루 갖춘 트롤로, 일단 트런들이 몽둥이를 들면 굴복시키지 못할 상대는 없다. 심지어 프렐요드 전역을 통틀어서 말이다. 영역 본능이 매우 강한 트런들은 자신의 영토에 발을 디딘 멍청한 자들을 쫓아가서, 거대한 얼음 정수의 몽둥이를 들고 적을 뼛속까지 얼린 채 서서히 죽어가는 모습을 보고 껄껄 웃는다.`,
        image: require('../../assets/lol_hero_icons/Trundle.png'),
        background_image: require('../../assets/lol_hero_icons/background/Trundle.jpg'),
        stats: {"hp": 650, "hpperlevel": 110, "mp": 340, "mpperlevel": 45, "movespeed": 350, "armor": 37, "armorperlevel": 3.9, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 6, "hpregenperlevel": 0.75, "mpregen": 7.5, "mpregenperlevel": 0.6, "crit": 0, "critperlevel": 0, "attackdamage": 68, "attackdamageperlevel": 4, "attackspeedperlevel": 2.9, "attackspeed": 0.67},
        spells: [
            {
                id: 'passive',
                name: '헌납',
                description: `트런들은 근처에서 적 유닛이 쓰러질 때마다 죽은 유닛의 최대 체력의 일정 비율만큼 체력이 회복됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Trundle_Passive.png')
            },
            {
                id: 'TrundleTrollSmash',
                name: '깨물기',
                description: `트런들이 상대를 물어뜯어 피해를 입히고 잠깐 둔화 효과를 주며 적의 공격력을 약간 흡수합니다.`,
                cooldownBurn: '3.5',
                image: require('../../assets/lol_hero_icons/skills/TrundleTrollSmash.png')
            },
            {
                id: 'trundledesecrate',
                name: '얼음 왕국',
                description: `트런들이 목표 지점을 자기 왕국으로 바꿔, 해당 지역에 있는 동안 공격 속도와 이동 속도가 증가하고 모든 시전자로부터 오는 치유 효과가 증가합니다.`,
                cooldownBurn: '16/15/14/13/12',
                image: require('../../assets/lol_hero_icons/skills/trundledesecrate.png')
            },
            {
                id: 'TrundleCircle',
                name: '얼음 기둥',
                description: `트런들이 목표 지점에 지나갈 수 없는 얼음 돌기둥을 생성합니다. 얼음 기둥 주변을 지나가는 모든 적 유닛의 이동 속도가 낮아집니다.`,
                cooldownBurn: '24/22/20/18/16',
                image: require('../../assets/lol_hero_icons/skills/TrundleCircle.png')
            },
            {
                id: 'TrundlePain',
                name: '진압',
                description: `트런들이 대상에게서 일정 비율의 체력과 방어력 및 마법 저항력을 즉시 훔칩니다. 다음 4초 동안 훔친 체력, 방어력, 마법 저항력이 두 배로 증가합니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/TrundlePain.png')
            },
        ],
    },
    {
        numID: 139,
        id: 'Tryndamere_top_mid',
        Key: '23',
        name: '트린다미어',
        title: '야만전사 왕',
        lore: `한때 트린다미어는 걷잡을 수 없는 분노와 증오의 힘을 원동력 삼아, 프렐요드를 돌아다니며 북방 제일가는 위대한 전사들에게 공공연한 도전을 일삼았다. 앞으로 닥칠 더욱 암울한 미래를 대비하기 위함이었다. 분노의 야만전사로서, 부족을 말살시킨 원수에게 복수할 날만을 고대하고 있었던 것이다. 하지만 최근에는 아바로사의 전쟁의 어머니인 애쉬의 동료가 되어 아바로사 부족민들과 함께 살고 있다. 트린다미어의 초인적인 힘과 전설에 나올 법한 불굴의 투지에 힘입어, 트린다미어 자신은 물론이고 새로이 동맹 관계가 된 아바로사 부족은 극도로 불리한 상황에서도 무수한 승리를 거두고 있다.`,
        blurb: `한때 트린다미어는 걷잡을 수 없는 분노와 증오의 힘을 원동력 삼아, 프렐요드를 돌아다니며 북방 제일가는 위대한 전사들에게 공공연한 도전을 일삼았다. 앞으로 닥칠 더욱 암울한 미래를 대비하기 위함이었다. 분노의 야만전사로서, 부족을 말살시킨 원수에게 복수할 날만을 고대하고 있었던 것이다. 하지만 최근에는 아바로사의 전쟁의 어머니인 애쉬의 동료가 되어 아바로사 부족민들과 함께 살고 있다. 트린다미어의 초인적인 힘과 전설에 나올 법한 불굴의 투지에 힘입어...`,
        image: require('../../assets/lol_hero_icons/Tryndamere.png'),
        background_image: require('../../assets/lol_hero_icons/background/Tryndamere.jpg'),
        stats: {"hp": 696, "hpperlevel": 108, "mp": 100, "mpperlevel": 0, "movespeed": 345, "armor": 33, "armorperlevel": 4.3, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 8.5, "hpregenperlevel": 0.9, "mpregen": 0, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 66, "attackdamageperlevel": 4, "attackspeedperlevel": 3.4, "attackspeed": 0.67},
        spells: [
            {
                id: 'passive',
                name: '격노',
                description: `트린다미어가 일반 공격, 치명타 공격 그리고 마지막 일격을 날릴 때마다 분노를 획득합니다. 분노는 트린다미어의 치명타 확률을 높이며 피의 갈망을 사용하면 소모됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Tryndamere_Passive.png')
            },
            {
                id: 'TryndamereQ',
                name: '피의 갈망',
                description: `트린다미어는 전투의 스릴에 희열을 느낍니다. 트린다미어의 체력이 낮으면 낮을수록 공격력이 상승합니다. 피의 갈망 스킬 사용 시 트린다미어는 분노 수치를 소모하여 체력을 회복할 수 있습니다.`,
                cooldownBurn: '12',
                image: require('../../assets/lol_hero_icons/skills/TryndamereQ.png')
            },
            {
                id: 'TryndamereW',
                name: '조롱의 외침',
                description: `트린다미어가 모욕적인 외침으로 주변 챔피언들의 공격력을 낮춥니다. 트린다미어에게서 등을 돌린 챔피언들은 이동 속도 역시 느려집니다.`,
                cooldownBurn: '14',
                image: require('../../assets/lol_hero_icons/skills/TryndamereW.png')
            },
            {
                id: 'TryndamereE',
                name: '회전 베기',
                description: `트린다미어가 공격 경로에 있는 적 유닛을 칼로 베어 피해를 입힙니다.`,
                cooldownBurn: '12/11/10/9/8',
                image: require('../../assets/lol_hero_icons/skills/TryndamereE.png')
            },
            {
                id: 'UndyingRage',
                name: '불사의 분노',
                description: `전투를 향한 트린다미어의 욕망이 너무나도 강해 죽을 수 없는 몸이 됩니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/UndyingRage.png')
            },
        ],
    },
    {
        numID: 140,
        id: 'TwistedFate_mid',
        Key: '4',
        name: '트위스티드 페이트',
        title: '카드의 달인',
        lore: `트위스티드 페이트는 악명 높은 카드의 달인이자 사기꾼이다. 뛰어난 도박 실력과 타고난 매력으로 발로란 어디에서나 부자와 어리석은 자들 모두에게 감탄과 원한을 한 몸에 사는 주인공이다. 매사에 진지한 법이 없고, 태평하고 으스대는 얼굴에는 비웃는 듯한 미소마저 감돈다. 트위스티드 페이트의 소매에는 늘 비장의 카드가 숨겨져 있으니까.`,
        blurb: `트위스티드 페이트는 악명 높은 카드의 달인이자 사기꾼이다. 뛰어난 도박 실력과 타고난 매력으로 발로란 어디에서나 부자와 어리석은 자들 모두에게 감탄과 원한을 한 몸에 사는 주인공이다. 매사에 진지한 법이 없고, 태평하고 으스대는 얼굴에는 비웃는 듯한 미소마저 감돈다. 트위스티드 페이트의 소매에는 늘 비장의 카드가 숨겨져 있으니까.`,
        image: require('../../assets/lol_hero_icons/TwistedFate.png'),
        background_image: require('../../assets/lol_hero_icons/background/TwistedFate.jpg'),
        stats: {"hp": 604, "hpperlevel": 108, "mp": 333, "mpperlevel": 39, "movespeed": 330, "armor": 21, "armorperlevel": 4.35, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 525, "hpregen": 5.5, "hpregenperlevel": 0.6, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 52, "attackdamageperlevel": 2.5, "attackspeedperlevel": 2.5, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '사기 주사위',
                description: `트위스티드 페이트는 유닛을 하나 처치할 때마다 '행운'의 주사위를 굴려 1에서 6까지의 골드를 추가로 얻습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Cardmaster_SealFate.png')
            },
            {
                id: 'WildCards',
                name: '와일드 카드',
                description: `트위스티드 페이트는 카드 세 장을 던져 지나가는 카드에 맞은 각 적 유닛에게 피해를 입힙니다.`,
                cooldownBurn: '6/5.75/5.5/5.25/5',
                image: require('../../assets/lol_hero_icons/skills/WildCards.png')
            },
            {
                id: 'PickACard',
                name: '카드 뽑기',
                description: `트위스티드 페이트가 카드 더미에서 다음 공격에 쓸 마법 카드를 한 장 골라 공격 시 추가 효과를 부여합니다.`,
                cooldownBurn: '6',
                image: require('../../assets/lol_hero_icons/skills/PickACard.png')
            },
            {
                id: 'CardmasterStack',
                name: '속임수 덱',
                description: `4번째 공격마다 트위스티드 페이트가 추가 피해를 입힙니다. 또한 공격 속도가 증가합니다.`,
                cooldownBurn: '0',
                image: require('../../assets/lol_hero_icons/skills/CardmasterStack.png')
            },
            {
                id: 'Destiny',
                name: '운명',
                description: `트위스티드 페이트가 적의 미래를 점치면서 모든 적 챔피언의 위치를 탐지해내고, 어디든지 이동할 수 있는 관문 스킬을 1.5초 동안 사용할 수 있게 됩니다.`,
                cooldownBurn: '180/150/120',
                image: require('../../assets/lol_hero_icons/skills/Destiny.png')
            },
        ],
    },
    {
        numID: 141,
        id: 'Twitch_adc_sup',
        Key: '29',
        name: '트위치',
        title: '역병 쥐',
        lore: `자운에서 전염병을 옮기는 쥐로 태어난 트위치는 열정적인 오물 전문가로, 앞발을 더럽히는 것을 두려워하지 않는다. 트위치는 필트오버의 부유층을 향해 화학물질로 강화한 석궁을 겨누며, 지상의 인간들의 더러움을 적나라하게 드러내기로 다짐했다. 지하동굴에 웅크리고 있을 때를 제외하면 늘 비밀스럽게 교활한 움직임을 일삼는 트위치는 버려진 보물을 찾아 쓰레기 더미를 뒤지고 있다. 곰팡이 슨 샌드위치라도 찾을 수 있을까 하며.`,
        blurb: `자운에서 전염병을 옮기는 쥐로 태어난 트위치는 열정적인 오물 전문가로, 앞발을 더럽히는 것을 두려워하지 않는다. 트위치는 필트오버의 부유층을 향해 화학물질로 강화한 석궁을 겨누며, 지상의 인간들의 더러움을 적나라하게 드러내기로 다짐했다. 지하동굴에 웅크리고 있을 때를 제외하면 늘 비밀스럽게 교활한 움직임을 일삼는 트위치는 버려진 보물을 찾아 쓰레기 더미를 뒤지고 있다. 곰팡이 슨 샌드위치라도 찾을 수 있을까 하며.`,
        image: require('../../assets/lol_hero_icons/Twitch.png'),
        background_image: require('../../assets/lol_hero_icons/background/Twitch.jpg'),
        stats: {"hp": 630, "hpperlevel": 104, "mp": 300, "mpperlevel": 40, "movespeed": 330, "armor": 27, "armorperlevel": 4.2, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 3.75, "hpregenperlevel": 0.6, "mpregen": 7.25, "mpregenperlevel": 0.7, "crit": 0, "critperlevel": 0, "attackdamage": 59, "attackdamageperlevel": 3.1, "attackspeedperlevel": 3.38, "attackspeed": 0.679},
        spells: [
            {
                id: 'passive',
                name: '맹독',
                description: `트위치의 기본 공격은 대상을 중독시켜 초당 고정 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Twitch_Passive.png')
            },
            {
                id: 'TwitchHideInShadows',
                name: '매복',
                description: `트위치의 이동 속도가 빨라지고 짧은 시간 동안 위장 상태가 됩니다. 위장 효과가 끝나면 잠시 공격 속도가 증가합니다.맹독에 걸린 적 챔피언이 죽으면 매복의 재사용 대기시간이 초기화됩니다.`,
                cooldownBurn: '16',
                image: require('../../assets/lol_hero_icons/skills/TwitchHideInShadows.png')
            },
            {
                id: 'TwitchVenomCask',
                name: '독약 병',
                description: `트위치가 명중하면 폭발하는 독약 병을 던져, 범위 내 대상들에게 둔화 효과를 부여하고 맹독을 적용합니다.`,
                cooldownBurn: '13/12/11/10/9',
                image: require('../../assets/lol_hero_icons/skills/TwitchVenomCask.png')
            },
            {
                id: 'TwitchExpunge',
                name: '오염',
                description: `트위치가 역병을 퍼뜨려 중독된 적들에게 더 큰 피해를 줍니다.`,
                cooldownBurn: '12/11/10/9/8',
                image: require('../../assets/lol_hero_icons/skills/TwitchExpunge.png')
            },
            {
                id: 'TwitchFullAutomatic',
                name: '무차별 난사',
                description: `트위치가 석궁의 위력을 최대한으로 끌어올려 멀리로 관통 화살들을 발사하며, 경로상의 모든 적을 꿰뚫습니다.`,
                cooldownBurn: '90',
                image: require('../../assets/lol_hero_icons/skills/TwitchFullAutomatic.png')
            },
        ],
    },
    {
        numID: 142,
        id: 'Udyr_jug',
        Key: '77',
        name: '우디르',
        title: '정령 주술사',
        lore: `현존하는 최강의 정령 주술사 우디르는 프렐요드의 모든 정령과 교감하며 정령이 바라는 바를 마음으로 이해하고 정령의 힘을 불러모아 우디르 특유의 고대 전투 방식을 선보인다. 우디르는 자신의 정신이 다른 이들로 인해 어지럽혀지지 않도록 내면의 균형을 추구하지만 외부의 균형도 함께 추구한다. 프렐요드의 신비로운 힘은 갈등과 역경을 이겨낸 성장이 있어야만 강해질 수 있기 때문이다. 우디르는 평화에 젖어 쇠락하지 않으려면 희생이 필요하다는 사실을 알고 있다.`,
        blurb: `현존하는 최강의 정령 주술사 우디르는 프렐요드의 모든 정령과 교감하며 정령이 바라는 바를 마음으로 이해하고 정령의 힘을 불러모아 우디르 특유의 고대 전투 방식을 선보인다. 우디르는 자신의 정신이 다른 이들로 인해 어지럽혀지지 않도록 내면의 균형을 추구하지만 외부의 균형도 함께 추구한다. 프렐요드의 신비로운 힘은 갈등과 역경을 이겨낸 성장이 있어야만 강해질 수 있기 때문이다. 우디르는 평화에 젖어 쇠락하지 않으려면 희생이 필요하다는 사실을 알고 있다.`,
        image: require('../../assets/lol_hero_icons/Udyr.png'),
        background_image: require('../../assets/lol_hero_icons/background/Udyr.jpg'),
        stats: {"hp": 664, "hpperlevel": 92, "mp": 271, "mpperlevel": 50, "movespeed": 350, "armor": 31, "armorperlevel": 4.7, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 6, "hpregenperlevel": 0.75, "mpregen": 7.5, "mpregenperlevel": 0.45, "crit": 0, "critperlevel": 0, "attackdamage": 62, "attackdamageperlevel": 4, "attackspeedperlevel": 3, "attackspeed": 0.65},
        spells: [
            {
                id: 'passive',
                name: '가교',
                description: `네 가지 기본 스킬로 여러 태세를 오갈 수 있습니다. 재사용 대기 중인 스킬을 재사용하면 재사용 대기 시간을 초기화하고 궁극의 효과를 부여합니다. 또한, 스킬 사용 후 다음 기본 공격 2회의 공격 속도가 증가합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Udyr_P.png')
            },
            {
                id: 'UdyrQ',
                name: '야생 발톱',
                description: `공격 속도가 증가하고 다음 두 차례 기본 공격으로 추가 물리 피해를 입힙니다. 재사용 시: 공격 속도가 더 많이 증가하고 다음 두 차례 기본 공격으로 번개를 일으켜 대상을 타격합니다.`,
                cooldownBurn: '6',
                image: require('../../assets/lol_hero_icons/skills/UdyrQ.png')
            },
            {
                id: 'UdyrW',
                name: '강철 갑옷',
                description: `보호막을 얻고 다음 두 차례의 기본 공격을 통해 체력을 회복합니다. 재사용 시: 강화된 보호막을 얻은 후 몇 초에 걸쳐 최대 체력에 비례해 체력을 회복합니다.`,
                cooldownBurn: '6',
                image: require('../../assets/lol_hero_icons/skills/UdyrW.png')
            },
            {
                id: 'UdyrE',
                name: '불길 쇄도',
                description: `이동 속도가 증가합니다. 이 태세를 취한 후 적에게 처음 기본 공격을 가할 때마다 대상을 기절시킵니다. 재사용 시: 몇 초간 이동 속도가 더 많이 증가하고 이동 불가 효과에 면역이 됩니다. `,
                cooldownBurn: '6',
                image: require('../../assets/lol_hero_icons/skills/UdyrE.png')
            },
            {
                id: 'UdyrR',
                name: '날개 돋친 폭풍',
                description: `얼음 폭풍으로 자신을 감싸 주변 적들에게 피해를 입히고 둔화시킵니다. 재사용 시: 적을 쫓아가며 추가 피해를 입히는 폭풍을 풀어놓습니다.`,
                cooldownBurn: '6',
                image: require('../../assets/lol_hero_icons/skills/UdyrR.png')
            },
        ],
    },
    {
        numID: 143,
        id: 'Urgot_top',
        Key: '6',
        name: '우르곳',
        title: '살상 병기',
        lore: `우르곳은 녹서스 제국에서 맹위를 떨치던 처형인이었으나, 자신이 그토록 숱한 목숨을 거두며 충성했던 조국에게 배신을 당했다. 그는 강철 사슬에 묶여 자운의 깊은 지하에 자리한 광산 감옥인 드레지에서 힘이 갖는 진정한 의미를 배워야 했다. 자운 전체를 혼돈에 빠뜨린 재난을 틈타 드레지를 지배하게 된 우르곳은 이제 범죄가 판을 치는 지하 세계에 짙은 그늘을 드리우고 있다. 한때 자신을 구속했던 바로 그 사슬로 희생자를 옭아매고, 새로운 정착지에서 가치 없는 자들을 숙청하며 고통의 도가니를 만들고 있다.`,
        blurb: `우르곳은 녹서스 제국에서 맹위를 떨치던 처형인이었으나, 자신이 그토록 숱한 목숨을 거두며 충성했던 조국에게 배신을 당했다. 그는 강철 사슬에 묶여 자운의 깊은 지하에 자리한 광산 감옥인 드레지에서 힘이 갖는 진정한 의미를 배워야 했다. 자운 전체를 혼돈에 빠뜨린 재난을 틈타 드레지를 지배하게 된 우르곳은 이제 범죄가 판을 치는 지하 세계에 짙은 그늘을 드리우고 있다. 한때 자신을 구속했던 바로 그 사슬로 희생자를 옭아매고, 새로운 정착지에서 가치...`,
        image: require('../../assets/lol_hero_icons/Urgot.png'),
        background_image: require('../../assets/lol_hero_icons/background/Urgot.jpg'),
        stats: {"hp": 655, "hpperlevel": 102, "mp": 340, "mpperlevel": 45, "movespeed": 330, "armor": 36, "armorperlevel": 5, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 350, "hpregen": 7.5, "hpregenperlevel": 0.7, "mpregen": 7.25, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 63, "attackdamageperlevel": 4, "attackspeedperlevel": 3.75, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '화염의 메아리',
                description: `우르곳은 기본 공격과 심판의 원으로 다리에서 불꽃을 발사해 물리 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Urgot_Passive.png')
            },
            {
                id: 'UrgotQ',
                name: '부식성 폭약',
                description: `부식성 폭약을 지정한 위치에 발사하여 물리 피해를 입히고 적중당한 적을 둔화시킵니다.`,
                cooldownBurn: '10/9.5/9/8.5/8',
                image: require('../../assets/lol_hero_icons/skills/UrgotQ.png')
            },
            {
                id: 'UrgotW',
                name: '심판의 원',
                description: `우르곳이 둔화된 상태로 주변 적을 사격합니다. 우르곳은 최근 다른 스킬을 적중시킨 적 챔피언을 우선 공격하며, 화염의 메아리를 발동시킬 수 있습니다.`,
                cooldownBurn: '12/9/6/3/0',
                image: require('../../assets/lol_hero_icons/skills/UrgotW.png')
            },
            {
                id: 'UrgotE',
                name: '경멸',
                description: `우르곳이 한 방향으로 돌진하며 자신에게 보호막을 씌우고 챔피언이 아닌 대상을 밀어냅니다. 적 챔피언과 충돌하면 우르곳이 멈추고 적 챔피언을 자신의 뒤로 던집니다.`,
                cooldownBurn: '16/15.5/15/14.5/14',
                image: require('../../assets/lol_hero_icons/skills/UrgotE.png')
            },
            {
                id: 'UrgotR',
                name: '불사의 공포',
                description: `우르곳이 마공학 송곳 섬광탄을 발사하여 섬광탄이 처음 적중한 적 챔피언에게 꽂힙니다. 해당 챔피언의 체력이 일정 수준 이하로 떨어지면 우르곳이 그를 약자라고 판단하여 처형할 수 있습니다.`,
                cooldownBurn: '100/85/70',
                image: require('../../assets/lol_hero_icons/skills/UrgotR.png')
            },
        ],
    },
    {
        numID: 144,
        id: 'Varus_adc_mid',
        Key: '110',
        name: '바루스',
        title: '응징의 화살',
        lore: `바루스는 고대 다르킨 중 한 명으로, 적이 거의 미쳐 버릴 정도로 고통을 준 뒤에야 화살을 날려 숨통을 끊는 것을 즐기는 치명적인 암살자이다. 다르킨 전쟁 말미에는 갇히는 신세가 되었으나 몇백 년 후 아이오니아 사냥꾼 두 명의 육신을 빼앗는 방식으로 탈출했다. 두 사냥꾼은 자신들도 모르게 바루스를 풀어준 형국이 되었고 이제는 그의 육신이 되어 바루스의 정기가 갇힌 활을 짊어질 수밖에 없는 운명이 되었다. 바루스는 이제 잔인한 복수를 위해 자신을 가둔 자를 찾아다니지만, 내면에 있는 필멸자들의 영혼이 바루스에게 끈질기게 저항한다.`,
        blurb: `바루스는 고대 다르킨 중 한 명으로, 적이 거의 미쳐 버릴 정도로 고통을 준 뒤에야 화살을 날려 숨통을 끊는 것을 즐기는 치명적인 암살자이다. 다르킨 전쟁 말미에는 갇히는 신세가 되었으나 몇백 년 후 아이오니아 사냥꾼 두 명의 육신을 빼앗는 방식으로 탈출했다. 두 사냥꾼은 자신들도 모르게 바루스를 풀어준 형국이 되었고 이제는 그의 육신이 되어 바루스의 정기가 갇힌 활을 짊어질 수밖에 없는 운명이 되었다. 바루스는 이제 잔인한 복수를 위해 자신을 가둔...`,
        image: require('../../assets/lol_hero_icons/Varus.png'),
        background_image: require('../../assets/lol_hero_icons/background/Varus.jpg'),
        stats: {"hp": 600, "hpperlevel": 105, "mp": 360, "mpperlevel": 40, "movespeed": 330, "armor": 27, "armorperlevel": 4.6, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 575, "hpregen": 3.5, "hpregenperlevel": 0.55, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 59, "attackdamageperlevel": 3.4, "attackspeedperlevel": 3.5, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '죽지 않는 복수심',
                description: `적을 처치하거나 어시스트를 올리면 잠시 바루스의 공격력과 주문력이 상승합니다. 대상이 챔피언인 경우 공격력과 주문력이 더 큰 폭으로 상승합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/VarusPassive.png')
            },
            {
                id: 'VarusQ',
                name: '꿰뚫는 화살',
                description: `바루스가 조준한 다음 강화된 화살을 발사하면, 조준한 시간에 비례하여 사거리와 피해량이 늘어납니다.`,
                cooldownBurn: '16/15/14/13/12',
                image: require('../../assets/lol_hero_icons/skills/VarusQ.png')
            },
            {
                id: 'VarusW',
                name: '역병 화살',
                description: `기본 지속 효과: 바루스의 기본 공격이 추가 마법 피해를 입히고 역병을 붙입니다. 바루스가 이 대상을 다른 스킬로 공격하면 역병이 폭발하며 대상의 최대 체력에 비례한 마법 피해를 입힙니다. 사용 시: 다음번 꿰뚫는 화살이 강화됩니다.`,
                cooldownBurn: '40',
                image: require('../../assets/lol_hero_icons/skills/VarusW.png')
            },
            {
                id: 'VarusE',
                name: '퍼붓는 화살',
                description: `바루스가 화살을 비처럼 쏟아부어 물리 피해를 주고 지면을 오염시킵니다. 오염된 지면은 적의 이동 속도를 늦추며 자신에 대한 체력 회복 및 재생 효과를 감소시킵니다.`,
                cooldownBurn: '18/16/14/12/10',
                image: require('../../assets/lol_hero_icons/skills/VarusE.png')
            },
            {
                id: 'VarusR',
                name: '부패의 사슬',
                description: `바루스가 부패의 촉수를 발사하여 처음 맞은 적 챔피언의 이동을 차단합니다. 촉수는 주변의 감염되지 않은 챔피언들에게 계속 뻗어 나가 닿은 적들을 모두 이동 불가 상태로 만듭니다.`,
                cooldownBurn: '100/80/60',
                image: require('../../assets/lol_hero_icons/skills/VarusR.png')
            },
        ],
    },
    {
        numID: 145,
        id: 'Vayne_adc_top',
        Key: '67',
        name: '베인',
        title: '어둠 사냥꾼',
        lore: `가차 없는 괴물 사냥꾼 샤우나 베인은 가족을 몰살한 마녀를 찾아 죽이기로 맹세했다. 손목에 장착된 석궁과 복수심에 불타는 마음으로 무장한 베인이 진정 행복할 때는 오직 그림자 속에서 질풍처럼 은화살을 날려 흑마법을 연구하는 자나 흑마법이 만들어낸 창조물을 벨 때뿐이다.`,
        blurb: `가차 없는 괴물 사냥꾼 샤우나 베인은 가족을 몰살한 마녀를 찾아 죽이기로 맹세했다. 손목에 장착된 석궁과 복수심에 불타는 마음으로 무장한 베인이 진정 행복할 때는 오직 그림자 속에서 질풍처럼 은화살을 날려 흑마법을 연구하는 자나 흑마법이 만들어낸 창조물을 벨 때뿐이다.`,
        image: require('../../assets/lol_hero_icons/Vayne.png'),
        background_image: require('../../assets/lol_hero_icons/background/Vayne.jpg'),
        stats: {"hp": 550, "hpperlevel": 103, "mp": 232, "mpperlevel": 35, "movespeed": 330, "armor": 23, "armorperlevel": 4.6, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 3.5, "hpregenperlevel": 0.55, "mpregen": 7, "mpregenperlevel": 0.4, "crit": 0, "critperlevel": 0, "attackdamage": 60, "attackdamageperlevel": 2.35, "attackspeedperlevel": 3.3, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '어둠 사냥꾼',
                description: `베인이 악당을 무자비하게 사냥합니다. 근처 적 챔피언에게 접근할 때 이동 속도가 증가합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Vayne_NightHunter.png')
            },
            {
                id: 'VayneTumble',
                name: '구르기',
                description: `베인이 구르기를 하며 다음 공격 대상을 신중하게 선택합니다. 베인의 다음 공격은 추가 피해를 입힙니다.`,
                cooldownBurn: '6/5/4/3/2',
                image: require('../../assets/lol_hero_icons/skills/VayneTumble.png')
            },
            {
                id: 'VayneSilveredBolts',
                name: '은화살',
                description: `베인이 사악한 존재에게만 피해를 주는 특수 금속이 달린 볼트를 사용합니다. 같은 대상에게 세 번째 공격 또는 스킬이 명중하면 대상 최대 체력에 비례한 고정 피해를 추가로 입힙니다.`,
                cooldownBurn: '0',
                image: require('../../assets/lol_hero_icons/skills/VayneSilveredBolts.png')
            },
            {
                id: 'VayneCondemn',
                name: '선고',
                description: `베인이 등에서 커다란 석궁을 뽑아 거대한 볼트를 발사하여 대상을 뒤로 날려보내고 대상에게 피해를 줍니다. 지형과 부딪힌 대상은 지형에 꽂힌 채 추가 피해를 받고 기절합니다.`,
                cooldownBurn: '20/18/16/14/12',
                image: require('../../assets/lol_hero_icons/skills/VayneCondemn.png')
            },
            {
                id: 'VayneInquisition',
                name: '결전의 시간',
                description: `격렬한 전투에 대비한 베인이 공격력을 높이고 구르기 시 투명 상태가 되며 구르기의 재사용 대기시간이 줄어듭니다. 어둠 사냥꾼의 이동 속도 증가량이 더 늘어납니다.`,
                cooldownBurn: '100/85/70',
                image: require('../../assets/lol_hero_icons/skills/VayneInquisition.png')
            },
        ],
    },
    {
        numID: 146,
        id: 'Veigar_mid_sup',
        Key: '45',
        name: '베이가',
        title: '악의 작은 지배자',
        lore: `밴들 시티에 사는 자유로운 영혼, 흑마법의 대가인 베이가는 오직 열정 하나만으로 필멸자는 감히 엄두조차 못 낼 힘을 손에 넣었다. 베이가는 수 천 년 동안 감춰졌던 신비로운 문헌을 탐독하여 요들 마법의 한계를 뛰어넘고 싶어했지만, 다른 요들들은 끝없는 호기심으로 우주의 수수께끼만을 고집스럽게 탐구하는 베이가를 얕잡아 보곤 했다. 사실 베이가는 스스로를 궁극의 악한 존재라고 여기지만, 마음 깊은 곳에는 타고난 도덕성이 숨어 있다. 그래서 베이가의 진짜 동기가 무엇인지 의문을 품는 사람들도 있다.`,
        blurb: `밴들 시티에 사는 자유로운 영혼, 흑마법의 대가인 베이가는 오직 열정 하나만으로 필멸자는 감히 엄두조차 못 낼 힘을 손에 넣었다. 베이가는 수 천 년 동안 감춰졌던 신비로운 문헌을 탐독하여 요들 마법의 한계를 뛰어넘고 싶어했지만, 다른 요들들은 끝없는 호기심으로 우주의 수수께끼만을 고집스럽게 탐구하는 베이가를 얕잡아 보곤 했다. 사실 베이가는 스스로를 궁극의 악한 존재라고 여기지만, 마음 깊은 곳에는 타고난 도덕성이 숨어 있다. 그래서 베이가의 진짜...`,
        image: require('../../assets/lol_hero_icons/Veigar.png'),
        background_image: require('../../assets/lol_hero_icons/background/Veigar.jpg'),
        stats: {"hp": 580, "hpperlevel": 108, "mp": 490, "mpperlevel": 26, "movespeed": 340, "armor": 18, "armorperlevel": 5.2, "spellblock": 32, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 6.5, "hpregenperlevel": 0.6, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 52, "attackdamageperlevel": 2.7, "attackspeedperlevel": 2.24, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '극악무도',
                description: `룬테라에서 가장 강력한 악의 원천인 베이가는 점점 더 강해지고 있습니다. 적 챔피언에게 스킬을 적중시키거나 처치에 관여할 때마다 주문력이 영구적으로 증가합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/VeigarEntropy.png')
            },
            {
                id: 'VeigarBalefulStrike',
                name: '사악한 일격',
                description: `베이가가 어둠의 에너지를 발사하여 처음 맞은 적 둘에게 마법 피해를 입힙니다. 이 스킬로 적 유닛을 처치하면 베이가의 주문력이 영구적으로 상승합니다.`,
                cooldownBurn: '6/5.5/5/4.5/4',
                image: require('../../assets/lol_hero_icons/skills/VeigarBalefulStrike.png')
            },
            {
                id: 'VeigarDarkMatter',
                name: '암흑 물질',
                description: `베이가가 하늘에서 거대한 암흑 물질을 떨어뜨려 마법 피해를 입힙니다. 극악 중첩이 쌓이면 암흑 물질의 재사용 대기시간이 감소합니다.`,
                cooldownBurn: '0',
                image: require('../../assets/lol_hero_icons/skills/VeigarDarkMatter.png')
            },
            {
                id: 'VeigarEventHorizon',
                name: '사건의 지평선',
                description: `베이가가 공간의 가장자리를 왜곡해 지나가는 적을 기절시키는 감옥을 생성합니다.`,
                cooldownBurn: '20/18.5/17/15.5/14',
                image: require('../../assets/lol_hero_icons/skills/VeigarEventHorizon.png')
            },
            {
                id: 'VeigarR',
                name: '태초의 폭발',
                description: `적 챔피언을 맞춰 매우 큰 마법 피해를 입힙니다. 피해량은 대상의 잃은 체력에 비례해 증가합니다.`,
                cooldownBurn: '100/80/60',
                image: require('../../assets/lol_hero_icons/skills/VeigarR.png')
            },
        ],
    },
    {
        numID: 147,
        id: 'Velkoz_mid_sup',
        Key: '161',
        name: '벨코즈',
        title: '공허의 눈',
        lore: `벨코즈가 룬테라에 나타난 첫 번째 공허태생인지는 확실하지 않다. 다만 벨코즈만큼 잔혹하면서 계산적인 지성체는 이제껏 존재하지 않았다. 다른 공허태생들은 주변의 모든 것을 닥치는 대로 집어삼키고 부패시키지만, 벨코즈는 현실 세계뿐 아니라 현실 세계에 사는 호전적이고 낯선 생명체들을 자세히 관찰하고 연구하여 공허가 이용할 수 있는 약점을 찾아낸다. 그렇다고 벨코즈가 그저 수동적인 관찰자라는 말은 아니다. 위협을 느끼면 치명적인 플라즈마 광선을 발사하거나 세상의 구성 자체를 분열시키는 방식으로 반격하기 때문이다.`,
        blurb: `벨코즈가 룬테라에 나타난 첫 번째 공허태생인지는 확실하지 않다. 다만 벨코즈만큼 잔혹하면서 계산적인 지성체는 이제껏 존재하지 않았다. 다른 공허태생들은 주변의 모든 것을 닥치는 대로 집어삼키고 부패시키지만, 벨코즈는 현실 세계뿐 아니라 현실 세계에 사는 호전적이고 낯선 생명체들을 자세히 관찰하고 연구하여 공허가 이용할 수 있는 약점을 찾아낸다. 그렇다고 벨코즈가 그저 수동적인 관찰자라는 말은 아니다. 위협을 느끼면 치명적인 플라즈마 광선을 발사하거나...`,
        image: require('../../assets/lol_hero_icons/Velkoz.png'),
        background_image: require('../../assets/lol_hero_icons/background/Velkoz.jpg'),
        stats: {"hp": 590, "hpperlevel": 102, "mp": 469, "mpperlevel": 21, "movespeed": 340, "armor": 22, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 525, "hpregen": 5.5, "hpregenperlevel": 0.55, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 55, "attackdamageperlevel": 3.1416, "attackspeedperlevel": 1.59, "attackspeed": 0.643},
        spells: [
            {
                id: 'passive',
                name: '유기물 분해',
                description: `벨코즈가 스킬을 적중시키면 대상에게 유기물 분해 중첩이 쌓입니다. 3회 중첩 시 대상은 큰 고정 피해를 입습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/VelKoz_Passive.png')
            },
            {
                id: 'VelkozQ',
                name: '플라즈마 분열',
                description: `벨코즈가 플라즈마 광선을 발사하고 나서 스킬을 재사용하거나 적에게 맞으면 광선이 둘로 갈라집니다. 이 광선은 적중 시 둔화를 적용하고 피해를 입힙니다.`,
                cooldownBurn: '7',
                image: require('../../assets/lol_hero_icons/skills/VelkozQ.png')
            },
            {
                id: 'VelkozW',
                name: '공허 균열',
                description: `벨코즈가 공허로 통하는 균열을 열어 최초 피해를 입힌 다음, 잠시 시간이 지난 후 두 번째 폭발로 피해를 가합니다.`,
                cooldownBurn: '1.5',
                image: require('../../assets/lol_hero_icons/skills/VelkozW.png')
            },
            {
                id: 'VelkozE',
                name: '지각 붕괴',
                description: `벨코즈가 일정 범위를 폭발시켜 적을 띄우고, 가까이 있는 적들은 약간 멀리 밀어냅니다.`,
                cooldownBurn: '16/15/14/13/12',
                image: require('../../assets/lol_hero_icons/skills/VelkozE.png')
            },
            {
                id: 'VelkozR',
                name: '생물 분해 광선',
                description: `벨코즈가 정신을 집중하고 광선을 발사하면, 광선이 2.5초 동안 커서 위치를 따라가며 마법 피해를 입히고 적을 둔화시킵니다. 유기물 분해 연구가 완료된 적 챔피언은 마법 피해 대신 고정 피해를 입습니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/VelkozR.png')
            },
        ],
    },
    {
        numID: 148,
        id: 'Vex_mid',
        Key: '711',
        name: '벡스',
        title: '우울주의자',
        lore: `그림자 군도의 검은 심장에서 고독한 요들 하나가 망령의 안개 속을 터덜터덜 걸으며 그 어두운 불행을 즐긴다. 청소년 특유의 끝없는 고뇌와 강력한 그림자를 달고 다니는 벡스는 혐오스러운 활기로 가득한 일반 세계와 거리를 두고 자신이 만들어 낸 우울함 속에서 살아간다. 야심은 부족하지만 침울한 분위기로 사전에 모든 침입자를 막으며 순식간에 색깔과 행복을 없앤다.`,
        blurb: `그림자 군도의 검은 심장에서 고독한 요들 하나가 망령의 안개 속을 터덜터덜 걸으며 그 어두운 불행을 즐긴다. 청소년 특유의 끝없는 고뇌와 강력한 그림자를 달고 다니는 벡스는 혐오스러운 활기로 가득한 일반 세계와 거리를 두고 자신이 만들어 낸 우울함 속에서 살아간다. 야심은 부족하지만 침울한 분위기로 사전에 모든 침입자를 막으며 순식간에 색깔과 행복을 없앤다.`,
        image: require('../../assets/lol_hero_icons/Vex.png'),
        background_image: require('../../assets/lol_hero_icons/background/Vex.jpg'),
        stats: {"hp": 590, "hpperlevel": 104, "mp": 490, "mpperlevel": 32, "movespeed": 335, "armor": 23, "armorperlevel": 4.45, "spellblock": 28, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 6.5, "hpregenperlevel": 0.6, "mpregen": 6, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 54, "attackdamageperlevel": 2.75, "attackspeedperlevel": 1, "attackspeed": 0.669},
        spells: [
            {
                id: 'passive',
                name: '파멸과 우울',
                description: `벡스가 주기적으로 강화 상태가 되어 다음 기본 스킬로 적 챔피언을 공포에 빠뜨리고 돌진을 방해합니다. 주변 적이 돌진할 때마다 벡스가 적에게 표식을 남깁니다. 표식을 소모해 추가 피해를 입힐 수 있으며 강화 상태의 재사용 대기시간이 감소합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Icons_Vex_Passive.png')
            },
            {
                id: 'VexQ',
                name: '안개 화살',
                description: `피해를 입히는 화살을 발사합니다. 화살은 날아가는 동안 속도가 빨라집니다.`,
                cooldownBurn: '8/7/6/5/4',
                image: require('../../assets/lol_hero_icons/skills/VexQ.png')
            },
            {
                id: 'VexW',
                name: '거리 두기',
                description: `보호막을 얻고 주변 적에게 피해를 입힙니다.`,
                cooldownBurn: '16/15/14/13/12',
                image: require('../../assets/lol_hero_icons/skills/VexW.png')
            },
            {
                id: 'VexE',
                name: '커지는 어둠',
                description: `피해를 입히고 둔화시키는 영역을 소환하며 적에게 우울을 적용합니다.`,
                cooldownBurn: '13',
                image: require('../../assets/lol_hero_icons/skills/VexE.png')
            },
            {
                id: 'VexR',
                name: '그림자 파동',
                description: `적 챔피언에게 표식을 남기는 발사체를 날립니다. 재사용하면 벡스가 대상에게 돌진하여 피해를 입힙니다.`,
                cooldownBurn: '140/120/100',
                image: require('../../assets/lol_hero_icons/skills/VexR.png')
            },
        ],
    },
    {
        numID: 149,
        id: 'Vi_jug',
        Key: '254',
        name: '바이',
        title: '필트오버의 집행자',
        lore: `자운의 암흑가에서 범죄를 일삼던 다혈질 성격의 바이는 충동적이고 성급한 데다 권위에 대한 존중이라고는 눈곱만큼도 없다. 어릴 적부터 혼자 자라다시피 한 그녀는 생존 본능이 치열하고 유머감각은 사악할 만큼 냉소적이다. 하지만 이제 바이는 평화 유지를 위해 필트오버의 경찰 소속이 되어 육중한 벽을 단숨에 부술 만큼 무시무시한 마법공학 건틀릿을 휘두르며 범죄자를 색출하고 있다.`,
        blurb: `자운의 암흑가에서 범죄를 일삼던 다혈질 성격의 바이는 충동적이고 성급한 데다 권위에 대한 존중이라고는 눈곱만큼도 없다. 어릴 적부터 혼자 자라다시피 한 그녀는 생존 본능이 치열하고 유머감각은 사악할 만큼 냉소적이다. 하지만 이제 바이는 평화 유지를 위해 필트오버의 경찰 소속이 되어 육중한 벽을 단숨에 부술 만큼 무시무시한 마법공학 건틀릿을 휘두르며 범죄자를 색출하고 있다.`,
        image: require('../../assets/lol_hero_icons/Vi.png'),
        background_image: require('../../assets/lol_hero_icons/background/Vi.jpg'),
        stats: {"hp": 655, "hpperlevel": 99, "mp": 295, "mpperlevel": 65, "movespeed": 340, "armor": 30, "armorperlevel": 4.7, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 10, "hpregenperlevel": 1, "mpregen": 8, "mpregenperlevel": 0.65, "crit": 0, "critperlevel": 0, "attackdamage": 63, "attackdamageperlevel": 3, "attackspeedperlevel": 2, "attackspeed": 0.644},
        spells: [
            {
                id: 'passive',
                name: '폭발 보호막',
                description: `바이는 시간이 흐르면 보호막이 1회 충전됩니다. 이 보호막은 적을 스킬로 적중시키면 활성화됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/ViPassive.png')
            },
            {
                id: 'ViQ',
                name: '금고 부수기',
                description: `바이가 건틀릿을 충전하여, 두꺼운 금고도 뚫을 위력의 타격을 가하며 전방으로 돌진합니다. 부딪힌 적들은 뒤로 밀려나고, 찌그러뜨리기가 중첩됩니다.`,
                cooldownBurn: '12/10.5/9/7.5/6',
                image: require('../../assets/lol_hero_icons/skills/ViQ.png')
            },
            {
                id: 'ViW',
                name: '찌그러뜨리기',
                description: `바이의 주먹이 적의 방어구를 찌그러뜨려 추가 피해를 가하며 공격 속도가 상승합니다.`,
                cooldownBurn: '0',
                image: require('../../assets/lol_hero_icons/skills/ViW.png')
            },
            {
                id: 'ViE',
                name: '끈질긴 힘',
                description: `바이의 다음 공격이 대상을 관통하여 뒤에 있는 적들에게 피해를 가합니다.`,
                cooldownBurn: '1',
                image: require('../../assets/lol_hero_icons/skills/ViE.png')
            },
            {
                id: 'ViR',
                name: '정지 명령',
                description: `바이가 적을 추격하며 중간에 걸리는 유닛들을 옆으로 밀어냅니다. 대상에 다다르면 공중으로 띄워올리고 뒤따라 점프하여, 바닥으로 쿵 찍어누릅니다.`,
                cooldownBurn: '140/115/90',
                image: require('../../assets/lol_hero_icons/skills/ViR.png')
            },
        ],
    },
    {
        numID: 150,
        id: 'Viego_jug',
        Key: '234',
        name: '비에고',
        title: '몰락한 왕',
        lore: `비에고는 오래전 잊힌 왕국의 지배자였다. 천년도 전에, 그는 아내 이졸데를 죽음에서 되찾고자 시도한 끝에 현재 대몰락으로 불리는 마법 재해를 일으켰다. 그 안에서 죽음을 맞은 비에고는 강력한 망령이 되었으나, 죽은 지 수백 년은 지난 왕비를 향한 집착에 여전히 고통받았다. 이제 비에고는 몰락한 왕으로 군림하여 죽음의 해로윙을 지배한다. 이졸데를 치유할 가망이 있는 것이라면 무엇이든 찾아 룬테라를 뒤지며, 잔혹한 심장의 상처에서 끝없이 쏟아지는 검은 안개로 그 앞길을 가로막는 이를 남김없이 처단한다.`,
        blurb: `비에고는 오래전 잊힌 왕국의 지배자였다. 천년도 전에, 그는 아내 이졸데를 죽음에서 되찾고자 시도한 끝에 현재 대몰락으로 불리는 마법 재해를 일으켰다. 그 안에서 죽음을 맞은 비에고는 강력한 망령이 되었으나, 죽은 지 수백 년은 지난 왕비를 향한 집착에 여전히 고통받았다. 이제 비에고는 몰락한 왕으로 군림하여 죽음의 해로윙을 지배한다. 이졸데를 치유할 가망이 있는 것이라면 무엇이든 찾아 룬테라를 뒤지며, 잔혹한 심장의 상처에서 끝없이 쏟아지는 검은...`,
        image: require('../../assets/lol_hero_icons/Viego.png'),
        background_image: require('../../assets/lol_hero_icons/background/Viego.jpg'),
        stats: {"hp": 630, "hpperlevel": 109, "mp": 10000, "mpperlevel": 0, "movespeed": 345, "armor": 34, "armorperlevel": 5.2, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 200, "hpregen": 7, "hpregenperlevel": 0.7, "mpregen": 0, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 60, "attackdamageperlevel": 3.5, "attackspeedperlevel": 2.5, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '군주의 지배',
                description: `비에고 앞에서 쓰러지는 적은 망령이 됩니다. 망령을 공격하면 비에고가 일시적으로 죽은 적의 몸을 지배하며 대상 최대 체력의 일부만큼 체력을 회복하고 대상의 기본 스킬과 아이템을 사용할 수 있습니다. 적의 궁극기는 제외되는 대신 자신의 궁극기를 비용 소모 없이 한 번 사용할 수 있습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Viego_Passive.png')
            },
            {
                id: 'ViegoQ',
                name: '몰락한 왕의 검',
                description: `비에고의 유령 칼날이 적중 시 현재 체력에 비례한 추가 피해를 입히고 최근 비에고의 스킬에 적중당한 적들을 두 번 공격하여 체력을 훔칩니다.비에고는 이 스킬을 사용해 양손검을 찔러 전방의 적을 꿰뚫을 수 있습니다.`,
                cooldownBurn: '5/4.5/4/3.5/3',
                image: require('../../assets/lol_hero_icons/skills/ViegoQ.png')
            },
            {
                id: 'ViegoW',
                name: '망령의 나락',
                description: `비에고가 충전한 다음 전방으로 돌진하여 응축된 검은 안개 구체를 발사하고 처음으로 적중한 적을 기절시킵니다.`,
                cooldownBurn: '8',
                image: require('../../assets/lol_hero_icons/skills/ViegoW.png')
            },
            {
                id: 'ViegoE',
                name: '안개의 길',
                description: `비에고가 명령을 내려 검은 안개가 지형을 맴돕니다. 비에고가 망령이 되어 안개 속에 숨고 위장 효과, 이동 속도, 공격 속도를 얻습니다.`,
                cooldownBurn: '14/12/10/8/6',
                image: require('../../assets/lol_hero_icons/skills/ViegoE.png')
            },
            {
                id: 'ViegoR',
                name: '심장 파괴자',
                description: `비에고가 근처로 순간이동하여 적 챔피언에게 다다르면 심장을 공격하고 파괴적인 충격파를 일으켜 대상 주변의 적을 밀어냅니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/ViegoR.png')
            },
        ],
    },
    {
        numID: 151,
        id: 'Viktor_mid',
        Key: '112',
        name: '빅토르',
        title: '기계화의 전령관',
        lore: `새로운 기술 시대의 도래를 알리는 전령 빅토르는 인류의 진보에 평생을 바쳤다. 인류의 지식수준을 한 단계 높이고자 하는 이상을 마음속에 간직한 채 기술의 영광된 진화만이 인간의 잠재력을 완전히 발현시킬 수 있는 유일한 방법이라고 믿는다. 강철과 과학의 힘을 빌려 기계 인간으로 거듭난 빅토르는 인류의 밝은 미래를 구현하기 위해 온 힘을 다한다.`,
        blurb: `새로운 기술 시대의 도래를 알리는 전령 빅토르는 인류의 진보에 평생을 바쳤다. 인류의 지식수준을 한 단계 높이고자 하는 이상을 마음속에 간직한 채 기술의 영광된 진화만이 인간의 잠재력을 완전히 발현시킬 수 있는 유일한 방법이라고 믿는다. 강철과 과학의 힘을 빌려 기계 인간으로 거듭난 빅토르는 인류의 밝은 미래를 구현하기 위해 온 힘을 다한다.`,
        image: require('../../assets/lol_hero_icons/Viktor.png'),
        background_image: require('../../assets/lol_hero_icons/background/Viktor.jpg'),
        stats: {"hp": 600, "hpperlevel": 104, "mp": 405, "mpperlevel": 45, "movespeed": 335, "armor": 23, "armorperlevel": 5.2, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 525, "hpregen": 8, "hpregenperlevel": 0.65, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 53, "attackdamageperlevel": 3, "attackspeedperlevel": 2.11, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '영광스러운 진화',
                description: `빅토르는 적을 상대로 킬을 달성하면 기본 스킬을 증강할 수 있습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Viktor_Passive.png')
            },
            {
                id: 'ViktorPowerTransfer',
                name: '힘의 흡수',
                description: `빅토르가 대상에게 강력한 에너지를 주입해 마법 피해를 주고, 보호막이 생기면서 다음번 기본 공격이 강화됩니다.증강: 사용 시 빅토르의 이동 속도가 빨라지고 보호막 흡수량이 60% 증가합니다.`,
                cooldownBurn: '9/8/7/6/5',
                image: require('../../assets/lol_hero_icons/skills/ViktorPowerTransfer.png')
            },
            {
                id: 'ViktorGravitonField',
                name: '중력장',
                description: `빅토르가 강력한 중력장을 생성해 해당 지역 안에 들어온 적들을 느리게 만듭니다. 해당 지역 위에 오래 머무르는 적은 기절합니다.증강: 빅토르의 단발성 피해를 입히는 스킬이 적을 둔화시킵니다.`,
                cooldownBurn: '17/16/15/14/13',
                image: require('../../assets/lol_hero_icons/skills/ViktorGravitonField.png')
            },
            {
                id: 'ViktorDeathRay',
                name: '죽음의 광선',
                description: `빅토르가 기계 팔을 사용해 땅을 일직선으로 가르는 혼돈의 빛줄기를 쏘아 경로상의 적 모두에게 피해를 가합니다.증강: 죽음의 광선 파동에 이어 폭발이 일어나 마법 피해를 입힙니다.`,
                cooldownBurn: '12/11/10/9/8',
                image: require('../../assets/lol_hero_icons/skills/ViktorDeathRay.png')
            },
            {
                id: 'ViktorChaosStorm',
                name: '혼돈의 폭풍',
                description: `빅토르가 목표 위치에 공간 왜곡을 일으켜 대상 지역에 있는 적에게 마법 피해를 주며 적의 정신 집중을 끊습니다. 왜곡된 공간은 주위 적에게 주기적으로 마법 피해를 줍니다. 빅토르는 이 공간 왜곡 폭풍을 움직일 수 있습니다.증강: 혼돈의 폭풍이 25% 더 빠르게 이동합니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/ViktorChaosStorm.png')
            },
        ],
    },
    {
        numID: 152,
        id: 'Vladimir_top_mid',
        Key: '8',
        name: '블라디미르',
        title: '진홍빛 사신',
        lore: `필멸자의 피를 갈구하고 탐닉하는 블라디미르는 녹서스 건국 초기부터 제국에서 벌어지는 각종 사건에 영향을 끼쳤다. 수명을 비정상적으로 늘린 데다가, 피를 제어하는 능력을 이용해 다른 이들의 정신과 육체를 제 것인 듯 손쉽게 통제한다. 블라디미르의 이 능력은 녹서스 귀족 사회의 호화찬란한 살롱에서는 광적인 추종자 세력을 만드는 정도로 그치지만, 어두운 뒷골목에서는 적의 피를 마지막 한 방울까지 말려 버리는 데 쓰인다.`,
        blurb: `필멸자의 피를 갈구하고 탐닉하는 블라디미르는 녹서스 건국 초기부터 제국에서 벌어지는 각종 사건에 영향을 끼쳤다. 수명을 비정상적으로 늘린 데다가, 피를 제어하는 능력을 이용해 다른 이들의 정신과 육체를 제 것인 듯 손쉽게 통제한다. 블라디미르의 이 능력은 녹서스 귀족 사회의 호화찬란한 살롱에서는 광적인 추종자 세력을 만드는 정도로 그치지만, 어두운 뒷골목에서는 적의 피를 마지막 한 방울까지 말려 버리는 데 쓰인다.`,
        image: require('../../assets/lol_hero_icons/Vladimir.png'),
        background_image: require('../../assets/lol_hero_icons/background/Vladimir.jpg'),
        stats: {"hp": 607, "hpperlevel": 110, "mp": 2, "mpperlevel": 0, "movespeed": 330, "armor": 27, "armorperlevel": 4.5, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 450, "hpregen": 7, "hpregenperlevel": 0.6, "mpregen": 0, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 55, "attackdamageperlevel": 3, "attackspeedperlevel": 2, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '핏빛 계약',
                description: `블라디미르는 추가 체력 30당 1의 주문력을 얻으며, 주문력 1당 1.6의 체력을 얻습니다. (이 효과는 서로 중첩되지 않습니다.)`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/VladimirP.png')
            },
            {
                id: 'VladimirQ',
                name: '수혈',
                description: `블라디미르가 대상 적으로부터 체력을 흡수합니다. 수혈을 충분히 한 뒤에는 수혈의 피해량과 치유량이 잠깐 동안 크게 늘어납니다.`,
                cooldownBurn: '9/7.9/6.8/5.7/4.6',
                image: require('../../assets/lol_hero_icons/skills/VladimirQ.png')
            },
            {
                id: 'VladimirSanguinePool',
                name: '피의 웅덩이',
                description: `블라디미르가 피의 웅덩이로 변해 2초 동안 공격 대상이 되지 않습니다. 또한 웅덩이 위에 서 있는 적의 속도가 느려지며 블라디미르가 이들의 체력을 흡수합니다.`,
                cooldownBurn: '28/25/22/19/16',
                image: require('../../assets/lol_hero_icons/skills/VladimirSanguinePool.png')
            },
            {
                id: 'VladimirE',
                name: '선혈의 파도',
                description: `블라디미르가 자신의 체력을 희생해 피의 웅덩이를 채웁니다. 웅덩이가 파도를 방출하면 주변 지역에 피해를 입히지만 적 유닛이 파도를 가로막을 수 있습니다.`,
                cooldownBurn: '13/11/9/7/5',
                image: require('../../assets/lol_hero_icons/skills/VladimirE.png')
            },
            {
                id: 'VladimirHemoplague',
                name: '혈사병',
                description: `블라디미르가 혈사병으로 목표 지역을 오염시킵니다. 질병에 감염된 적은 일정 시간 동안 더 큰 피해를 입습니다. 감염된 적은 몇 초 뒤 마법 피해를 입으며 피해를 입은 적 챔피언 수에 비례해 블라디미르의 체력이 회복됩니다.`,
                cooldownBurn: '120',
                image: require('../../assets/lol_hero_icons/skills/VladimirHemoplague.png')
            },
        ],
    },
    {
        numID: 153,
        id: 'Volibear_top',
        Key: '106',
        name: '볼리베어',
        title: '무자비한 폭풍',
        lore: `추종자들에게 볼리베어는 여전히 폭풍 그 자체이다. 강력하고 야만적이며 고집스러울 정도로 단호한 그는 프렐요드의 동토에 필멸자들이 나타나기 전부터 존재했다. 다른 반신들과 함께 일구어낸 그 땅을 무척이나 아끼는 볼리베어는 나약하기 그지없는 문명의 발달을 극도로 혐오했고, 결국 거칠고 폭력적이었던 옛 전통을 되찾기 위해 싸움을 시작한다. 그 앞을 가로막는 자는 누구든 볼리베어의 이빨과 발톱, 천둥의 위력을 맛보게 될 것이다.`,
        blurb: `추종자들에게 볼리베어는 여전히 폭풍 그 자체이다. 강력하고 야만적이며 고집스러울 정도로 단호한 그는 프렐요드의 동토에 필멸자들이 나타나기 전부터 존재했다. 다른 반신들과 함께 일구어낸 그 땅을 무척이나 아끼는 볼리베어는 나약하기 그지없는 문명의 발달을 극도로 혐오했고, 결국 거칠고 폭력적이었던 옛 전통을 되찾기 위해 싸움을 시작한다. 그 앞을 가로막는 자는 누구든 볼리베어의 이빨과 발톱, 천둥의 위력을 맛보게 될 것이다.`,
        image: require('../../assets/lol_hero_icons/Volibear.png'),
        background_image: require('../../assets/lol_hero_icons/background/Volibear.jpg'),
        stats: {"hp": 650, "hpperlevel": 104, "mp": 350, "mpperlevel": 70, "movespeed": 340, "armor": 31, "armorperlevel": 5.2, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 150, "hpregen": 9, "hpregenperlevel": 0.75, "mpregen": 6.25, "mpregenperlevel": 0.5, "crit": 0, "critperlevel": 0, "attackdamage": 60, "attackdamageperlevel": 3.5, "attackspeedperlevel": 2, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '무자비한 폭풍',
                description: `볼리베어가 기본 공격을 하거나 스킬을 사용하면 공격 속도가 증가하며 최대 중첩 상태에서 공격 시 주변 적들에게 추가 마법 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Volibear_Icon_P.png')
            },
            {
                id: 'VolibearQ',
                name: '번개 강타',
                description: `볼리베어가 적을 향해 이동할 때 이동 속도가 증가하며 처음으로 기본 공격하는 대상을 기절시키고 피해를 입힙니다.`,
                cooldownBurn: '14/13/12/11/10',
                image: require('../../assets/lol_hero_icons/skills/VolibearQ.png')
            },
            {
                id: 'VolibearW',
                name: '광란의 상처',
                description: `볼리베어가 적에게 피해를 입혀 적중 시 효과를 적용하고 표식을 남깁니다. 표식을 남긴 대상에게 다시 이 스킬을 사용하면 추가 피해를 입히고 체력을 회복합니다.`,
                cooldownBurn: '5',
                image: require('../../assets/lol_hero_icons/skills/VolibearW.png')
            },
            {
                id: 'VolibearE',
                name: '천공 분열',
                description: `볼리베어가 지정한 위치에 번개를 소환해 적에게 피해를 입히고 둔화시킵니다. 볼리베어가 폭발 반경 안에 있으면 보호막을 얻습니다.`,
                cooldownBurn: '12',
                image: require('../../assets/lol_hero_icons/skills/VolibearE.png')
            },
            {
                id: 'VolibearR',
                name: '폭풍을 부르는 자',
                description: `볼리베어가 지정한 위치로 도약하여 아래에 있는 적을 둔화시키고 피해를 입히며 추가 체력을 얻습니다. 볼리베어가 착지한 곳 근처에 있는 포탑은 일시적으로 비활성화됩니다.`,
                cooldownBurn: '160/135/110',
                image: require('../../assets/lol_hero_icons/skills/VolibearR.png')
            },
        ],
    },
    {
        numID: 154,
        id: 'Warwick_top_jug',
        Key: '19',
        name: '워윅',
        title: '자운의 고삐 풀린 분노',
        lore: `자운의 잿빛 골목을 무대로 사냥감을 찾는 괴수 워윅. 극한의 고통을 동반하는 각종 실험으로 완전히 변형된 그의 육체는 약품통, 펌프, 여러 기계가 결합된 복잡한 시스템과 연결되어 있으며, 정맥에는 연금술을 통해 조합한 분노가 주입된다. 어두운 그림자 속에서 느닷없이 튀어나오곤 하는 그는 사람들을 위협하는 도시의 범죄자들을 단숨에 사냥한다. 피 냄새를 맡고 나면 이성을 잃고 마는 워윅. 조금이라도 피를 흘린 자는 그 누구도 워윅의 손아귀에서 벗어날 수 없다.`,
        blurb: `자운의 잿빛 골목을 무대로 사냥감을 찾는 괴수 워윅. 극한의 고통을 동반하는 각종 실험으로 완전히 변형된 그의 육체는 약품통, 펌프, 여러 기계가 결합된 복잡한 시스템과 연결되어 있으며, 정맥에는 연금술을 통해 조합한 분노가 주입된다. 어두운 그림자 속에서 느닷없이 튀어나오곤 하는 그는 사람들을 위협하는 도시의 범죄자들을 단숨에 사냥한다. 피 냄새를 맡고 나면 이성을 잃고 마는 워윅. 조금이라도 피를 흘린 자는 그 누구도 워윅의 손아귀에서 벗어날 수...`,
        image: require('../../assets/lol_hero_icons/Warwick.png'),
        background_image: require('../../assets/lol_hero_icons/background/Warwick.jpg'),
        stats: {"hp": 620, "hpperlevel": 99, "mp": 280, "mpperlevel": 35, "movespeed": 335, "armor": 33, "armorperlevel": 4.4, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 4, "hpregenperlevel": 0.75, "mpregen": 7.45, "mpregenperlevel": 0.6, "crit": 0, "critperlevel": 0, "attackdamage": 65, "attackdamageperlevel": 3, "attackspeedperlevel": 2.3, "attackspeed": 0.638},
        spells: [
            {
                id: 'passive',
                name: '끝없는 허기',
                description: `워윅이 기본 공격 시 추가 마법 피해를 입힙니다. 워윅의 체력이 50% 아래로 내려가면 추가 피해량만큼 체력을 회복합니다. 체력이 25% 아래로 내려가면 체력 회복량이 세 배로 증가합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/WarwickP.png')
            },
            {
                id: 'WarwickQ',
                name: '야수의 송곳니',
                description: `워윅이 앞으로 도약해 대상을 물고 대상 최대 체력에 비례한 피해를 입힙니다. 이때 워윅은 입힌 피해량만큼 체력을 회복합니다.`,
                cooldownBurn: '6',
                image: require('../../assets/lol_hero_icons/skills/WarwickQ.png')
            },
            {
                id: 'WarwickW',
                name: '피의 사냥',
                description: `체력이 50% 미만인 적을 감지합니다. 이 대상에게 이동할 때는 워윅의 이동 속도가 증가하고 대상에 대한 공격 속도도 증가합니다. 적의 체력이 20% 아래로 내려가면 워윅이 광분하며 추가 효과가 세 배로 증가합니다.`,
                cooldownBurn: '100/85/70/55/40',
                image: require('../../assets/lol_hero_icons/skills/WarwickW.png')
            },
            {
                id: 'WarwickE',
                name: '원시의 포효',
                description: `2.5초 동안 워윅이 입는 피해가 감소합니다. 지속시간이 종료되거나 스킬을 재사용하면 워윅이 포효하며 근처의 모든 적을 1초 동안 도망치게 합니다.`,
                cooldownBurn: '15/14/13/12/11',
                image: require('../../assets/lol_hero_icons/skills/WarwickE.png')
            },
            {
                id: 'WarwickR',
                name: '무한의 구속',
                description: `워윅이 지정한 방향으로 도약해 (도약 거리는 추가 이동 속도에 비례) 첫 번째로 부딪힌 챔피언을 1.5초 동안 제압합니다.`,
                cooldownBurn: '110/90/70',
                image: require('../../assets/lol_hero_icons/skills/WarwickR.png')
            },
        ],
    },
    {
        numID: 155,
        id: 'Xayah_adc',
        Key: '498',
        name: '자야',
        title: '저항하는 자',
        lore: `바스타야 혁명을 일으키고 싶어하는 자야는 치명적인 정확성을 자랑하는 전사이다. 민첩한 몸놀림과 간교할 정도로 예리한 두뇌를 갖추었고, 칼날보다 날카로운 깃털로 자신을 막아서는 것은 모조리 베어버린다. 한때는 점점 수가 줄어들고 있는 바스타야 종족을 구해내기 위해 혼자만의 전쟁을 수행했으나, 이제는 동지이자 연인인 라칸과 늘 함께 싸운다. 둘은 바스타야 종족을 보호하고 먼 옛날 바스타야 종족이 누리던 영광을 되찾기 위해 노력하고 있다.`,
        blurb: `바스타야 혁명을 일으키고 싶어하는 자야는 치명적인 정확성을 자랑하는 전사이다. 민첩한 몸놀림과 간교할 정도로 예리한 두뇌를 갖추었고, 칼날보다 날카로운 깃털로 자신을 막아서는 것은 모조리 베어버린다. 한때는 점점 수가 줄어들고 있는 바스타야 종족을 구해내기 위해 혼자만의 전쟁을 수행했으나, 이제는 동지이자 연인인 라칸과 늘 함께 싸운다. 둘은 바스타야 종족을 보호하고 먼 옛날 바스타야 종족이 누리던 영광을 되찾기 위해 노력하고 있다.`,
        image: require('../../assets/lol_hero_icons/Xayah.png'),
        background_image: require('../../assets/lol_hero_icons/background/Xayah.jpg'),
        stats: {"hp": 630, "hpperlevel": 107, "mp": 340, "mpperlevel": 40, "movespeed": 330, "armor": 25, "armorperlevel": 4.2, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 525, "hpregen": 3.25, "hpregenperlevel": 0.75, "mpregen": 8.25, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 60, "attackdamageperlevel": 3.5, "attackspeedperlevel": 3.9, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '관통상',
                description: `스킬 사용 후 다음 기본 공격이 경로에 있는 적을 모두 관통하고 깃털을 남깁니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/XayahPassive.png')
            },
            {
                id: 'XayahQ',
                name: '깃털 연타',
                description: `자야가 일렬로 두 개의 깃털을 던집니다. 깃털은 마지막에 땅에 떨어지며 나중에 다시 불러들일 수 있습니다.`,
                cooldownBurn: '10/9.5/9/8.5/8',
                image: require('../../assets/lol_hero_icons/skills/XayahQ.png')
            },
            {
                id: 'XayahW',
                name: '죽음의 깃',
                description: `자야가 깃털 칼날 폭풍을 일으켜 기본 공격의 피해량과 공격 속도가 상승합니다. 적 챔피언을 공격하면 이동 속도도 증가합니다.`,
                cooldownBurn: '20/19/18/17/16',
                image: require('../../assets/lol_hero_icons/skills/XayahW.png')
            },
            {
                id: 'XayahE',
                name: '깃부르미',
                description: `모든 깃털을 자신에게로 불러들여 경로에 있는 적에게 피해를 입히고 속박시킵니다.`,
                cooldownBurn: '12/11/10/9/8',
                image: require('../../assets/lol_hero_icons/skills/XayahE.png')
            },
            {
                id: 'XayahR',
                name: '저항의 비상',
                description: `자야가 공중으로 도약해 잠시 동안 대상으로 지정할 수 없게 되고, 잠시 후 원뿔 모양으로 깃털을 발사합니다. 깃털은 마지막에 땅에 떨어지며 나중에 다시 불러들일 수 있습니다.`,
                cooldownBurn: '140/120/100',
                image: require('../../assets/lol_hero_icons/skills/XayahR.png')
            },
        ],
    },
    {
        numID: 156,
        id: 'Xerath_mid_sup',
        Key: '101',
        name: '제라스',
        title: '초월한 마법사',
        lore: `고대 슈리마의 초월한 마법사 제라스는 신비의 에너지가 석관의 파편에 둘러싸인 형상을 하고 있다. 그는 사막 아래의 고대 감옥 속에 수천 년 동안 갇혀 있다가 슈리마 제국의 부활과 함께 자유의 몸이 되었다. 막강한 힘을 손에 넣은 제라스는 응당 자신의 것이라 여기는 것들을 찬탈하고 신흥 문명 정복으로 자신만의 제국을 세우고자 광기의 질주를 시작한다.`,
        blurb: `고대 슈리마의 초월한 마법사 제라스는 신비의 에너지가 석관의 파편에 둘러싸인 형상을 하고 있다. 그는 사막 아래의 고대 감옥 속에 수천 년 동안 갇혀 있다가 슈리마 제국의 부활과 함께 자유의 몸이 되었다. 막강한 힘을 손에 넣은 제라스는 응당 자신의 것이라 여기는 것들을 찬탈하고 신흥 문명 정복으로 자신만의 제국을 세우고자 광기의 질주를 시작한다.`,
        image: require('../../assets/lol_hero_icons/Xerath.png'),
        background_image: require('../../assets/lol_hero_icons/background/Xerath.jpg'),
        stats: {"hp": 596, "hpperlevel": 106, "mp": 400, "mpperlevel": 22, "movespeed": 340, "armor": 22, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 525, "hpregen": 5.5, "hpregenperlevel": 0.55, "mpregen": 6.85, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 55, "attackdamageperlevel": 3, "attackspeedperlevel": 1.36, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '마나 쇄도',
                description: `제라스의 기본 공격이 주기적으로 마나를 회복해 줍니다. 제라스가 유닛을 처치하면 이 스킬의 재사용 대기시간이 감소합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Xerath_Passive1.png')
            },
            {
                id: 'XerathArcanopulseChargeUp',
                name: '비전 파동',
                description: `긴 사거리를 지닌 에너지 포를 쏘아 적중한 모든 적에게 마법 피해를 줍니다.`,
                cooldownBurn: '9/8/7/6/5',
                image: require('../../assets/lol_hero_icons/skills/XerathArcanopulseChargeUp.png')
            },
            {
                id: 'XerathArcaneBarrage2',
                name: '파멸의 눈',
                description: `비전 에너지 폭격을 가하여 목표 지역에 있는 모든 적의 속도를 늦추고 마법 피해를 가합니다. 범위 중앙에 있는 대상은 추가 피해를 입고, 더 강한 둔화 효과를 적용받습니다.`,
                cooldownBurn: '14/13/12/11/10',
                image: require('../../assets/lol_hero_icons/skills/XerathArcaneBarrage2.png')
            },
            {
                id: 'XerathMageSpear',
                name: '충격 구체',
                description: `적 한 명에게 마법 피해를 주며 기절시킵니다.`,
                cooldownBurn: '13/12.5/12/11.5/11',
                image: require('../../assets/lol_hero_icons/skills/XerathMageSpear.png')
            },
            {
                id: 'XerathLocusOfPower2',
                name: '비전 의식',
                description: `제라스가 이동 불가 상태가 되며, 원거리 공격을 여러 발 발사할 수 있게 됩니다.`,
                cooldownBurn: '130/115/100',
                image: require('../../assets/lol_hero_icons/skills/XerathLocusOfPower2.png')
            },
        ],
    },
    {
        numID: 157,
        id: 'XinZhao_jug',
        Key: '5',
        name: '신 짜오',
        title: '데마시아의 호위무사',
        lore: `신 짜오는 데마시아를 통치하는 라이트실드 왕조에 충성을 바치는 결의에 가득 찬 전사이다. 신 짜오는 한 때 녹서스의 검투사로 싸우는 형벌에 처해져 셀 수 없이 많은 시합에서 살아남았지만 데마시아 군이 신 짜오를 해방시켜 준 후, 용감한 해방군인 데마시아 군에 목숨을 다해 충성하기로 맹세했다. 손에 익은 삼조창으로 무장한 신 짜오는 이제 자신을 받아들여 준 데마시아 왕국을 위해 어떤 적이 어떠한 상황에서 달려든다 해도 담대하게 맞선다.`,
        blurb: `신 짜오는 데마시아를 통치하는 라이트실드 왕조에 충성을 바치는 결의에 가득 찬 전사이다. 신 짜오는 한 때 녹서스의 검투사로 싸우는 형벌에 처해져 셀 수 없이 많은 시합에서 살아남았지만 데마시아 군이 신 짜오를 해방시켜 준 후, 용감한 해방군인 데마시아 군에 목숨을 다해 충성하기로 맹세했다. 손에 익은 삼조창으로 무장한 신 짜오는 이제 자신을 받아들여 준 데마시아 왕국을 위해 어떤 적이 어떠한 상황에서 달려든다 해도 담대하게 맞선다.`,
        image: require('../../assets/lol_hero_icons/XinZhao.png'),
        background_image: require('../../assets/lol_hero_icons/background/XinZhao.jpg'),
        stats: {"hp": 640, "hpperlevel": 106, "mp": 274, "mpperlevel": 55, "movespeed": 345, "armor": 35, "armorperlevel": 5, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 8, "hpregenperlevel": 0.7, "mpregen": 7.25, "mpregenperlevel": 0.45, "crit": 0, "critperlevel": 0, "attackdamage": 63, "attackdamageperlevel": 3, "attackspeedperlevel": 3.5, "attackspeed": 0.645},
        spells: [
            {
                id: 'passive',
                name: '결심',
                description: `세 번째 기본 공격 시마다 추가 피해를 입히고 자신의 체력을 회복합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/XinZhaoP.png')
            },
            {
                id: 'XinZhaoQ',
                name: '삼조격',
                description: `신 짜오의 다음 세 번의 기본 공격이 더 큰 피해를 입히고, 세 번째 공격에서 상대를 공중으로 띄웁니다.`,
                cooldownBurn: '7/6.5/6/5.5/5',
                image: require('../../assets/lol_hero_icons/skills/XinZhaoQ.png')
            },
            {
                id: 'XinZhaoW',
                name: '풍전참뢰',
                description: `신 짜오가 창으로 앞을 가른 뒤 그대로 찌릅니다. 적중당한 적은 둔화되며 도전 받은 상태가 됩니다.`,
                cooldownBurn: '12/11/10/9/8',
                image: require('../../assets/lol_hero_icons/skills/XinZhaoW.png')
            },
            {
                id: 'XinZhaoE',
                name: '무쌍돌격',
                description: `신 짜오가 적에게 돌격하여 공격 속도를 얻고 그 지점에 있던 모든 적에게 피해를 입히며 잠시 둔화시킵니다. 도전 받은 상태인 대상에게는 무쌍돌격의 사거리가 증가합니다.`,
                cooldownBurn: '11',
                image: require('../../assets/lol_hero_icons/skills/XinZhaoE.png')
            },
            {
                id: 'XinZhaoR',
                name: '현월수호',
                description: `신 짜오가 자신이 최근에 피해를 입힌 적에게 도전합니다. 신 짜오가 주위 적들에게 각 유닛의 현재 체력에 비례한 피해를 입히고 도전 받지 않은 대상을 뒤로 밀어냅니다. 적 챔피언이 일정 거리 밖에 있을 경우 신 짜오를 공격해도 피해를 입히지 못합니다.`,
                cooldownBurn: '120/110/100',
                image: require('../../assets/lol_hero_icons/skills/XinZhaoR.png')
            },
        ],
    },
    {
        numID: 158,
        id: 'Yasuo',
        Key: '157',
        name: '야스오',
        title: '용서받지 못한 자',
        lore: `굳은 결의를 품은 아이오니아의 검객 야스오는 날렵한 검술과 바람을 자유로이 다루는 능력으로 적을 쓰러뜨린다. 젊은 시절, 자부심으로 가득 찼던 야스오는 스승을 살해한 누명을 쓰게 되고, 결백을 증명할 길이 없는 상황에서 급기야는 자신을 보호하기 위해 친형까지 죽음으로 이끌게 된다. 스승을 살해한 진범이 결국 밝혀졌지만, 지금도 야스오는 자신의 검을 인도하는 바람에만 의존한 채 고향 아이오니아를 배회하고 있다. 과거의 자신을 아직 용서하지 못한 채로.`,
        blurb: `굳은 결의를 품은 아이오니아의 검객 야스오는 날렵한 검술과 바람을 자유로이 다루는 능력으로 적을 쓰러뜨린다. 젊은 시절, 자부심으로 가득 찼던 야스오는 스승을 살해한 누명을 쓰게 되고, 결백을 증명할 길이 없는 상황에서 급기야는 자신을 보호하기 위해 친형까지 죽음으로 이끌게 된다. 스승을 살해한 진범이 결국 밝혀졌지만, 지금도 야스오는 자신의 검을 인도하는 바람에만 의존한 채 고향 아이오니아를 배회하고 있다. 과거의 자신을 아직 용서하지 못한 채로.`,
        image: require('../../assets/lol_hero_icons/Yasuo.png'),
        background_image: require('../../assets/lol_hero_icons/background/Yasuo.jpg'),
        stats: {"hp": 590, "hpperlevel": 110, "mp": 100, "mpperlevel": 0, "movespeed": 345, "armor": 32, "armorperlevel": 4.6, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 6.5, "hpregenperlevel": 0.9, "mpregen": 0, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 60, "attackdamageperlevel": 3, "attackspeedperlevel": 3.5, "attackspeed": 0.697},
        spells: [
            {
                id: 'passive',
                name: '낭인의 길',
                description: `야스오의 치명타 확률이 증가합니다. 또한, 야스오는 이동할 때마다 보호막이 충전되며, 챔피언이나 몬스터로부터 피해를 입으면 보호막이 발동됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Yasuo_Passive.png')
            },
            {
                id: 'YasuoQ1Wrapper',
                name: '강철 폭풍',
                description: `전방으로 내질러 일직선 상의 모든 적에게 피해를 입힙니다.적중 시, 몇 초간 폭풍 구름 효과가 1회 중첩됩니다. 2회 중첩되면 강철 폭풍 스킬이 회오리바람을 발사하여 공중으로 띄워올립니다.강철 폭풍은 기본 공격으로 간주되어 같은 효과가 적용됩니다.`,
                cooldownBurn: '4',
                image: require('../../assets/lol_hero_icons/skills/YasuoQ1Wrapper.png')
            },
            {
                id: 'YasuoW',
                name: '바람 장막',
                description: `4초간 모든 적의 투사체를 막아주는 움직이는 벽을 생성합니다.`,
                cooldownBurn: '25/23/21/19/17',
                image: require('../../assets/lol_hero_icons/skills/YasuoW.png')
            },
            {
                id: 'YasuoE',
                name: '질풍검',
                description: `대상 적을 뚫고 돌진하여 마법 피해를 입힙니다. 이후 사용할 때마다 돌진의 피해량이 증가하며 최대치에 도달하면 더 이상 증가하지 않습니다.몇 초 내에는 동일한 대상에게 재사용할 수 없습니다.돌진 도중 사용할 경우, 강철 폭풍이 원형으로 타격합니다.`,
                cooldownBurn: '0.5/0.4/0.3/0.2/0.1',
                image: require('../../assets/lol_hero_icons/skills/YasuoE.png')
            },
            {
                id: 'YasuoR',
                name: '최후의 숨결',
                description: `공중에 뜬 적 챔피언에게 점멸하여 물리 피해를 입히고, 해당 지역에서 공중에 떠 있는 모든 적을 공중에 붙들어둡니다. 기류가 최대치로 차는 대신, 폭풍 구름의 중첩이 모두 초기화됩니다.이후 몇 초 동안 야스오의 치명타에 높은 방어구 관통력이 추가로 적용됩니다.`,
                cooldownBurn: '70/50/30',
                image: require('../../assets/lol_hero_icons/skills/YasuoR.png')
            },
        ],
    },
    {
        numID: 159,
        id: 'Yone_mid_top',
        Key: '777',
        name: '요네',
        title: '잊히지 못한 자',
        lore: `생전에 야스오의 이부형제였던 요네는 마을 검술 학교에서 촉망받는 학생이었다. 그러나 형제의 손에 죽음을 맞이한 후 영혼 세계의 악령에 쫓기자 악령의 검으로 악령을 죽일 수밖에 없었다. 악령의 가면을 써야 하는 저주를 받게 된 요네는 자신이 어떤 존재가 되었는지 알아내기 위해 쉬지 않고 그 악령과 같은 존재들을 뒤쫓는다.`,
        blurb: `생전에 야스오의 이부형제였던 요네는 마을 검술 학교에서 촉망받는 학생이었다. 그러나 형제의 손에 죽음을 맞이한 후 영혼 세계의 악령에 쫓기자 악령의 검으로 악령을 죽일 수밖에 없었다. 악령의 가면을 써야 하는 저주를 받게 된 요네는 자신이 어떤 존재가 되었는지 알아내기 위해 쉬지 않고 그 악령과 같은 존재들을 뒤쫓는다.`,
        image: require('../../assets/lol_hero_icons/Yone.png'),
        background_image: require('../../assets/lol_hero_icons/background/Yone.jpg'),
        stats: {"hp": 620, "hpperlevel": 105, "mp": 500, "mpperlevel": 0, "movespeed": 345, "armor": 33, "armorperlevel": 4.6, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 7.5, "hpregenperlevel": 0.75, "mpregen": 0, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 60, "attackdamageperlevel": 2, "attackspeedperlevel": 3.5, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '사냥꾼의 길',
                description: `요네가 두 번째 공격을 할 때마다 마법 피해를 입힙니다. 또한 요네의 치명타 확률이 증가합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/YonePassive.png')
            },
            {
                id: 'YoneQ',
                name: '필멸의 검',
                description: `전방으로 검을 내질러 일직선상의 모든 적에게 피해를 입힙니다.적중 시, 몇 초간 폭풍 구름 효과가 1회 중첩됩니다. 2회 중첩되면 전방으로 돌진하며 돌풍을 날려 적을 공중으로 띄워 올립니다.필멸의 검은 기본 공격으로 간주되어 같은 효과가 적용됩니다.`,
                cooldownBurn: '4',
                image: require('../../assets/lol_hero_icons/skills/YoneQ.png')
            },
            {
                id: 'YoneW',
                name: '영혼 가르기',
                description: `전방 원뿔 범위 내 모든 적을 가르며 보호막을 획득합니다. 적중한 챔피언 수만큼 보호막 흡수량이 증가합니다.영혼 가르기의 재사용 대기시간과 시전 시간은 공격 속도에 비례합니다.`,
                cooldownBurn: '14',
                image: require('../../assets/lol_hero_icons/skills/YoneW.png')
            },
            {
                id: 'YoneE',
                name: '영혼해방',
                description: `요네의 영혼이 육신을 떠나 이동 속도가 증가합니다. 지속시간이 끝나면 요네의 영혼은 다시 육신으로 돌아오며 영혼 상태에서 입힌 피해량의 일부를 다시 입힙니다.`,
                cooldownBurn: '22/19/16/13/10',
                image: require('../../assets/lol_hero_icons/skills/YoneE.png')
            },
            {
                id: 'YoneR',
                name: '운명봉인',
                description: `요네가 강력한 일격을 날리며 경로에 있는 마지막 챔피언 뒤로 순간적으로 이동하고 적중한 모든 적을 자신 쪽으로 끌어당깁니다.`,
                cooldownBurn: '120/100/80',
                image: require('../../assets/lol_hero_icons/skills/YoneR.png')
            },
        ],
    },
    {
        numID: 160,
        id: 'Yorick_top',
        Key: '83',
        name: '요릭',
        title: '영혼의 길잡이',
        lore: `오래 전 잊혀진 종교 교단의 마지막 생존자 요릭은 망자를 거느리는, 축복이자 저주인 능력을 소유하고 있다. 그에게로 몰려드는 썩은 시체와 울부짖는 영혼은 그림자 군도에 발이 묶인 그의 유일한 동반자다. 대몰락의 저주로부터 조국을 구원하겠다는 신성한 뜻을 품고 있지만 그의 행동은 괴이하기만 하다.`,
        blurb: `오래 전 잊혀진 종교 교단의 마지막 생존자 요릭은 망자를 거느리는, 축복이자 저주인 능력을 소유하고 있다. 그에게로 몰려드는 썩은 시체와 울부짖는 영혼은 그림자 군도에 발이 묶인 그의 유일한 동반자다. 대몰락의 저주로부터 조국을 구원하겠다는 신성한 뜻을 품고 있지만 그의 행동은 괴이하기만 하다.`,
        image: require('../../assets/lol_hero_icons/Yorick.png'),
        background_image: require('../../assets/lol_hero_icons/background/Yorick.jpg'),
        stats: {"hp": 650, "hpperlevel": 114, "mp": 300, "mpperlevel": 60, "movespeed": 340, "armor": 39, "armorperlevel": 5.2, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 8, "hpregenperlevel": 0.8, "mpregen": 7.5, "mpregenperlevel": 0.75, "crit": 0, "critperlevel": 0, "attackdamage": 62, "attackdamageperlevel": 5, "attackspeedperlevel": 2, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '영혼의 길잡이',
                description: `저주받은 무리: 요릭이 안개 망령 무리를 소환해 주변 적을 공격합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Yorick_P.png')
            },
            {
                id: 'YorickQ',
                name: '최후의 의식',
                description: `요릭이 다음번 기본 공격 시 추가 피해를 입히고 체력을 회복합니다. 대상을 처치하면 무덤이 생성됩니다.`,
                cooldownBurn: '7/6.25/5.5/4.75/4',
                image: require('../../assets/lol_hero_icons/skills/YorickQ.png')
            },
            {
                id: 'YorickW',
                name: '망자의 진',
                description: `요릭이 대상 지점에 벽을 세워 적의 이동을 막습니다. 벽은 공격을 받으면 파괴됩니다.`,
                cooldownBurn: '20/18/16/14/12',
                image: require('../../assets/lol_hero_icons/skills/YorickW.png')
            },
            {
                id: 'YorickE',
                name: '애도의 안개',
                description: `요릭이 대상에게 피해를 입히고 이동 속도를 늦추며 표식을 남기는 안개의 구를 던집니다.`,
                cooldownBurn: '12/11/10/9/8',
                image: require('../../assets/lol_hero_icons/skills/YorickE.png')
            },
            {
                id: 'YorickR',
                name: '군도의 장송곡',
                description: `요릭이 안개 마녀를 소환합니다. 요릭이 안개 마녀의 표적을 공격하면 추가 피해를 입힙니다. 안개 마녀는 죽은 적을 안개 망령으로 다시 일으킵니다.`,
                cooldownBurn: '160/130/100',
                image: require('../../assets/lol_hero_icons/skills/YorickR.png')
            },
        ],
    },
    {
        numID: 161,
        id: 'Yuumi_sup',
        Key: '350',
        name: '유미',
        title: '마법 고양이',
        lore: `유미는 밴들 시티 출신의 마법 고양이로 한때 요들 마법사 노라와 함께 살았다. 어느 날 노라가 알 수 없는 이유로 종적을 감추자 유미는 자아를 지닌 노라의 책 '관문의 서'의 수호자가 되었으며, 책 페이지 안에 존재하는 차원문을 타고 주인을 찾는 여정에 나섰다. 애정을 갈구하는 유미는 여정을 함께 떠날 친절한 동료들을 구하며, 빛나는 방패와 단호한 결의로 그들을 보호한다. 노라의 책은 유미가 눈앞에 놓인 임무에 집중하도록 하기 위해 애쓰지만, 유미는 낮잠이나 생선 같은 세상 속 즐거움에 이따금 한눈을 팔곤 한다. 물론 유미도 결국은 항상 주인을 찾는 일로 되돌아온다.`,
        blurb: `유미는 밴들 시티 출신의 마법 고양이로 한때 요들 마법사 노라와 함께 살았다. 어느 날 노라가 알 수 없는 이유로 종적을 감추자 유미는 자아를 지닌 노라의 책 '관문의 서'의 수호자가 되었으며, 책 페이지 안에 존재하는 차원문을 타고 주인을 찾는 여정에 나섰다. 애정을 갈구하는 유미는 여정을 함께 떠날 친절한 동료들을 구하며, 빛나는 방패와 단호한 결의로 그들을 보호한다. 노라의 책은 유미가 눈앞에 놓인 임무에 집중하도록 하기 위해 애쓰지만, 유미는...`,
        image: require('../../assets/lol_hero_icons/Yuumi.png'),
        background_image: require('../../assets/lol_hero_icons/background/Yuumi.jpg'),
        stats: {"hp": 500, "hpperlevel": 69, "mp": 440, "mpperlevel": 45, "movespeed": 330, "armor": 25, "armorperlevel": 4.2, "spellblock": 25, "spellblockperlevel": 1.1, "attackrange": 425, "hpregen": 5, "hpregenperlevel": 0.55, "mpregen": 10, "mpregenperlevel": 0.4, "crit": 0, "critperlevel": 0, "attackdamage": 49, "attackdamageperlevel": 3.1, "attackspeedperlevel": 1, "attackspeed": 0.625},
        spells: [
            {
                id: 'passive',
                name: '야옹이 친구',
                description: `기본 공격이나 스킬로 챔피언을 맞히면 주기적으로 유미가 체력을 회복하고 다음으로 밀착하는 아군의 체력을 회복시킵니다.유미는 밀착한 아군과 특별한 유대를 형성합니다. 가장 유대가 긴밀한 아군에게 밀착한 동안 유미의 스킬이 강화됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/YuumiP.png')
            },
            {
                id: 'YuumiQ',
                name: '사르르탄',
                description: `유미가 미사일을 발사해 처음으로 맞힌 적에게 피해를 입히고 둔화시킵니다. 미사일이 1.35초 이상 날아가 적중할 경우 피해량이 추가되고 둔화 효과가 강화됩니다. 단짝에게 붙어있을 때는 둔화 효과가 항상 강화되며, 둔화 적용 시 단짝이 강화되어 적중 시 추가 피해를 입힙니다.아군과 밀착한 상태일 때는 미사일의 궤도를 잠시 마우스로 조종할 수 있습니다.`,
                cooldownBurn: '6.5',
                image: require('../../assets/lol_hero_icons/skills/YuumiQ.png')
            },
            {
                id: 'YuumiW',
                name: '너랑 유미랑!',
                description: `유미가 대상 아군에게 돌진하여 포탑을 제외한 유닛이 대상으로 지정할 수 없는 상태가 됩니다. 단짝에게 붙어있을 때 유미의 체력 회복 및 보호막 효과가 증폭되고 단짝은 적중 시 체력을 회복합니다.`,
                cooldownBurn: '0',
                image: require('../../assets/lol_hero_icons/skills/YuumiW.png')
            },
            {
                id: 'YuumiE',
                name: '슈우우웅',
                description: `유미가 보호막을 얻고 이동 속도와 공격 속도가 증가합니다. 아군과 밀착된 상태인 경우 이 효과는 유미 대신 해당 아군에게 적용됩니다.`,
                cooldownBurn: '10',
                image: require('../../assets/lol_hero_icons/skills/YuumiE.png')
            },
            {
                id: 'YuumiR',
                name: '대단원',
                description: `유미가 정신을 집중해 파동을 다섯 번 발사합니다. 파동은 적에게 피해를 입히고 아군의 체력을 회복시킵니다. 정신을 집중하는 동안 이동하거나 밀착할 수 있으며, 슈우우웅! 스킬도 사용할 수 있습니다. 단짝에게 붙어있으면 마우스로 이 스킬을 조종할 수 있습니다.`,
                cooldownBurn: '120/110/100',
                image: require('../../assets/lol_hero_icons/skills/YuumiR.png')
            },
        ],
    },
    {
        numID: 162,
        id: 'Zac_jug',
        Key: '154',
        name: '자크',
        title: '비밀 병기',
        lore: `자크는 화학공학 지층을 따라 흐른 독성물질이 자운의 지하동굴 깊은 곳에 위치한 웅덩이에 모여 만들어진 생명체이다. 이처럼 변변치 못한 태생에도 불구하고 자크는 원시적인 진흙의 상태에서 지성을 갖춘 존재로 성장했다. 그는 자운의 배관 속에 살면서 도움이 필요한 이들을 돕거나 자운의 망가진 기반시설을 재건하기 위해 이따금 모습을 드러낸다.`,
        blurb: `자크는 화학공학 지층을 따라 흐른 독성물질이 자운의 지하동굴 깊은 곳에 위치한 웅덩이에 모여 만들어진 생명체이다. 이처럼 변변치 못한 태생에도 불구하고 자크는 원시적인 진흙의 상태에서 지성을 갖춘 존재로 성장했다. 그는 자운의 배관 속에 살면서 도움이 필요한 이들을 돕거나 자운의 망가진 기반시설을 재건하기 위해 이따금 모습을 드러낸다.`,
        image: require('../../assets/lol_hero_icons/Zac.png'),
        background_image: require('../../assets/lol_hero_icons/background/Zac.jpg'),
        stats: {"hp": 685, "hpperlevel": 109, "mp": 0, "mpperlevel": 0, "movespeed": 340, "armor": 33, "armorperlevel": 4.7, "spellblock": 32, "spellblockperlevel": 2.05, "attackrange": 175, "hpregen": 5, "hpregenperlevel": 0.5, "mpregen": 0, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 60, "attackdamageperlevel": 3.4, "attackspeedperlevel": 1.6, "attackspeed": 0.736},
        spells: [
            {
                id: 'passive',
                name: '세포 분열',
                description: `자크는 스킬로 적을 맞힐 때마다 몸에서 조각이 떨어져 나갑니다. 이 조각들을 다시 흡수하면 체력을 회복할 수 있습니다. 자크는 치명상을 입으면 4조각으로 갈라졌다가 다시 합쳐지려고 모입니다. 몸 조각 중 하나라도 생존할 경우, 살아남은 조각의 체력에 비례한 체력을 가지고 부활합니다. 각각의 조각은 자크의 최대 체력, 방어력과 마법 저항력의 일부를 보유합니다. 이 스킬의 재사용 대기시간은 5분입니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/ZacPassive.png')
            },
            {
                id: 'ZacQ',
                name: '탄성 주먹',
                description: `자크가 팔을 쭉 뻗어 적을 붙잡습니다. 다른 적을 공격하면 둘을 서로에게 던져 충돌하게 합니다.`,
                cooldownBurn: '14/12.5/11/9.5/8',
                image: require('../../assets/lol_hero_icons/skills/ZacQ.png')
            },
            {
                id: 'ZacW',
                name: '불안정 물질',
                description: `자크의 몸이 폭발하며 주위 적들에게 대상 최대 체력의 일정 비율에 해당하는 마법 피해를 입힙니다.`,
                cooldownBurn: '5',
                image: require('../../assets/lol_hero_icons/skills/ZacW.png')
            },
            {
                id: 'ZacE',
                name: '새총 발사',
                description: `자크가 지면에 두 팔을 붙이고 뒤로 늘어난 다음, 전방으로 몸을 날립니다.`,
                cooldownBurn: '22/19/16/13/10',
                image: require('../../assets/lol_hero_icons/skills/ZacE.png')
            },
            {
                id: 'ZacR',
                name: '바운스!',
                description: `자크가 4회 튀어 올라 적중당한 적을 공중에 띄우고 둔화시킵니다.`,
                cooldownBurn: '120/105/90',
                image: require('../../assets/lol_hero_icons/skills/ZacR.png')
            },
        ],
    },
    {
        numID: 163,
        id: 'Zed_mid_jug',
        Key: '238',
        name: '제드',
        title: '그림자의 주인',
        lore: `제드는 극도로 무자비하고 인정사정없는 인물로, 녹서스 침공군을 몰아내기 위해 아이오니아의 전통 마법과 무술을 집약시킨다는 의도로 설립한 그림자단의 수장이다. 아이오니아 전쟁 중 제드는 녹서스에게 이기고 싶다는 간절한 마음에서 그림자 비급의 봉인을 해제해 버렸다. 그 사악한 비급은 강력한 만큼이나 위험하고, 사용자를 타락의 길로 빠뜨리는 것이었다. 하지만 제드는 아랑곳하지 않고 모든 금단의 비술을 익혔다. 자신의 국가에, 아니면 자신이 만든 그림자단에 위협이 될 만한 것을 모조리 파괴하기 위해.`,
        blurb: `제드는 극도로 무자비하고 인정사정없는 인물로, 녹서스 침공군을 몰아내기 위해 아이오니아의 전통 마법과 무술을 집약시킨다는 의도로 설립한 그림자단의 수장이다. 아이오니아 전쟁 중 제드는 녹서스에게 이기고 싶다는 간절한 마음에서 그림자 비급의 봉인을 해제해 버렸다. 그 사악한 비급은 강력한 만큼이나 위험하고, 사용자를 타락의 길로 빠뜨리는 것이었다. 하지만 제드는 아랑곳하지 않고 모든 금단의 비술을 익혔다. 자신의 국가에, 아니면 자신이 만든 그림자단에...`,
        image: require('../../assets/lol_hero_icons/Zed.png'),
        background_image: require('../../assets/lol_hero_icons/background/Zed.jpg'),
        stats: {"hp": 654, "hpperlevel": 99, "mp": 200, "mpperlevel": 0, "movespeed": 345, "armor": 32, "armorperlevel": 4.7, "spellblock": 29, "spellblockperlevel": 2.05, "attackrange": 125, "hpregen": 7, "hpregenperlevel": 0.65, "mpregen": 50, "mpregenperlevel": 0, "crit": 0, "critperlevel": 0, "attackdamage": 63, "attackdamageperlevel": 3.4, "attackspeedperlevel": 3.3, "attackspeed": 0.651},
        spells: [
            {
                id: 'passive',
                name: '약자 멸시',
                description: `제드가 체력이 낮은 적을 기본 공격하면 마법 피해를 추가로 입힙니다. 같은 적 챔피언에게는 몇 초가 지나야 이 효과가 다시 적용됩니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/ZedP.png')
            },
            {
                id: 'ZedQ',
                name: '예리한 표창',
                description: `제드와 그림자가 표창을 던집니다.각 표창은 적에게 명중하면 피해를 입힙니다.`,
                cooldownBurn: '6',
                image: require('../../assets/lol_hero_icons/skills/ZedQ.png')
            },
            {
                id: 'ZedW',
                name: '살아있는 그림자',
                description: `기본 지속 효과: 제드와 그림자가 같은 스킬로 동일한 대상을 공격하면 제드가 기력을 회복합니다. 기력 회복은 스킬 사용 시마다 한 번씩만 가능합니다.사용 시: 제드의 그림자가 전방으로 질주하여, 몇 초간 그 자리에 유지됩니다. 이 스킬을 다시 사용하면 제드가 그림자와 위치를 바꿉니다.`,
                cooldownBurn: '20/19/18/17/16',
                image: require('../../assets/lol_hero_icons/skills/ZedW.png')
            },
            {
                id: 'ZedE',
                name: '그림자 베기',
                description: `제드와 그림자가 각각 주위 적을 베어 피해를 입힙니다. 그림자의 공격에 맞은 적은 둔화됩니다.`,
                cooldownBurn: '5/4.5/4/3.5/3',
                image: require('../../assets/lol_hero_icons/skills/ZedE.png')
            },
            {
                id: 'ZedR',
                name: '죽음의 표식',
                description: `제드가 잠시 대상으로 지정할 수 없는 상태가 되어 적 챔피언에게 돌진하며 표식을 남깁니다. 3초가 지나면 표식이 발동되며 표식이 적용된 동안 제드가 대상에게 가한 피해의 일부를 입힙니다.`,
                cooldownBurn: '120/110/100',
                image: require('../../assets/lol_hero_icons/skills/ZedR.png')
            },
        ],
    },
    {
        numID: 164,
        id: 'Zeri_adc_mid',
        Key: '221',
        name: '제리',
        title: '자운의 불꽃',
        lore: `자운 노동자 계층 출신의 고집 세고 활발한 제리는 전기 마법으로 자신의 힘과 손수 제작한 총을 충전한다. 그녀의 불안정한 힘은 감정을 반영하고 그 불꽃은 번개처럼 빠른 삶을 닮았다. 동정심 많은 제리는 가족과 고향에 대한 애정으로 싸움에 임한다. 가끔 도우려는 의지가 강해 역효과를 일으키기도 하지만, 이웃을 위해 싸울 때 그들 또한 함께한다는 사실을 믿고 있다.`,
        blurb: `자운 노동자 계층 출신의 고집 세고 활발한 제리는 전기 마법으로 자신의 힘과 손수 제작한 총을 충전한다. 그녀의 불안정한 힘은 감정을 반영하고 그 불꽃은 번개처럼 빠른 삶을 닮았다. 동정심 많은 제리는 가족과 고향에 대한 애정으로 싸움에 임한다. 가끔 도우려는 의지가 강해 역효과를 일으키기도 하지만, 이웃을 위해 싸울 때 그들 또한 함께한다는 사실을 믿고 있다.`,
        image: require('../../assets/lol_hero_icons/Zeri.png'),
        background_image: require('../../assets/lol_hero_icons/background/Zeri.jpg'),
        stats: {"hp": 600, "hpperlevel": 110, "mp": 250, "mpperlevel": 45, "movespeed": 330, "armor": 24, "armorperlevel": 4.2, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 500, "hpregen": 3.25, "hpregenperlevel": 0.7, "mpregen": 6, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 56, "attackdamageperlevel": 2, "attackspeedperlevel": 2, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '살아있는 배터리',
                description: `제리의 기본 공격은 마법 피해를 입히며 스킬로 간주됩니다. 이동하거나 집중 사격을 사용하면 제리의 스파크 팩에 에너지가 쌓입니다. 완전히 충전되면 제리의 다음 기본 공격이 추가 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/ZeriP.png')
            },
            {
                id: 'ZeriQ',
                name: '집중 사격',
                description: `처음 적중한 적에게 물리 피해를 입히는 공격 7발을 발사합니다. 이 스킬은 기본 공격으로 간주됩니다.`,
                cooldownBurn: '0',
                image: require('../../assets/lol_hero_icons/skills/ZeriQ.png')
            },
            {
                id: 'ZeriW',
                name: '초강력 레이저',
                description: `제리가 전기 파동을 발사해 처음 적중하는 적을 둔화시키고 피해를 입힙니다. 파동이 벽에 맞으면 장거리 레이저로 확산됩니다.`,
                cooldownBurn: '12/11/10/9/8',
                image: require('../../assets/lol_hero_icons/skills/ZeriW.png')
            },
            {
                id: 'ZeriE',
                name: '스파크 돌진',
                description: `제리가 짧은 거리를 돌진하며 맞닥트리는 지형을 모두 뛰어넘습니다. 집중 사격의 다음 3발이 충전되어 적을 꿰뚫습니다.`,
                cooldownBurn: '22/21/20/19/18',
                image: require('../../assets/lol_hero_icons/skills/ZeriE.png')
            },
            {
                id: 'ZeriR',
                name: '번개 방출',
                description: `제리가 전류를 방출하고 자신을 과충전해, 피해량과 이동 속도가 증가합니다. 제리가 적 챔피언을 맞힐 때마다 이동 속도 증가 효과가 중첩되고 지속시간이 회복됩니다. 과충전된 동안 집중 사격이 더욱 빠른 3연발 사격으로 바뀌며, 대상 주변 적에게 번개가 연쇄적으로 튑니다.`,
                cooldownBurn: '80/75/70',
                image: require('../../assets/lol_hero_icons/skills/ZeriR.png')
            },
        ],
    },
    {
        numID: 165,
        id: 'Ziggs_mid_sup_adc',
        Key: '115',
        name: '직스',
        title: '마법공학 폭파병',
        lore: `거대한 폭탄을 사랑하는 직스는 폭탄만큼이나 화끈한 성미를 지닌 요들이다. 필트오버에서 어느 발명가를 돕는 조수로 일하다가, 반복되는 일상에 싫증을 느끼던 중 파란 머리의 미친 폭탄광 징크스와 친구가 되었다. 어느 날 필트오버에서 요란스러운 밤을 보낸 후, 직스는 징크스의 조언을 듣고 자운으로 향했다. 자운은 직스에게 천국이다. 제일 좋아하는 폭탄을 마음껏 터뜨리고 무엇이든 내키는 대로 폭발시키며, 자운 시민뿐 아니라 화공 남작들까지 공포에 질리게 만들고 있으니.`,
        blurb: `거대한 폭탄을 사랑하는 직스는 폭탄만큼이나 화끈한 성미를 지닌 요들이다. 필트오버에서 어느 발명가를 돕는 조수로 일하다가, 반복되는 일상에 싫증을 느끼던 중 파란 머리의 미친 폭탄광 징크스와 친구가 되었다. 어느 날 필트오버에서 요란스러운 밤을 보낸 후, 직스는 징크스의 조언을 듣고 자운으로 향했다. 자운은 직스에게 천국이다. 제일 좋아하는 폭탄을 마음껏 터뜨리고 무엇이든 내키는 대로 폭발시키며, 자운 시민뿐 아니라 화공 남작들까지 공포에 질리게...`,
        image: require('../../assets/lol_hero_icons/Ziggs.png'),
        background_image: require('../../assets/lol_hero_icons/background/Ziggs.jpg'),
        stats: {"hp": 606, "hpperlevel": 106, "mp": 480, "mpperlevel": 23.5, "movespeed": 325, "armor": 21, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 6.5, "hpregenperlevel": 0.6, "mpregen": 8, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 55, "attackdamageperlevel": 3.1, "attackspeedperlevel": 2, "attackspeed": 0.656},
        spells: [
            {
                id: 'passive',
                name: '짧은 도화선',
                description: `주기적으로 직스의 다음 기본 공격이 추가 마법 피해를 입힙니다. 직스가 스킬을 사용할 때마다 재사용 대기시간이 감소합니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/ZiggsPassiveReady.png')
            },
            {
                id: 'ZiggsQ',
                name: '반동 폭탄',
                description: `직스가 반동 폭탄을 던져 마법 피해를 입힙니다.`,
                cooldownBurn: '6/5.5/5/4.5/4',
                image: require('../../assets/lol_hero_icons/skills/ZiggsQ.png')
            },
            {
                id: 'ZiggsW',
                name: '휴대용 폭약',
                description: `직스가 폭약을 던지면 잠시 후, 혹은 스킬을 다시 사용할 때 폭발합니다. 폭발하면 적에게 마법 피해를 입히며 뒤로 밀어냅니다. 직스 역시 밀려나지만 피해는 입지 않습니다. 약해진 적 포탑에는 휴대용 폭약이 마법공학 폭발을 일으켜 피해를 입힐 수 있습니다.`,
                cooldownBurn: '20/18/16/14/12',
                image: require('../../assets/lol_hero_icons/skills/ZiggsW.png')
            },
            {
                id: 'ZiggsE',
                name: '마법공학 지뢰밭',
                description: `직스가 밟으면 폭발하는 지뢰를 뿌려, 지뢰에 닿은 적은 마법 피해를 입고 둔화됩니다. 같은 대상이 연속해서 지뢰를 밟으면 받는 피해량이 감소합니다.`,
                cooldownBurn: '16',
                image: require('../../assets/lol_hero_icons/skills/ZiggsE.png')
            },
            {
                id: 'ZiggsR',
                name: '지옥 화염 폭탄',
                description: `직스가 궁극의 무기 지옥 화염 폭탄을 조립하여 아주 멀리 날립니다. 폭발의 중심부에 있는 적들은 외곽에 있는 적들보다 더 큰 피해를 입습니다.`,
                cooldownBurn: '120/95/70',
                image: require('../../assets/lol_hero_icons/skills/ZiggsR.png')
            },
        ],
    },
    {
        numID: 166,
        id: 'Zilean_sup',
        Key: '26',
        name: '질리언',
        title: '시간의 수호자',
        lore: `한때 이케시아의 강력한 마법사였던 질리언은 자신의 고국이 공허에 파괴되는 것을 목격한 후 시간의 흐름에 사로잡히게 되었다. 질리언은 처참한 상실감에 슬퍼할 틈도 없이, 미래의 모든 경우의 수를 예측하기 위해 시간 마법의 주문을 외웠다. 이제 사실상 불멸의 몸이 된 질리언은 과거, 현재, 미래를 표류하며 주변 시간의 흐름을 구부리거나 왜곡하여 시간을 되감고 있다. 이케시아를 멸망하기 전으로 돌려 놓을 시점을 찾아 모든 시간대에서 망연히 부유하는 것이다.`,
        blurb: `한때 이케시아의 강력한 마법사였던 질리언은 자신의 고국이 공허에 파괴되는 것을 목격한 후 시간의 흐름에 사로잡히게 되었다. 질리언은 처참한 상실감에 슬퍼할 틈도 없이, 미래의 모든 경우의 수를 예측하기 위해 시간 마법의 주문을 외웠다. 이제 사실상 불멸의 몸이 된 질리언은 과거, 현재, 미래를 표류하며 주변 시간의 흐름을 구부리거나 왜곡하여 시간을 되감고 있다. 이케시아를 멸망하기 전으로 돌려 놓을 시점을 찾아 모든 시간대에서 망연히 부유하는 것이다.`,
        image: require('../../assets/lol_hero_icons/Zilean.png'),
        background_image: require('../../assets/lol_hero_icons/background/Zilean.jpg'),
        stats: {"hp": 574, "hpperlevel": 96, "mp": 452, "mpperlevel": 50, "movespeed": 335, "armor": 24, "armorperlevel": 5, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 5.5, "hpregenperlevel": 0.5, "mpregen": 11.35, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 52, "attackdamageperlevel": 3, "attackspeedperlevel": 2.13, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '시간의 유리병',
                description: `질리언은 시간을 경험치의 형태로 보존하여 아군에게 줄 수 있습니다. 아군의 레벨을 올려줄 수 있을 만큼 경험치가 모이면 해당 아군을 우클릭하여 건네줄 수 있습니다. 질리언 역시 아군에게 준 만큼의 경험치를 얻습니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Zilean_Passive.png')
            },
            {
                id: 'ZileanQ',
                name: '시한 폭탄',
                description: `대상 위치에 가까이 오는 유닛(챔피언 우선)에게 들러붙는 폭탄을 던집니다. 폭탄은 3초 뒤 폭발하여 적에게만 광역 피해를 입힙니다. 다른 시한 폭탄 때문에 시한 폭탄이 일찍 폭발하면 적을 기절시킵니다.`,
                cooldownBurn: '10/9.5/9/8.5/8',
                image: require('../../assets/lol_hero_icons/skills/ZileanQ.png')
            },
            {
                id: 'ZileanW',
                name: '되감기',
                description: `질리언이 기본 스킬 재사용 대기시간을 줄여 이후 시작될 전투를 준비할 수 있습니다.`,
                cooldownBurn: '14/12/10/8/6',
                image: require('../../assets/lol_hero_icons/skills/ZileanW.png')
            },
            {
                id: 'TimeWarp',
                name: '시간 왜곡',
                description: `질리언이 유닛 주변의 시간을 왜곡시켜 짧은 시간 동안 적의 이동 속도를 줄이거나 아군의 이동 속도를 높입니다.`,
                cooldownBurn: '15',
                image: require('../../assets/lol_hero_icons/skills/TimeWarp.png')
            },
            {
                id: 'ChronoShift',
                name: '시간 역행',
                description: `질리언이 아군 챔피언에게 보호용 시간 룬을 주어 해당 챔피언이 치명적인 피해를 입으면 피해를 입기 전의 시간으로 되돌립니다.`,
                cooldownBurn: '120/90/60',
                image: require('../../assets/lol_hero_icons/skills/ChronoShift.png')
            },
        ],
    },
    {
        numID: 167,
        id: 'Zoe_mid',
        Key: '142',
        name: '조이',
        title: '여명의 성위',
        lore: `상상력과 변화의 화신인 장난꾸러기 조이는 타곤의 우주 전령으로, 세계를 뒤흔드는 중요한 사건들을 알린다. 조이는 존재만으로도 현실 세계를 지배하는 불가사의한 수학 원리를 왜곡하고, 가끔은 아무런 악의나 노력 없이도 대재앙을 일으킨다. 이것이 그녀가 자신의 의무에 경쾌하고도 태연하게 임하는 이유일지도 모른다. 조이는 장난을 치고 인간들을 골탕 먹이는 등 즐겁게 보낼 시간이 많다. 그녀를 만나면 매우 즐겁고 삶을 긍정적으로 바라보게 될 수도 있지만, 그녀와의 만남에는 언제나 보이는 것 이상이 있을 뿐 아니라 매우 위험해질 때도 많다.`,
        blurb: `상상력과 변화의 화신인 장난꾸러기 조이는 타곤의 우주 전령으로, 세계를 뒤흔드는 중요한 사건들을 알린다. 조이는 존재만으로도 현실 세계를 지배하는 불가사의한 수학 원리를 왜곡하고, 가끔은 아무런 악의나 노력 없이도 대재앙을 일으킨다. 이것이 그녀가 자신의 의무에 경쾌하고도 태연하게 임하는 이유일지도 모른다. 조이는 장난을 치고 인간들을 골탕 먹이는 등 즐겁게 보낼 시간이 많다. 그녀를 만나면 매우 즐겁고 삶을 긍정적으로 바라보게 될 수도 있지만...`,
        image: require('../../assets/lol_hero_icons/Zoe.png'),
        background_image: require('../../assets/lol_hero_icons/background/Zoe.jpg'),
        stats: {"hp": 630, "hpperlevel": 106, "mp": 425, "mpperlevel": 25, "movespeed": 340, "armor": 21, "armorperlevel": 4.7, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 550, "hpregen": 7.5, "hpregenperlevel": 0.6, "mpregen": 8, "mpregenperlevel": 0.65, "crit": 0, "critperlevel": 0, "attackdamage": 58, "attackdamageperlevel": 3.3, "attackspeedperlevel": 2.5, "attackspeed": 0.658},
        spells: [
            {
                id: 'passive',
                name: '반짝반짝!',
                description: `스킬 사용 후 기본 공격 시 추가 마법 피해를 입힙니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/Zoe_P.png')
            },
            {
                id: 'ZoeQ',
                name: '통통별',
                description: `조이가 별을 발사합니다. 별이 날아가는 도중에 방향을 바꿀 수 있으며, 별의 총 이동거리에 비례해 피해량이 증가합니다.`,
                cooldownBurn: '8.5/8/7.5/7/6.5',
                image: require('../../assets/lol_hero_icons/skills/ZoeQ.png')
            },
            {
                id: 'ZoeW',
                name: '주문도둑',
                description: `적이 소환사 주문이나 사용 효과가 있는 아이템을 사용하면 주문 파편이 남고, 조이는 그 파편을 주워 해당 주문 및 효과를 사용할 수 있습니다. 또한 조이가 소환사 주문을 사용하면 미사일이 3개 생성되어 가장 가까운 적에게 날아갑니다.`,
                cooldownBurn: '0.25',
                image: require('../../assets/lol_hero_icons/skills/ZoeW.png')
            },
            {
                id: 'ZoeE',
                name: '헤롱헤롱쿨쿨방울',
                description: `대상을 졸음 상태에 빠지게 한 뒤 잠들게 합니다. 잠든 동안 대상의 마법 저항력이 감소됩니다. 잠든 뒤 처음으로 입는 피해는 두 배로 적용됩니다. (최대치 있음)`,
                cooldownBurn: '16/15/14/13/12',
                image: require('../../assets/lol_hero_icons/skills/ZoeE.png')
            },
            {
                id: 'ZoeR',
                name: '차원 넘기',
                description: `1초 동안 근처 위치로 순간적으로 이동한 뒤 다시 되돌아옵니다.`,
                cooldownBurn: '11/8/5',
                image: require('../../assets/lol_hero_icons/skills/ZoeR.png')
            },
        ],
    },
    {
        numID: 168,
        id: 'Zyra_sup_jug',
        Key: '143',
        name: '자이라',
        title: '가시 덩굴의 복수',
        lore: `자이라는 고대의 어떤 마법 대재앙에서 태어났다. 자연의 분노가 그대로 형상화된 생명체이자 인간과 식물의 매혹적인 혼종이다. 자이라가 한 걸음 내디딜 때마다 발밑에는 새로운 생명이 피어난다. 발로란의 수많은 필멸자를 자신의 씨앗에서 태어난 후손의 먹잇감 정도로 여기므로, 치명적인 위력의 가시를 날려 필멸자를 거침없이 사냥한다. 또한 자이라는 발로란 여기저기에 식육 식물 군락을 만들어 놓는데, 이 군락은 주변의 다른 생명체를 모조리 휘감아 죽이며 세력을 넓혀간다. 자손을 번성시키려는 태곳적부터의 욕구로 볼 수 있겠지만, 자이라의 진정한 의도는 아직 드러나지 않았다.`,
        blurb: `자이라는 고대의 어떤 마법 대재앙에서 태어났다. 자연의 분노가 그대로 형상화된 생명체이자 인간과 식물의 매혹적인 혼종이다. 자이라가 한 걸음 내디딜 때마다 발밑에는 새로운 생명이 피어난다. 발로란의 수많은 필멸자를 자신의 씨앗에서 태어난 후손의 먹잇감 정도로 여기므로, 치명적인 위력의 가시를 날려 필멸자를 거침없이 사냥한다. 또한 자이라는 발로란 여기저기에 식육 식물 군락을 만들어 놓는데, 이 군락은 주변의 다른 생명체를 모조리 휘감아 죽이며 세력을...`,
        image: require('../../assets/lol_hero_icons/Zyra.png'),
        background_image: require('../../assets/lol_hero_icons/background/Zyra.jpg'),
        stats: {"hp": 574, "hpperlevel": 93, "mp": 418, "mpperlevel": 25, "movespeed": 340, "armor": 29, "armorperlevel": 4.2, "spellblock": 30, "spellblockperlevel": 1.3, "attackrange": 575, "hpregen": 5.5, "hpregenperlevel": 0.5, "mpregen": 7, "mpregenperlevel": 0.8, "crit": 0, "critperlevel": 0, "attackdamage": 53, "attackdamageperlevel": 3.2, "attackspeedperlevel": 2.11, "attackspeed": 0.681},
        spells: [
            {
                id: 'passive',
                name: '가시 정원',
                description: `자이라 주변에 주기적으로 씨앗이 생성되며 생성 속도는 레벨에 따라 더 빨라집니다. 씨앗 근처에서 치명적인 가시나 휘감는 뿌리를 사용하면 식물이 자라나 자이라와 함께 싸웁니다.`,
                cooldownBurn: 'none',
                image: require('../../assets/lol_hero_icons/skills/ZyraP.png')
            },
            {
                id: 'ZyraQ',
                name: '치명적인 가시',
                description: `굵은 가시덤불이 지면을 뚫고 나와 폭발하며 해당 지역 안에 있는 적에게 마법 피해를 입힙니다. 씨앗 근처에서 치명적인 가시를 사용하면 가시 발사 꽃이 자라나 원거리에서 적을 공격합니다.`,
                cooldownBurn: '7/6.5/6/5.5/5',
                image: require('../../assets/lol_hero_icons/skills/ZyraQ.png')
            },
            {
                id: 'ZyraW',
                name: '맹렬한 성장',
                description: `자이라가 60초간 지속되는 씨앗을 심습니다. 씨앗 근처에서 치명적인 가시나 휘감는 뿌리를 사용하면 식물이 자라나 자이라와 함께 싸웁니다. 씨앗은 여러 개를 보관할 수 있으며 적을 처치할 때마다 맹렬한 성장의 재충전 시간이 줄어듭니다.`,
                cooldownBurn: '0',
                image: require('../../assets/lol_hero_icons/skills/ZyraW.png')
            },
            {
                id: 'ZyraE',
                name: '휘감는 뿌리',
                description: `자이라가 일직선상으로 지면을 뚫는 가시 덩굴을 발사하여, 덩굴이 마주치는 적에게 피해를 입히며 발을 묶습니다. 씨앗 근처에 휘감는 뿌리를 사용하면 덩굴 채찍손이 피어나, 근거리 공격을 펼치며 적의 이동 속도를 감소시킵니다.`,
                cooldownBurn: '12',
                image: require('../../assets/lol_hero_icons/skills/ZyraE.png')
            },
            {
                id: 'ZyraR',
                name: '올가미 덩굴',
                description: `자이라가 뒤틀린 덩굴손을 목표 위치에 소환합니다. 덩굴손은 뻗어 나가며 적들에게 피해를 입히고, 수축하면서 적들을 공중으로 띄웁니다. 덩굴손이 소환된 위치에 있는 식물들은 격분 상태가 됩니다.`,
                cooldownBurn: '110/100/90',
                image: require('../../assets/lol_hero_icons/skills/ZyraR.png')
            },
        ],
    },
];

export const filterHeroesByName = (name) => {
    return HERO_DATA.filter((hero) => hero.name.toLowerCase().includes(name.toLowerCase()));
};