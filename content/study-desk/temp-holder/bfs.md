# **New Study Guide: Breadth-First Search (BFS)**

---

## **Question**

Given a graph $G(V, E)$, where $V$ is the set of vertices and $E$ is the set of edges, write an algorithm using **Breadth-First Search (BFS)** to traverse the graph and output the order of traversal.

---

## **Answer in Software (JavaScript)**

Here’s how you would implement BFS in JavaScript, with comments to connect the math terms to the programming logic:

```javascript
// BFS Implementation in JavaScript
function bfs(graph, start) {
    // Initialize a queue with the starting vertex (corresponds to a queue Q in math)
    const queue = [start];

    // Initialize a set to keep track of visited nodes (corresponds to S in math)
    const visited = new Set();

    // Mark the starting node as visited
    visited.add(start);

    // While the queue is not empty (corresponds to the iterative process in math)
    while (queue.length > 0) {
        // Dequeue the first vertex (corresponds to visiting v in math)
        const vertex = queue.shift();
        console.log(vertex); // Output the current vertex

        // Iterate through the neighbors of the current vertex
        for (let neighbor of graph[vertex]) {
            // If the neighbor has not been visited
            if (!visited.has(neighbor)) {
                // Mark the neighbor as visited and enqueue it
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}

// Example graph represented as an adjacency list
const graph = {
    A: ['B', 'C'], // A connects to B and C
    B: ['A', 'D', 'E'], // B connects to A, D, and E
    C: ['A', 'F'], // C connects to A and F
    D: ['B'], // D connects to B
    E: ['B', 'F'], // E connects to B and F
    F: ['C', 'E']  // F connects to C and E
};

// Call BFS starting at vertex 'A'
console.log("BFS Traversal:");
bfs(graph, 'A');
```

### **Output**
``` console
BFS Traversal:
A
B
C
D
E
F
```

---

## **Answer in Math**

### Input:
Given a graph $G(V, E)$:
- $V$: The set of vertices.
- $E$: The set of edges.

Example graph:
- $V = \{A, B, C, D, E, F\}$
- $E = \{(A, B), (A, C), (B, D), (B, E), (C, F), (E, F)\}$

### Algorithm (BFS Steps):
1. **Initialization**:
   - Define $G$ as the graph.
   - Start with an empty set $S$ for visited nodes.
   - Initialize a queue $Q$ with the starting vertex $v_0$.

2. **Iteration**:
   - While $Q$ is not empty:
     - Dequeue $v$ from $Q$.
     - Visit $v$ and add it to $S$: $S = S \cup \{v\}$.
     - For each neighbor $v'$ of $v$ (where $(v, v') \in E$):
       - If $v' \notin S$, enqueue $v'$ into $Q$.

3. **Termination**:
   - Stop when $Q$ is empty.

### Mathematical Representation:
1. Let $S = \emptyset$ (visited nodes) and $Q = [v_0]$ (queue with the starting vertex).
2. Define the iterative process:
   $$
   BFS(v_0) =
   \begin{cases}
   \text{Visit } v, & \text{dequeue } v \text{ from } Q \\
   S = S \cup \{v\}, & \text{mark } v \text{ as visited} \\
   \text{For each } v' \text{ such that } (v, v') \in E \text{ and } v' \notin S, & \text{enqueue } v' \text{ into } Q
   \end{cases}
   $$
3. Output the sequence of visited vertices in order of traversal.

### Example Traversal:
1. Start at $A$: $Q = [A]$, $S = \{A\}$.
2. Visit $A$, enqueue $B$ and $C$: $Q = [B, C]$, $S = \{A\}$.
3. Visit $B$, enqueue $D$ and $E$: $Q = [C, D, E]$, $S = \{A, B\}$.
4. Visit $C$, enqueue $F$: $Q = [D, E, F]$, $S = \{A, B, C\}$.
5. Visit $D$: $Q = [E, F]$, $S = \{A, B, C, D\}$.
6. Visit $E$: $Q = [F]$, $S = \{A, B, C, D, E\}$.
7. Visit $F$: $Q = []$, $S = \{A, B, C, D, E, F\}$.

Traversal order:
$$
A \to B \to C \to D \to E \to F
$$

---

## **Connecting Math to JavaScript**

1. **Graph $G(V, E)$**:
   - Represented as an adjacency list in JavaScript.
   - $V$: The keys of the object (`A`, `B`, `C`, etc.).
   - $E$: The arrays of connected nodes (`['B', 'C']`, etc.).

2. **Visited Set $S$**:
   - Represented by a `Set` object in JavaScript (`new Set()`).

3. **Queue $Q$**:
   - Represented as a JavaScript array (`const queue = []`).

4. **Iteration**:
   - Dequeue $v$: `const vertex = queue.shift()`.
   - Enqueue $v'$: `queue.push(neighbor)`.

5. **Output**:
   - Print $v$: Matches `console.log(vertex)` in the code.
