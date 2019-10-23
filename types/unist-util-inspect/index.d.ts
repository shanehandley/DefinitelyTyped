// Type definitions for unist-util-inspect 4.1
// Project: https://github.com/syntax-tree/unist-util-inspect/#readme
// Definitions by: Shane Handley <https://github.com/shanehandley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0
import * as Unist from 'unist';

export = inpect;

/*
 * Unist utility to inspect the details of a Unist Node
 *
 * @param node Node to inspect
 */
declare function inpect(node: Unist.Node): string;

declare namespace inpect {
    /**
     * Inspect the given Node and include colors from the results
     *
     * @param node Node to inspect
     */
    function color(node: Unist.Node): string;

    /**
     * Inspect the given Node and exclude colors from the results
     *
     * @param node Node to inspect
     */
    function noColor(node: Unist.Node): string;
}
