# C++ Development Guide

## Welcome to the C++ Development Guide!

This resource aims to help JavaScript developers transition to C++ by highlighting key concepts and features unique to C++. Use this glossary to familiarize yourself with the language's core terminology and paradigms.

---

## Glossary of C++ Terms

| **Term**         | **Definition**                                                                                                                                          |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Pointer**       | A variable that stores the memory address of another variable. Pointers enable dynamic memory allocation and manipulation, a concept not directly present in JavaScript. |
| **Reference**     | An alias for an existing variable, allowing it to be accessed and modified without copying. Similar to JavaScript object references but more controlled. |
| **Template**      | A blueprint for creating generic classes and functions, enabling type-safe code reuse. JavaScript lacks a direct equivalent but achieves similar functionality with dynamic typing. |
| **Destructor**    | A special member function that is automatically invoked when an object goes out of scope to clean up resources. JavaScript's garbage collector handles memory cleanup automatically. |
| **Namespace**     | A declarative region that provides scope to identifiers, preventing name collisions. JavaScript handles this with modules or objects. |
| **Overloading**   | The ability to define multiple functions with the same name but different parameters. JavaScript achieves a similar effect with optional parameters or dynamic arguments. |
| **Static**        | A keyword used to define class-level variables and functions that are shared across all instances. JavaScript provides similar functionality with static methods. |

---

## Memory Management in C++

Mastering memory management is essential for C++ development. Unlike JavaScript, where memory is automatically handled by a garbage collector, C++ gives developers direct control over memory allocation and deallocation.

### Key Concepts

- **Stack vs. Heap Memory**:
  - **Stack Memory**: Automatically managed, fast, but limited in size. Variables are destroyed when they go out of scope.
  - **Heap Memory**: Used for dynamic memory allocation. Must be manually managed using `new` and `delete`.

- **Pointers**: Variables that store memory addresses. They enable dynamic memory manipulation but require careful handling to avoid memory leaks.

- **References**: Aliases for existing variables, safer than pointers. References must always point to valid data.

- **`new` and `delete`**: Operators for dynamic memory allocation and deallocation.

- **Memory Leaks**: Failure to free allocated memory leads to leaks, consuming resources over time.

- **Smart Pointers**: Modern C++ features like `std::unique_ptr` and `std::shared_ptr` that automate memory management and prevent leaks.

### Examples

```cpp
// Stack Memory Example
void example() {
    int x = 10; // Allocated on the stack
} // x is automatically destroyed here

// Heap Memory Example
void example() {
    int* ptr = new int(10); // Allocated on the heap
    delete ptr;            // Deallocated manually
}
```

---

## Types to Memorize

C++ is a statically typed language, so understanding and memorizing types is essential.

### Fundamental Types
- `int`, `short`, `long`, `unsigned`
- `float`, `double`, `long double`
- `char`, `wchar_t`, `bool`

### Derived Types
- Pointers (`int*`)
- References (`int&`)
- Arrays (`int arr[10];`)
- Functions (`int add(int a, int b);`)

### User-Defined Types
- `struct`, `class`, `union`, `enum`

### Type Modifiers
- `const`, `volatile`, `mutable`

### Specialized Types
- `std::string`
- `std::array`, `std::vector`, `std::tuple`

### Modern C++ Types
- `auto`, `decltype`, `nullptr`
- `std::shared_ptr`, `std::unique_ptr`

---

By exploring these concepts and practices, you will build a strong foundation for developing in C++. Stay tuned for more guides and lessons!
