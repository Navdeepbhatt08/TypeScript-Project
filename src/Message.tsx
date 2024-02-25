function Message() {

    const name = 'Navdeep';

    if(name)
   return <h1>Hello {name}</h1>;
   else
   return <h1>Hello Something</h1>
}

export default Message;