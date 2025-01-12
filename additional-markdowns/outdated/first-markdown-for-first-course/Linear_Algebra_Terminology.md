# Linear Algebra Terminology for Search Engines and Optimization Algorithms

## Matrix Operations
- **Addition**: Combining two matrices by adding their corresponding elements.
- **Multiplication**: Combining two matrices to form a new matrix, often used to model transformations or relationships.
- **Transpose**: Flipping a matrix over its diagonal, converting rows into columns.
- **Inverse**: A matrix that, when multiplied with the original matrix, yields the identity matrix; used in solving systems of equations.

## Vector Spaces
- **Vector**: A mathematical object with magnitude and direction, often used to represent data points or terms in a search engine.
- **Basis Vectors**: A set of vectors that define a coordinate system for a vector space.
- **Linear Independence**: A property where no vector in a set is a linear combination of the others, crucial for understanding dimensions of data.

## Rank of a Matrix
- **Rank**: The number of linearly independent rows or columns in a matrix, indicating the amount of meaningful information.

## Eigenvalues and Eigenvectors
- **Eigenvalue**: A scalar that represents how a transformation scales an eigenvector.
- **Eigenvector**: A vector that remains in the same direction after a transformation, used in ranking algorithms like PageRank to identify importance in networks.

## Singular Value Decomposition (SVD)
- **SVD**: A matrix factorization technique that decomposes a matrix into three components (U, Σ, Vᵀ). Used in Latent Semantic Analysis to reduce dimensionality and uncover latent relationships in data.

## Dot Product
- **Dot Product**: The multiplication of two vectors resulting in a scalar. Used to measure similarity between two data points in vector space.

## Norms
- **L2 Norm (Euclidean Distance)**: Measures the "length" of a vector in space, used to quantify similarity or difference between data points.
- **L1 Norm (Manhattan Distance)**: Measures the "taxicab" distance between two points in a grid-like path.

## Projection
- **Projection**: Mapping a vector onto another vector or subspace, often used to reduce dimensions while retaining key features.

## Orthogonality
- **Orthogonal Vectors**: Vectors that are perpendicular to each other, indicating no similarity. Orthogonal matrices preserve distances and are useful for optimization.

## Diagonalization
- **Diagonalization**: Converting a matrix into a diagonal form using its eigenvalues, simplifying computations.

## Outer Product
- **Outer Product**: A matrix formed by multiplying one vector as a column and another as a row, used in algorithms like SVD.

## Sparse Matrices
- **Sparse Matrix**: A matrix with a large number of zero elements, commonly used in representing large datasets like term-document matrices in search engines.

## Row and Column Space
- **Row Space**: The set of all possible linear combinations of the row vectors of a matrix.
- **Column Space**: The set of all possible linear combinations of the column vectors of a matrix. Both are key for understanding solutions to linear systems.

## QR Factorization
- **QR Factorization**: Decomposing a matrix into an orthogonal matrix (Q) and an upper triangular matrix (R), often used in numerical optimization.
