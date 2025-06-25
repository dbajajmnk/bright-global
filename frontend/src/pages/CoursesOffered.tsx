import React from 'react';

const CoursesOffered = () => {
  return (
    <div className="px-6 md:px-20 py-10 space-y-16">
      {/* Cypress Automation */}
      <div>
        <h2 className="text-3xl font-bold text-primary mb-2">Cypress Automation</h2>
        <p className="text-textSecondary mb-2">
          <strong>Price:</strong> US$600 | <strong>Duration:</strong> 40 hours | <strong>Mode:</strong> Online <br />
          <strong>Group Size:</strong> 6–10 | <strong>Language:</strong> English, Hindi | <strong>Certificate:</strong> No
        </p>
        <ul className="list-disc list-inside text-textSecondary space-y-1">
          <li>Introduction to Cypress</li>
          <li>Setting up the development environment</li>
          <li>Writing Cypress tests</li>
          <li>Test organization</li>
          <li>Debugging and troubleshooting</li>
          <li>Interacting with the application</li>
          <li>Handling asynchronous behaviour</li>
          <li>Integrations with CI/CD and reporting tools</li>
          <li>Best practices in Cypress testing</li>
          <li>Advanced topics: custom commands, plugins</li>
          <li>Page Object Model (POM)</li>
          <li>API Testing</li>
          <li>Handling iframes</li>
          <li>Cross-browser testing</li>
          <li>Handling multiple windows</li>
          <li>CI/CD with Jenkins</li>
          <li>Testing SPAs (Single Page Applications)</li>
          <li>Mobile App Testing with Appium</li>
          <li>Visual Regression Testing (Percy/Cypress Dashboard)</li>
          <li>Performance Testing with Cypress</li>
        </ul>
      </div>

      {/* Data Structures & Algorithms */}
      <div>
        <h2 className="text-3xl font-bold text-primary mb-2">Data Structures & Algorithms</h2>
        <p className="text-textSecondary mb-2">
          <strong>Price:</strong> ₹30,000 | <strong>Duration:</strong> 3 months | <strong>Mode:</strong> Online <br />
          <strong>Group Size:</strong> 6–10 | <strong>Language:</strong> English, Hindi | <strong>Certificate:</strong> No
        </p>
        <ul className="list-disc list-inside text-textSecondary space-y-1">
          <li>Algorithm Specifications: Performance Analysis</li>
          <li>Types of Data Structures – Linear & Non-Linear</li>

          <li><strong>Linear Structures:</strong></li>
          <ul className="pl-6 list-disc">
            <li>Array operations: Insertion, Deletion, Traversal</li>
            <li>Linked List: Singly, Doubly, Circular</li>
            <li>Stack: Array & Linked List implementation, Recursion</li>
            <li>Queue: Array & Linked List implementation</li>
          </ul>

          <li><strong>Non-Linear Structures:</strong></li>
          <ul className="pl-6 list-disc">
            <li>Trees: Binary Trees, Traversals, BSTs</li>
            <li>Graphs: BFS, DFS, Shortest Path, MST</li>
          </ul>

          <li><strong>Sorting & Searching:</strong></li>
          <ul className="pl-6 list-disc">
            <li>Insertion, Bubble, Selection, Merge, Quick, Heap Sort</li>
            <li>Linear and Binary Search</li>
          </ul>

          <li>Basic Hashing and Collision Resolution</li>
        </ul>
      </div>
    </div>
  );
};

export default CoursesOffered;
