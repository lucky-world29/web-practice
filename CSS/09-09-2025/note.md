 <!-- what is difference bet display flex and grid  -->
         ##props in grid 
            1.grid template columns -> to define the no of columns in a grid
            2.grid template rows  -> to define the no of rows in a grid
            3.gap -> to define the gap between the rows and columns (it is a short-hand property for row gap and column gap that gives space )

            4.grid-auto-flow -> to define how the auto placement algorithm works -> 
                                                row(similar to flex-direction-row) , 
                                                column(similar to flex-direction-column),
                                                dense(fills the gaps in the grid)
            5.reapeat(noOfRows/columns, width/height) -> to repeat the rows or columns
            6.fr -> fraction of available space

            7.grid column -> to define the no of columns a particular div will take(grid-column-start & grid-column-end)
            8.grid row -> to define the no of rows a particular div will take(grid-row-start & grid-row-end)

            (**).justify items -> to align the items in horizontal direction
            (**).align items -> to align the items in vertical direction
            (**).justify content -> to align the whole grid in horizontal direction
            (**).align content -> to align the whole grid in vertical direction
            (**).place items -> to align the items in both horizontal and vertical direction
        

        ## CSS Grid Properties

1. **grid-template-columns** → Defines the number of columns in a grid  
2. **grid-template-rows** → Defines the number of rows in a grid  
3. **gap** → Defines the gap between rows and columns (shorthand for row-gap and column-gap)  
4. **grid-auto-flow** → Defines how the auto-placement algorithm works:  
   - `row` → Similar to flex-direction: row  
   - `column` → Similar to flex-direction: column  
   - `dense` → Fills the gaps in the grid  
5. **repeat(noOfRows/columns, width/height)** → Repeats rows or columns  
6. **fr** → Fraction of available space  
7. **grid-column** → Defines how many columns a particular item will span (uses grid-column-start & grid-column-end)  
8. **grid-row** → Defines how many rows a particular item will span (uses grid-row-start & grid-row-end)  

### Alignment Properties

- **justify-items** → Aligns items horizontally  
- **align-items** → Aligns items vertically  
- **justify-content** → Aligns the entire grid horizontally  
- **align-content** → Aligns the entire grid vertically  
- **place-items** → Aligns items both horizontally and vertically  
