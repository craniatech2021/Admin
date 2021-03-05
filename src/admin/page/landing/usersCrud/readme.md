<!-- you just need a get request axios.get(api you need to get data from), .then(res) console.log(res) it should give you data which has all the information in the api. you can use .catch to catch the error .catch(error => console.log(error))
so it will be something like this

first your state and setState
const [apiData, setApiData] = useState([])
our state is an empty array
const apifetch = () => {
axios.get("api")
we want to set the api data, so we can be able to get everything in apiData
.then(res => {console.log(res.data) setApiData(res.data)}) // or // .then(({data}) => setApiData(data)) 
.catch(error => console.log(error))
}

now apiData should contain everything in the api. but it won't work yet because we haven't mount the api yet we can use useEffect for functional component and componentDidMount for class component

useEffect(() => () )

we want to add our axios function now.

useEffect(() => ( apifetch() ))

this will give us an infinite loop, we don't want that so we need to add a dependency array

useEffect(() => ( apifetch() ), [] )

now we can map the array and get the data

return (<div> {apiData.map(data => <h1> data </h1>)}) -->