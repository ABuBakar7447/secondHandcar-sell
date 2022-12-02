import React from 'react';


const Blog = () => {

    return (

        // questionaries part
        <div className='w-3/5 mx-auto my-5'>
            <div className='border rounded bg-slate-400 mb-4 p-2'>
                <p className='text-yellow-400 font-bold'>1. What are the different ways to manage a state in a React application?</p>
                <p className='text-black'>There are four main types of state you need to properly manage in your React apps:<br/>
                Local state<br/>
                Global state<br/>
                Server state<br/>
                URL state<br/>
                Local state is most often managed in React using the useState hook.<br/>

                Global (UI) state – Global state is data we manage across multiple components.To manage it, however, you should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.<br/>

                Server state – Data that comes from an external server that must be integrated with our UI state.To manage this, there are a couple of great libraries that make data fetching in React a breeze: SWR and React Query.<br/>
                
                URL state – Data that exists on our URLs, including the pathname and query parameters.URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname.<br/>

                </p>

                
            </div>

            <div className='border rounded bg-slate-400 mb-4 p-2'>
                <p className='text-yellow-400 font-bold'>2. How does prototypical inheritance work?</p>
                <p className='text-black'>Javascript has a feature called prototypal inheritance that allows you to add methods and properties to objects. It is a technique that allows an item to take on the attributes and operations of another object. Traditionally, we utilize Object. getPrototypeOf and Object to obtain and modify an object's [[Prototype]].</p>

               
            </div>

            <div className='border rounded bg-slate-400 mb-4 p-2'>
                <p className='text-yellow-400 font-bold'>3. What is a unit test? Why should we write unit tests?</p>
                <p className='text-black'>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </p>
                
            </div>

            <div className='border rounded bg-slate-400 mb-4 p-2'>
                <p className='text-yellow-400 font-bold'>4.React vs. Angular vs. Vue?</p>
                <p className='text-black'>Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. <br/>
                React offers a Getting Started guide that should help one set up React in about an hour. <br/>
                Vue provides higher customizability and hence is easier to learn than Angular or React. 
                </p>
                
                
            </div>
        </div>
    );
};

export default Blog;