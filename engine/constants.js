var constants = (function(exports){
  var create = require('./utility').create,
      define = require('./utility').define;

  function Constants(array){
    this.hash = create(null);
    for (var i=0; i < array.length; i++) {
      this.hash[array[i]] = i;
    }
    this.array = array;
  }

  define(Constants.prototype, [
    function getIndex(key){
      return this.hash[key];
    },
    function getKey(index){
      return this.array[index];
    }
  ]);



  function Symbol(name){
    this.name = name;
  }

  define(Symbol.prototype, [
    function toString(){
      return this.name;
    },
    function inspect(){
      return '['+this.name+']';
    }
  ]);


  function NativeBrand(name){
    this.name = name;
    this.brand = '[object '+name+']';
  }

  define(NativeBrand.prototype, [
    function toString(){
      return this.name;
    },
    function inspect(){
      return this.name;
    }
  ]);


  exports.BRANDS = {
    GlobalObject      : new NativeBrand('global'),
    NativeArguments   : new NativeBrand('Arguments'),
    NativeArray       : new NativeBrand('Array'),
    NativeDate        : new NativeBrand('Date'),
    NativeFunction    : new NativeBrand('Function'),
    NativeMap         : new NativeBrand('Map'),
    NativeObject      : new NativeBrand('Object'),
    NativePrivateName : new NativeBrand('PrivateName'),
    NativeRegExp      : new NativeBrand('RegExp'),
    NativeSet         : new NativeBrand('Set'),
    NativeWeakMap     : new NativeBrand('WeakMap'),
    BooleanWrapper    : new NativeBrand('Boolean'),
    NumberWrapper     : new NativeBrand('Number'),
    StringWrapper     : new NativeBrand('String'),
    NativeError       : new NativeBrand('Error'),
    NativeMath        : new NativeBrand('Math'),
    NativeJSON        : new NativeBrand('JSON'),
    StopIteration     : new NativeBrand('StopIteration')
  };


  exports.BINARYOPS = new Constants(['instanceof', 'in', 'is', 'isnt', '==', '!=', '===', '!==', '<', '>',
                                   '<=', '>=', '*', '/','%', '+', '-', '<<', '>>', '>>>', '|', '&', '^']);
  exports.UNARYOPS = new Constants(['delete', 'void', 'typeof', '+', '-', '~', '!']);
  exports.ENTRY = new Constants(['ENV', 'FINALLY', 'TRYCATCH' ]);
  exports.FUNCTYPE = new Constants(['NORMAL', 'METHOD', 'ARROW' ]);

  exports.SYMBOLS = {
    Break            : new Symbol('Break'),
    Pause            : new Symbol('Pause'),
    Throw            : new Symbol('Throw'),
    Empty            : new Symbol('Empty'),
    Resume           : new Symbol('Resume'),
    Return           : new Symbol('Return'),
    Abrupt           : new Symbol('Abrupt'),
    Native           : new Symbol('Native'),
    Continue         : new Symbol('Continue'),
    Reference        : new Symbol('Reference'),
    Completion       : new Symbol('Completion'),
    Uninitialized    : new Symbol('Uninitialized')
  };

  var E = 0x1,
      C = 0x2,
      W = 0x4,
      A = 0x8;

  exports.ATTRIBUTES = {
    ENUMERABLE  : E,
    CONFIGURABLE: C,
    WRITABLE    : W,
    ACCESSOR    : A,
    ___: 0,
    E__: E,
    _C_: C,
    EC_: E | C,
    __W: W,
    E_W: E | W,
    _CW: C | W,
    ECW: E | C | W,
    __A: A,
    E_A: E | A,
    _CA: C | A,
    ECA: E | C | A
  };

  exports.AST = new Constants(['ArrayExpression', 'ArrayPattern', 'ArrowFunctionExpression',
    'AssignmentExpression', 'BinaryExpression', 'BlockStatement', 'BreakStatement',
    'CatchClause', 'ClassBody', 'ClassDeclaration', 'ClassExpression', 'ClassHeritage',
    'ConditionalExpression', 'DebuggerStatement', 'DoWhileStatement', 'EmptyStatement',
    'ExportDeclaration', 'ExportSpecifier', 'ExportSpecifierSet', 'ExpressionStatement',
    'ForInStatement', 'ForOfStatement', 'ForStatement', 'FunctionDeclaration',
    'FunctionExpression', 'Glob', 'Identifier', 'IfStatement', 'ImportDeclaration',
    'ImportSpecifier', 'LabeledStatement', 'Literal', 'LogicalExpression', 'MemberExpression',
    'MethodDefinition', 'ModuleDeclaration', 'NewExpression', 'ObjectExpression', 'ObjectPattern',
    'Path', 'Program', 'Property', 'ReturnStatement', 'SequenceExpression', 'SwitchStatement',
    'TaggedTemplateExpression', 'TemplateElement', 'TemplateLiteral', 'ThisExpression',
    'ThrowStatement', 'TryStatement', 'UnaryExpression', 'UpdateExpression', 'VariableDeclaration',
    'VariableDeclarator', 'WhileStatement', 'WithStatement', 'YieldExpression']);





  return exports;
})(typeof module !== 'undefined' ? module.exports : {});
