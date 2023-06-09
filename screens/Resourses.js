import { View,FlatList } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import ResourseItem from '../components/ContestsOutput/ResourceItem';


const supportedURL = 'https://google.com';
const unsupportedURL = 'slack://open?team=123456';

const datalist =[
   {
     id:1,
     name:'STL',
     title : 'hello',
     url :'https://youtu.be/RRVYpIET_RU',
   },
   {
    id:2,
    name:'Number Theory',
    title : 'hello',
    url : 'https://youtube.com/playlist?list=PL5DyztRVgtRWblnyEHtajWijQffrfwLz6',
  },
  {
    id:3,
    name:'Recursion',
    title : 'hello',
    url : 'https://youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9',
  }, 
  {
    id:4,
    name:'Binary Search',
    title : 'hello',
    url : 'https://youtube.com/playlist?list=PLgUwDviBIf0qYbL4TBaEWgb-ljVdhkM7R',
  }, 
  {
    id:5,
    name:'Bit Manuplation',
    title : 'hello',
    url : 'https://youtube.com/playlist?list=PL5DyztRVgtRUVORP3AXvX91uovcaZv0q9',
  },
  {
    id:6,
    name: 'Graph',
    title : 'hello',
    url : 'https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw',
  },
  {
    id:7,
    name: 'Disjoint Set',
    title : 'hello',
    url : 'https://youtu.be/3gbO7FDYNFQ',
  },
  {
    id:8,
    name: 'Dynamic Programming',
    title : 'hello',
    url : 'https://youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go',
  },
  {
    id:9,
    name: 'Segment Trees',
    title : 'hello',
    url : 'https://youtube.com/playlist?list=PL5DyztRVgtRWt0Kgy7fCN9OSPgr6AI3DO',
  }
]

function Resourses() {
  function renderExpenseItem(itemData){
    return <ResourseItem  {...itemData.item}/>
 }
  return (
      <View style={{backgroundColor:GlobalStyles.colors.primary500,flex:1,alignItems:'center'}}>
        <FlatList
         data={datalist}
         renderItem={renderExpenseItem}
         keyExtractor={(item) => item.id}
      />
     </View>
  );
}

export default Resourses;