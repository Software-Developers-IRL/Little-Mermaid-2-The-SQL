/* parser generated by jison 0.4.18 */
/*
copied from dist\mermaid.core.mjs
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser$8 = (function () {
  var o = function (k, v, o2, l) {
      for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v);
      return o2;
    },
    $V0 = [1, 2],
    $V1 = [1, 5],
    $V2 = [6, 9, 11, 23, 25, 27, 29, 30, 31, 49],
    $V3 = [1, 17],
    $V4 = [1, 18],
    $V5 = [1, 19],
    $V6 = [1, 20],
    $V7 = [1, 21],
    $V8 = [1, 22],
    $V9 = [1, 25],
    $Va = [1, 30],
    $Vb = [1, 31],
    $Vc = [1, 32],
    $Vd = [1, 33],
    $Ve = [6, 9, 11, 15, 20, 23, 25, 27, 29, 30, 31, 42, 43, 44, 45, 49],
    $Vf = [1, 45],
    $Vg = [30, 31, 46, 47],
    $Vh = [4, 6, 9, 11, 23, 25, 27, 29, 30, 31, 49],
    $Vi = [42, 43, 44, 45],
    $Vj = [22, 37],
    $Vk = [1, 64];
  var parser2 = {
    trace: function trace() {},
    yy: {},
    symbols_: {
      error: 2,
      start: 3,
      ER_DIAGRAM: 4,
      document: 5,
      EOF: 6,
      directive: 7,
      line: 8,
      SPACE: 9,
      statement: 10,
      NEWLINE: 11,
      openDirective: 12,
      typeDirective: 13,
      closeDirective: 14,
      ":": 15,
      argDirective: 16,
      entityName: 17,
      relSpec: 18,
      role: 19,
      BLOCK_START: 20,
      attributes: 21,
      BLOCK_STOP: 22,
      title: 23,
      title_value: 24,
      acc_title: 25,
      acc_title_value: 26,
      acc_descr: 27,
      acc_descr_value: 28,
      acc_descr_multiline_value: 29,
      ALPHANUM: 30,
      ENTITY_NAME: 31,
      attribute: 32,
      attributeType: 33,
      attributeName: 34,
      attributeKeyType: 35,
      attributeComment: 36,
      ATTRIBUTE_WORD: 37,
      ATTRIBUTE_KEY: 38,
      COMMENT: 39,
      cardinality: 40,
      relType: 41,
      ZERO_OR_ONE: 42,
      ZERO_OR_MORE: 43,
      ONE_OR_MORE: 44,
      ONLY_ONE: 45,
      NON_IDENTIFYING: 46,
      IDENTIFYING: 47,
      WORD: 48,
      open_directive: 49,
      type_directive: 50,
      arg_directive: 51,
      close_directive: 52,
      $accept: 0,
      $end: 1,
    },
    terminals_: {
      2: "error",
      4: "ER_DIAGRAM",
      6: "EOF",
      9: "SPACE",
      11: "NEWLINE",
      15: ":",
      20: "BLOCK_START",
      22: "BLOCK_STOP",
      23: "title",
      24: "title_value",
      25: "acc_title",
      26: "acc_title_value",
      27: "acc_descr",
      28: "acc_descr_value",
      29: "acc_descr_multiline_value",
      30: "ALPHANUM",
      31: "ENTITY_NAME",
      37: "ATTRIBUTE_WORD",
      38: "ATTRIBUTE_KEY",
      39: "COMMENT",
      42: "ZERO_OR_ONE",
      43: "ZERO_OR_MORE",
      44: "ONE_OR_MORE",
      45: "ONLY_ONE",
      46: "NON_IDENTIFYING",
      47: "IDENTIFYING",
      48: "WORD",
      49: "open_directive",
      50: "type_directive",
      51: "arg_directive",
      52: "close_directive",
    },
    productions_: [
      0,
      [3, 3],
      [3, 2],
      [5, 0],
      [5, 2],
      [8, 2],
      [8, 1],
      [8, 1],
      [8, 1],
      [7, 4],
      [7, 6],
      [10, 1],
      [10, 5],
      [10, 4],
      [10, 3],
      [10, 1],
      [10, 2],
      [10, 2],
      [10, 2],
      [10, 1],
      [17, 1],
      [17, 1],
      [21, 1],
      [21, 2],
      [32, 2],
      [32, 3],
      [32, 3],
      [32, 4],
      [33, 1],
      [34, 1],
      [35, 1],
      [36, 1],
      [18, 3],
      [40, 1],
      [40, 1],
      [40, 1],
      [40, 1],
      [41, 1],
      [41, 1],
      [19, 1],
      [19, 1],
      [19, 1],
      [12, 1],
      [13, 1],
      [16, 1],
      [14, 1],
    ],
    performAction: function anonymous(
      yytext,
      yyleng,
      yylineno,
      yy,
      yystate,
      $$,
      _$
    ) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 1:
          break;
        case 3:
          this.$ = [];
          break;
        case 4:
          $$[$0 - 1].push($$[$0]);
          this.$ = $$[$0 - 1];
          break;
        case 5:
        case 6:
          this.$ = $$[$0];
          break;
        case 7:
        case 8:
          this.$ = [];
          break;
        case 12:
          yy.addEntity($$[$0 - 4]);
          yy.addEntity($$[$0 - 2]);
          yy.addRelationship($$[$0 - 4], $$[$0], $$[$0 - 2], $$[$0 - 3]);
          break;
        case 13:
          yy.addEntity($$[$0 - 3]);
          yy.addAttributes($$[$0 - 3], $$[$0 - 1]);
          break;
        case 14:
          yy.addEntity($$[$0 - 2]);
          break;
        case 15:
          yy.addEntity($$[$0]);
          break;
        case 16:
        case 17:
          this.$ = $$[$0].trim();
          yy.setAccTitle(this.$);
          break;
        case 18:
        case 19:
          this.$ = $$[$0].trim();
          yy.setAccDescription(this.$);
          break;
        case 20:
        case 41:
          this.$ = $$[$0];
          break;
        case 21:
        case 39:
        case 40:
          this.$ = $$[$0].replace(/"/g, "");
          break;
        case 22:
          this.$ = [$$[$0]];
          break;
        case 23:
          $$[$0].push($$[$0 - 1]);
          this.$ = $$[$0];
          break;
        case 24:
          this.$ = { attributeType: $$[$0 - 1], attributeName: $$[$0] };
          break;
        case 25:
          this.$ = {
            attributeType: $$[$0 - 2],
            attributeName: $$[$0 - 1],
            attributeKeyType: $$[$0],
          };
          break;
        case 26:
          this.$ = {
            attributeType: $$[$0 - 2],
            attributeName: $$[$0 - 1],
            attributeComment: $$[$0],
          };
          break;
        case 27:
          this.$ = {
            attributeType: $$[$0 - 3],
            attributeName: $$[$0 - 2],
            attributeKeyType: $$[$0 - 1],
            attributeComment: $$[$0],
          };
          break;
        case 28:
        case 29:
        case 30:
          this.$ = $$[$0];
          break;
        case 31:
          this.$ = $$[$0].replace(/"/g, "");
          break;
        case 32:
          this.$ = { cardA: $$[$0], relType: $$[$0 - 1], cardB: $$[$0 - 2] };
          break;
        case 33:
          this.$ = yy.Cardinality.ZERO_OR_ONE;
          break;
        case 34:
          this.$ = yy.Cardinality.ZERO_OR_MORE;
          break;
        case 35:
          this.$ = yy.Cardinality.ONE_OR_MORE;
          break;
        case 36:
          this.$ = yy.Cardinality.ONLY_ONE;
          break;
        case 37:
          this.$ = yy.Identification.NON_IDENTIFYING;
          break;
        case 38:
          this.$ = yy.Identification.IDENTIFYING;
          break;
        case 42:
          yy.parseDirective("%%{", "open_directive");
          break;
        case 43:
          yy.parseDirective($$[$0], "type_directive");
          break;
        case 44:
          $$[$0] = $$[$0].trim().replace(/'/g, '"');
          yy.parseDirective($$[$0], "arg_directive");
          break;
        case 45:
          yy.parseDirective("}%%", "close_directive", "er");
          break;
      }
    },
    table: [
      { 3: 1, 4: $V0, 7: 3, 12: 4, 49: $V1 },
      { 1: [3] },
      o($V2, [2, 3], { 5: 6 }),
      { 3: 7, 4: $V0, 7: 3, 12: 4, 49: $V1 },
      { 13: 8, 50: [1, 9] },
      { 50: [2, 42] },
      {
        6: [1, 10],
        7: 15,
        8: 11,
        9: [1, 12],
        10: 13,
        11: [1, 14],
        12: 4,
        17: 16,
        23: $V3,
        25: $V4,
        27: $V5,
        29: $V6,
        30: $V7,
        31: $V8,
        49: $V1,
      },
      { 1: [2, 2] },
      { 14: 23, 15: [1, 24], 52: $V9 },
      o([15, 52], [2, 43]),
      o($V2, [2, 8], { 1: [2, 1] }),
      o($V2, [2, 4]),
      {
        7: 15,
        10: 26,
        12: 4,
        17: 16,
        23: $V3,
        25: $V4,
        27: $V5,
        29: $V6,
        30: $V7,
        31: $V8,
        49: $V1,
      },
      o($V2, [2, 6]),
      o($V2, [2, 7]),
      o($V2, [2, 11]),
      o($V2, [2, 15], {
        18: 27,
        40: 29,
        20: [1, 28],
        42: $Va,
        43: $Vb,
        44: $Vc,
        45: $Vd,
      }),
      { 24: [1, 34] },
      { 26: [1, 35] },
      { 28: [1, 36] },
      o($V2, [2, 19]),
      o($Ve, [2, 20]),
      o($Ve, [2, 21]),
      { 11: [1, 37] },
      { 16: 38, 51: [1, 39] },
      { 11: [2, 45] },
      o($V2, [2, 5]),
      { 17: 40, 30: $V7, 31: $V8 },
      { 21: 41, 22: [1, 42], 32: 43, 33: 44, 37: $Vf },
      { 41: 46, 46: [1, 47], 47: [1, 48] },
      o($Vg, [2, 33]),
      o($Vg, [2, 34]),
      o($Vg, [2, 35]),
      o($Vg, [2, 36]),
      o($V2, [2, 16]),
      o($V2, [2, 17]),
      o($V2, [2, 18]),
      o($Vh, [2, 9]),
      { 14: 49, 52: $V9 },
      { 52: [2, 44] },
      { 15: [1, 50] },
      { 22: [1, 51] },
      o($V2, [2, 14]),
      { 21: 52, 22: [2, 22], 32: 43, 33: 44, 37: $Vf },
      { 34: 53, 37: [1, 54] },
      { 37: [2, 28] },
      { 40: 55, 42: $Va, 43: $Vb, 44: $Vc, 45: $Vd },
      o($Vi, [2, 37]),
      o($Vi, [2, 38]),
      { 11: [1, 56] },
      { 19: 57, 30: [1, 60], 31: [1, 59], 48: [1, 58] },
      o($V2, [2, 13]),
      { 22: [2, 23] },
      o($Vj, [2, 24], { 35: 61, 36: 62, 38: [1, 63], 39: $Vk }),
      o([22, 37, 38, 39], [2, 29]),
      o([30, 31], [2, 32]),
      o($Vh, [2, 10]),
      o($V2, [2, 12]),
      o($V2, [2, 39]),
      o($V2, [2, 40]),
      o($V2, [2, 41]),
      o($Vj, [2, 25], { 36: 65, 39: $Vk }),
      o($Vj, [2, 26]),
      o([22, 37, 39], [2, 30]),
      o($Vj, [2, 31]),
      o($Vj, [2, 27]),
    ],
    defaultActions: {
      5: [2, 42],
      7: [2, 2],
      25: [2, 45],
      39: [2, 44],
      45: [2, 28],
      52: [2, 23],
    },
    parseError: function parseError(str, hash) {
      if (hash.recoverable) {
        this.trace(str);
      } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
      }
    },
    parse: function parse2(input) {
      var self2 = this,
        stack = [0],
        tstack = [],
        vstack = [null],
        lstack = [],
        table = this.table,
        yytext = "",
        yylineno = 0,
        yyleng = 0,
        TERROR = 2,
        EOF = 1;
      var args = lstack.slice.call(arguments, 1);
      var lexer2 = Object.create(this.lexer);
      var sharedState = { yy: {} };
      for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
          sharedState.yy[k] = this.yy[k];
        }
      }
      lexer2.setInput(input, sharedState.yy);
      sharedState.yy.lexer = lexer2;
      sharedState.yy.parser = this;
      if (typeof lexer2.yylloc == "undefined") {
        lexer2.yylloc = {};
      }
      var yyloc = lexer2.yylloc;
      lstack.push(yyloc);
      var ranges = lexer2.options && lexer2.options.ranges;
      if (typeof sharedState.yy.parseError === "function") {
        this.parseError = sharedState.yy.parseError;
      } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
      }
      function lex() {
        var token;
        token = tstack.pop() || lexer2.lex() || EOF;
        if (typeof token !== "number") {
          if (token instanceof Array) {
            tstack = token;
            token = tstack.pop();
          }
          token = self2.symbols_[token] || token;
        }
        return token;
      }
      var symbol,
        state,
        action,
        r,
        yyval = {},
        p,
        len,
        newState,
        expected;
      while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
          action = this.defaultActions[state];
        } else {
          if (symbol === null || typeof symbol == "undefined") {
            symbol = lex();
          }
          action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
          var errStr = "";
          expected = [];
          for (p in table[state]) {
            if (this.terminals_[p] && p > TERROR) {
              expected.push("'" + this.terminals_[p] + "'");
            }
          }
          if (lexer2.showPosition) {
            errStr =
              "Parse error on line " +
              (yylineno + 1) +
              ":\n" +
              lexer2.showPosition() +
              "\nExpecting " +
              expected.join(", ") +
              ", got '" +
              (this.terminals_[symbol] || symbol) +
              "'";
          } else {
            errStr =
              "Parse error on line " +
              (yylineno + 1) +
              ": Unexpected " +
              (symbol == EOF
                ? "end of input"
                : "'" + (this.terminals_[symbol] || symbol) + "'");
          }
          this.parseError(errStr, {
            text: lexer2.match,
            token: this.terminals_[symbol] || symbol,
            line: lexer2.yylineno,
            loc: yyloc,
            expected,
          });
        }
        if (action[0] instanceof Array && action.length > 1) {
          throw new Error(
            "Parse Error: multiple actions possible at state: " +
              state +
              ", token: " +
              symbol
          );
        }
        switch (action[0]) {
          case 1:
            stack.push(symbol);
            vstack.push(lexer2.yytext);
            lstack.push(lexer2.yylloc);
            stack.push(action[1]);
            symbol = null;
            {
              yyleng = lexer2.yyleng;
              yytext = lexer2.yytext;
              yylineno = lexer2.yylineno;
              yyloc = lexer2.yylloc;
            }
            break;
          case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
              first_line: lstack[lstack.length - (len || 1)].first_line,
              last_line: lstack[lstack.length - 1].last_line,
              first_column: lstack[lstack.length - (len || 1)].first_column,
              last_column: lstack[lstack.length - 1].last_column,
            };
            if (ranges) {
              yyval._$.range = [
                lstack[lstack.length - (len || 1)].range[0],
                lstack[lstack.length - 1].range[1],
              ];
            }
            r = this.performAction.apply(
              yyval,
              [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack,
              ].concat(args)
            );
            if (typeof r !== "undefined") {
              return r;
            }
            if (len) {
              stack = stack.slice(0, -1 * len * 2);
              vstack = vstack.slice(0, -1 * len);
              lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
          case 3:
            return true;
        }
      }
      return true;
    },
  };
  var lexer = (function () {
    var lexer2 = {
      EOF: 1,
      parseError: function parseError(str, hash) {
        if (this.yy.parser) {
          this.yy.parser.parseError(str, hash);
        } else {
          throw new Error(str);
        }
      },
      setInput: function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = "";
        this.conditionStack = ["INITIAL"];
        this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0,
        };
        if (this.options.ranges) {
          this.yylloc.range = [0, 0];
        }
        this.offset = 0;
        return this;
      },
      input: function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno++;
          this.yylloc.last_line++;
        } else {
          this.yylloc.last_column++;
        }
        if (this.options.ranges) {
          this.yylloc.range[1]++;
        }
        this._input = this._input.slice(1);
        return ch;
      },
      unput: function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);
        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (lines.length - 1) {
          this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: lines
            ? (lines.length === oldLines.length
                ? this.yylloc.first_column
                : 0) +
              oldLines[oldLines.length - lines.length].length -
              lines[0].length
            : this.yylloc.first_column - len,
        };
        if (this.options.ranges) {
          this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
      },
      more: function () {
        this._more = true;
        return this;
      },
      reject: function () {
        if (this.options.backtrack_lexer) {
          this._backtrack = true;
        } else {
          return this.parseError(
            "Lexical error on line " +
              (this.yylineno + 1) +
              ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" +
              this.showPosition(),
            {
              text: "",
              token: null,
              line: this.yylineno,
            }
          );
        }
        return this;
      },
      less: function (n) {
        this.unput(this.match.slice(n));
      },
      pastInput: function () {
        var past = this.matched.substr(
          0,
          this.matched.length - this.match.length
        );
        return (
          (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "")
        );
      },
      upcomingInput: function () {
        var next = this.match;
        if (next.length < 20) {
          next += this._input.substr(0, 20 - next.length);
        }
        return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(
          /\n/g,
          ""
        );
      },
      showPosition: function () {
        var pre = this.pastInput();
        var c2 = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c2 + "^";
      },
      test_match: function (match, indexed_rule) {
        var token, lines, backup;
        if (this.options.backtrack_lexer) {
          backup = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column,
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done,
          };
          if (this.options.ranges) {
            backup.yylloc.range = this.yylloc.range.slice(0);
          }
        }
        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno += lines.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: lines
            ? lines[lines.length - 1].length -
              lines[lines.length - 1].match(/\r?\n?/)[0].length
            : this.yylloc.last_column + match[0].length,
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
          this.yylloc.range = [this.offset, (this.offset += this.yyleng)];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(
          this,
          this.yy,
          this,
          indexed_rule,
          this.conditionStack[this.conditionStack.length - 1]
        );
        if (this.done && this._input) {
          this.done = false;
        }
        if (token) {
          return token;
        } else if (this._backtrack) {
          for (var k in backup) {
            this[k] = backup[k];
          }
          return false;
        }
        return false;
      },
      next: function () {
        if (this.done) {
          return this.EOF;
        }
        if (!this._input) {
          this.done = true;
        }
        var token, match, tempMatch, index;
        if (!this._more) {
          this.yytext = "";
          this.match = "";
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
          tempMatch = this._input.match(this.rules[rules[i]]);
          if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
            match = tempMatch;
            index = i;
            if (this.options.backtrack_lexer) {
              token = this.test_match(tempMatch, rules[i]);
              if (token !== false) {
                return token;
              } else if (this._backtrack) {
                match = false;
                continue;
              } else {
                return false;
              }
            } else if (!this.options.flex) {
              break;
            }
          }
        }
        if (match) {
          token = this.test_match(match, rules[index]);
          if (token !== false) {
            return token;
          }
          return false;
        }
        if (this._input === "") {
          return this.EOF;
        } else {
          return this.parseError(
            "Lexical error on line " +
              (this.yylineno + 1) +
              ". Unrecognized text.\n" +
              this.showPosition(),
            {
              text: "",
              token: null,
              line: this.yylineno,
            }
          );
        }
      },
      lex: function lex() {
        var r = this.next();
        if (r) {
          return r;
        } else {
          return this.lex();
        }
      },
      begin: function begin(condition) {
        this.conditionStack.push(condition);
      },
      popState: function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
          return this.conditionStack.pop();
        } else {
          return this.conditionStack[0];
        }
      },
      _currentRules: function _currentRules() {
        if (
          this.conditionStack.length &&
          this.conditionStack[this.conditionStack.length - 1]
        ) {
          return this.conditions[
            this.conditionStack[this.conditionStack.length - 1]
          ].rules;
        } else {
          return this.conditions["INITIAL"].rules;
        }
      },
      topState: function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
          return this.conditionStack[n];
        } else {
          return "INITIAL";
        }
      },
      pushState: function pushState(condition) {
        this.begin(condition);
      },
      stateStackSize: function stateStackSize() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": true },
      performAction: function anonymous(
        yy,
        yy_,
        $avoiding_name_collisions,
        YY_START
      ) {
        switch ($avoiding_name_collisions) {
          case 0:
            this.begin("acc_title");
            return 25;
          case 1:
            this.popState();
            return "acc_title_value";
          case 2:
            this.begin("acc_descr");
            return 27;
          case 3:
            this.popState();
            return "acc_descr_value";
          case 4:
            this.begin("acc_descr_multiline");
            break;
          case 5:
            this.popState();
            break;
          case 6:
            return "acc_descr_multiline_value";
          case 7:
            this.begin("open_directive");
            return 49;
          case 8:
            this.begin("type_directive");
            return 50;
          case 9:
            this.popState();
            this.begin("arg_directive");
            return 15;
          case 10:
            this.popState();
            this.popState();
            return 52;
          case 11:
            return 51;
          case 12:
            break;
          case 13:
            break;
          case 14:
            return 11;
          case 15:
            break;
          case 16:
            return 9;
          case 17:
            return 31;
          case 18:
            return 48;
          case 19:
            return 4;
          case 20:
            this.begin("block");
            return 20;
          case 21:
            break;
          case 22:
            return 38;
          case 23:
            return 37;
          case 24:
            return 37;
          case 25:
            return 39;
          case 26:
            break;
          case 27:
            this.popState();
            return 22;
          case 28:
            return yy_.yytext[0];
          case 29:
            return 42;
          case 30:
            return 43;
          case 31:
            return 44;
          case 32:
            return 45;
          case 33:
            return 42;
          case 34:
            return 43;
          case 35:
            return 44;
          case 36:
            return 46;
          case 37:
            return 47;
          case 38:
            return 46;
          case 39:
            return 46;
          case 40:
            return 30;
          case 41:
            return yy_.yytext[0];
          case 42:
            return 6;
        }
      },
      rules: [
        /^(?:accTitle\s*:\s*)/i,
        /^(?:(?!\n||)*[^\n]*)/i,
        /^(?:accDescr\s*:\s*)/i,
        /^(?:(?!\n||)*[^\n]*)/i,
        /^(?:accDescr\s*\{\s*)/i,
        /^(?:[\}])/i,
        /^(?:[^\}]*)/i,
        /^(?:%%\{)/i,
        /^(?:((?:(?!\}%%)[^:.])*))/i,
        /^(?::)/i,
        /^(?:\}%%)/i,
        /^(?:((?:(?!\}%%).|\n)*))/i,
        /^(?:%(?!\{)[^\n]*)/i,
        /^(?:[^\}]%%[^\n]*)/i,
        /^(?:[\n]+)/i,
        /^(?:\s+)/i,
        /^(?:[\s]+)/i,
        /^(?:"[^"%\r\n\v\b\\]+")/i,
        /^(?:"[^"]*")/i,
        /^(?:erDiagram\b)/i,
        /^(?:\{)/i,
        /^(?:\s+)/i,
        /^(?:\b((?:PK)|(?:FK))\b)/i,
        /^(?:(.*?)[~](.*?)*[~])/i,
        /^(?:[A-Za-z][A-Za-z0-9\-_\[\]]*)/i,
        /^(?:"[^"]*")/i,
        /^(?:[\n]+)/i,
        /^(?:\})/i,
        /^(?:.)/i,
        /^(?:\|o\b)/i,
        /^(?:\}o\b)/i,
        /^(?:\}\|)/i,
        /^(?:\|\|)/i,
        /^(?:o\|)/i,
        /^(?:o\{)/i,
        /^(?:\|\{)/i,
        /^(?:\.\.)/i,
        /^(?:--)/i,
        /^(?:\.-)/i,
        /^(?:-\.)/i,
        /^(?:[A-Za-z][A-Za-z0-9\-_]*)/i,
        /^(?:.)/i,
        /^(?:$)/i,
      ],
      conditions: {
        acc_descr_multiline: { rules: [5, 6], inclusive: false },
        acc_descr: { rules: [3], inclusive: false },
        acc_title: { rules: [1], inclusive: false },
        open_directive: { rules: [8], inclusive: false },
        type_directive: { rules: [9, 10], inclusive: false },
        arg_directive: { rules: [10, 11], inclusive: false },
        block: { rules: [21, 22, 23, 24, 25, 26, 27, 28], inclusive: false },
        INITIAL: {
          rules: [
            0, 2, 4, 7, 12, 13, 14, 15, 16, 17, 18, 19, 20, 29, 30, 31, 32, 33,
            34, 35, 36, 37, 38, 39, 40, 41, 42,
          ],
          inclusive: true,
        },
      },
    };
    return lexer2;
  })();
  parser2.lexer = lexer;
  function Parser() {
    this.yy = {};
  }
  Parser.prototype = parser2;
  parser2.Parser = Parser;
  return new Parser();
})();
parser$8.parser = parser$8;

export default {
    parser: parser$8
}