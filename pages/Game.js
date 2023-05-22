import { StyleSheet, View, Image } from 'react-native';

const colors = 'coeur,trefle,carreau,pique'.split(',');
const nums = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const figs = { valet: 1, dame: 2, roi: 3, as: 4 };

const list = colors.reduce((acc, c) => {
    const ns = nums.map((n) => {
        return {
            name: `${n} de ${c}`,
            value: n, 
            specials: 0,
            url: `${n}-${c}.png`,
        }
    })

    const fs = Object.keys(figs).map((f) => {
        return {
            name: `${f} de ${c}`,
            value: 0, 
            specials: figs[f],
            url: `${f}-${c}.png`,
        }
    })

   return [...acc, ...ns, ...fs];
}, [])

function getCard(name) {
    return list.filter(x => x.name === name)
}

function drawCard(card) {

}

export default function Game({ navigation }) {
    console.log(JSON.stringify(list, null, 2));
    console.log(list.length);

    //console.log(getCard("as de coeur"));

    //<Image source={} />
    return (
        <View>
        </View>
    );
}

const styles = StyleSheet.create({
});