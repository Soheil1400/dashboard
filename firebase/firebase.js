export const firebaseConfig = {
    apiKey: "AIzaSyD5EGoMqZ0p4LJfVGc05uvKPfEtZ6kCoIM",
    authDomain: "dashboard-a5474.firebaseapp.com",
    projectId: "dashboard-a5474",
    storageBucket: "dashboard-a5474.appspot.com",
    messagingSenderId: "798178081204",
    appId: "1:798178081204:web:f73e5abc6c1d88707c1ae1",
    measurementId: "G-0V4DW9NX0T"
};

// const [data ,setData] = useState([])
// const [form ,setForm] = useState({name:'',age:''})
// const app = initializeApp(firebaseConfig)
// const db = getFirestore()
// const colRef = collection(db , 'test')
// const AddDoc = (e) => {
//     e.preventDefault()
//     addDoc(colRef , {
//         name : form.name,
//         age : form.age
//     }).then(()=>{
//         setForm({name:'',age:''})
//     })
// }
// const DeleteDoc = (id) => {
//     const docRef = doc(db , 'test' , id)
//     deleteDoc(docRef).then(()=>{
//             alert('success')
//         })
// }
// const handleChange = (e) => {
//     setForm({...form ,[e.target.name] : e.target.value})
// }
// useEffect(()=>{
//     // getDocs(colRef)
//     //     .then((snapshot) => {
//     //         snapshot.docs.map((doc) => {
//     //             setData( [...data ,{...doc.data(), id: doc.id}] )
//     //         })
//     //     }).catch( err => {
//     // })
//     onSnapshot(colRef , (snapshot) => {
//         let fetch = []
//         snapshot.docs.map((doc) => {
//             fetch.push({...doc.data(), id: doc.id})
//         })
//         setData([...fetch])
//     })
// },[])