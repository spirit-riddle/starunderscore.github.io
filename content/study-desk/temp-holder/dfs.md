# **New Study Guide: Depth-First Search (DFS)**

---

## **Question**
Given a graph $G(V, E)$, where $V$ is the set of vertices and $E$ is the set of edges, write an algorithm using **Depth-First Search (DFS)** to traverse the graph and output the order of traversal.

---

## **Answer in Software (JavaScript)**

Here’s how you would implement DFS in JavaScript, with comments to connect the math terms to the programming logic:

```javascript
// DFS Implementation in JavaScript
function dfs(graph, start, visited = new Set()) {
    // Mark the current node as visited (corresponds to S = S ∪ {v} in math)
    visited.add(start);

    // Visit the current node (corresponds to "Visit v" in math)
    console.log(start); // Output the current vertex

    // Recursively visit all neighbors of the current node
    for (let neighbor of graph[start]) {
        // Check if the neighbor has not been visited (corresponds to v' ∉ S)
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited); // Apply DFS to the neighbor (recursive step)
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

// Call DFS starting at vertex 'A'
console.log("DFS Traversal:");
dfs(graph, 'A');
```

## **Output**
```console
DFS Traversal:
A
B
D
E
F
C
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

### Algorithm (DFS Steps):
1. **Initialization**:
   - Define $G$ as the graph.
   - Start with an empty set $S$ for visited nodes.
   - Choose an initial vertex $v_0$ as the starting point.

2. **Recursion**:
   - Visit $v_0$ and add it to $S$: $S = S \cup \{v_0\}$.
   - For each neighbor $v'$ of $v_0$ (where $(v_0, v') \in E$):
     - If $v' \notin S$, recursively apply $DFS(v')$.

3. **Termination**:
   - Stop when all vertices reachable from $v_0$ are visited.

### Mathematical Representation:
1. Let $S = \emptyset$ (visited nodes).
2. Define the function:
   $$
   DFS(v) =
   \begin{cases} 
   \text{Visit } v, & \text{if } v \notin S \\
   S = S \cup \{v\}, & \text{mark } v \text{ as visited} \\
   \text{For each } v' \text{ such that } (v, v') \in E, & \text{apply } DFS(v') \text{ if } v' \notin S
   \end{cases}
   $$
3. Output the sequence of visited vertices in order of traversal.

### Example Traversal:
1. Start at $A$: $S = \{A\}$.
2. Visit $B$: $S = \{A, B\}$.
3. Visit $D$: $S = \{A, B, D\}$.
4. Backtrack to $B$, visit $E$: $S = \{A, B, D, E\}$.
5. Visit $F$: $S = \{A, B, D, E, F\}$.
6. Backtrack to $C$, visit $C$: $S = \{A, B, D, E, F, C\}$.

Traversal order:
$$
A \to B \to D \to E \to F \to C
$$

---

## **Connecting Math to JavaScript**

1. **Graph $G(V, E)$**:
   - Represented as an adjacency list in JavaScript.
   - $V$: The keys of the object (`A`, `B`, `C`, etc.).
   - $E$: The arrays of connected nodes (`['B', 'C']`, etc.).

2. **Visited Set $S$**:
   - Represented by a `Set` object in JavaScript (`new Set()`).

3. **Recursive Traversal**:
   - $S = S \cup \{v_0\}$: Translates to `visited.add(start)`.
   - For neighbors $v'$: Use a loop (`for (let neighbor of graph[start])`).
   - Recursive DFS call: Matches $DFS(v')$ if $v' \notin S$.

4. **Output**:
   - Print $v$: Matches `console.log(start)` in the code.
