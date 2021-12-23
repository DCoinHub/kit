export enum Mode {
  FILTER = "FILTER",
  GENERATE = "GENERATE",
  HOTKEY = "HOTKEY",
  MANUAL = "MANUAL",
}

export enum Channel {
  APP_CONFIG = "APP_CONFIG",
  CHOICE_FOCUSED = "CHOICE_FOCUSED",
  CLEAR_CACHE = "CLEAR_CACHE",
  CLEAR_PROMPT_CACHE = "CLEAR_PROMPT_CACHE",
  CLEAR_CLIPBOARD_HISTORY = "CLEAR_CLIPBOARD_HISTORY",
  CONSOLE_CLEAR = "CONSOLE_CLEAR",
  CONSOLE_LOG = "CONSOLE_LOG",
  CONSOLE_WARN = "CONSOLE_WARN",
  CONTENT_HEIGHT_UPDATED = "CONTENT_HEIGHT_UPDATED",
  CONTENT_SIZE_UPDATED = "CONTENT_SIZE_UPDATED",
  COPY_PATH_AS_PICTURE = "COPY_PATH_AS_PICTURE",
  CREATE_KENV = "CREATE_KENV",
  DEV_TOOLS = "DEV_TOOLS",
  EDIT_SCRIPT = "EDIT_SCRIPT",
  ESCAPE_PRESSED = "ESCAPE_PRESSED",
  EXIT = "EXIT",
  FLAG_SUBMITTED = "FLAG_SUBMITTED",
  GENERATE_CHOICES = "GENERATE_CHOICES",
  GET_BACKGROUND = "GET_BACKGROUND",
  GET_BOUNDS = "GET_BOUNDS",
  GET_CLIPBOARD_HISTORY = "GET_CLIPBOARD_HISTORY",
  GET_MOUSE = "GET_MOUSE",
  GET_SCHEDULE = "GET_SCHEDULE",
  GET_SCREEN_INFO = "GET_SCREEN_INFO",
  GET_SCRIPTS_STATE = "GET_SCRIPTS_STATE",
  GET_SERVER_STATE = "GET_SERVER_STATE",
  GROW_PROMPT = "GROW_PROMPT",
  HIDE_APP = "HIDE_APP",
  KIT_LOG = "KIT_LOG",
  KIT_CLEAR = "KIT_CLEAR",
  KIT_WARN = "KIT_WARN",
  NEEDS_RESTART = "NEEDS_RESTART",
  OPEN_KIT_LOG = "OPEN_KIT_LOG",
  OPEN_FILE = "OPEN_FILE",
  OPEN_SCRIPT = "OPEN_SCRIPT",
  OPEN_SCRIPT_LOG = "OPEN_SCRIPT_LOG",
  PROMPT_BLURRED = "PROMPT_BLURRED",
  PROMPT_BOUNDS_UPDATED = "PROMPT_BOUNDS_UPDATED",
  PROMPT_ERROR = "PROMPT_ERROR",
  QUIT_APP = "QUIT_APP",
  RESET_PROMPT = "RESET_PROMPT",
  REMOVE_CLIPBOARD_HISTORY_ITEM = "REMOVE_CLIPBOARD_HISTORY_ITEM",
  RUN_SCRIPT = "RUN_SCRIPT",
  SEND_RESPONSE = "SEND_RESPONSE",
  SEND_KEYSTROKE = "SEND_KEYSTROKE",
  SET_BOUNDS = "SET_BOUNDS",
  SET_CHOICES = "SET_CHOICES",
  SET_DESCRIPTION = "SET_DESCRIPTION",
  SET_EDITOR_CONFIG = "SET_EDITOR_CONFIG",
  SET_FLAGS = "SET_FLAGS",
  SET_DIV_HTML = "SET_DIV_HTML",
  SET_FORM_HTML = "SET_FORM_HTML",
  SET_HINT = "SET_HINT",
  SET_IGNORE_BLUR = "SET_IGNORE_BLUR",
  SET_INPUT = "SET_INPUT",
  SET_LOADING = "SET_LOADING",
  SET_LOG = "SET_LOG",
  SET_LOGIN = "SET_LOGIN",
  SET_NAME = "SET_NAME",
  SET_MAIN_HEIGHT = "SET_MAIN_HEIGHT",
  SET_MAX_HEIGHT = "SET_MAX_HEIGHT",
  SET_MODE = "SET_MODE",
  SET_OPEN = "SET_OPEN",
  SET_PANEL = "SET_PANEL",
  SET_PID = "SET_PID",
  SET_PLACEHOLDER = "SET_PLACEHOLDER",
  SET_PREVIEW = "SET_PREVIEW",
  SET_PREVIEW_ENABLED = "SET_PREVIEW_ENABLED",
  SET_PROMPT_BOUNDS = "SET_PROMPT_BOUNDS",
  SET_PROMPT_DATA = "SET_PROMPT_DATA",
  SET_PROMPT_PROP = "SET_PROMPT_PROP",
  SET_READY = "SET_READY",
  SET_SCRIPT = "SET_SCRIPT",
  SET_SPLASH_BODY = "SET_SPLASH_BODY",
  SET_SPLASH_HEADER = "SET_SPLASH_HEADER",
  SET_SPLASH_PROGRESS = "SET_SPLASH_PROGRESS",
  SET_SUBMIT_VALUE = "SET_SUBMIT_VALUE",
  SET_TAB_INDEX = "SET_TAB_INDEX",
  SET_TEXTAREA_CONFIG = "SET_TEXTAREA_CONFIG",
  SET_TEXTAREA_VALUE = "SET_TEXTAREA_VALUE",
  SET_THEME = "SET_THEME",
  SET_TOP_HEIGHT = "SET_TOP_HEIGHT",
  SET_UNFILTERED_CHOICES = "SET_UNFILTERED_CHOICES",
  SHOW = "SHOW",
  SHOW_IMAGE = "SHOW_IMAGE",
  SHOW_NOTIFICATION = "SHOW_NOTIFICATION",
  SHOW_TEXT = "SHOW_TEXT",
  SHRINK_PROMPT = "SHRINK_PROMPT",
  SWITCH_KENV = "SWITCH_KENV",
  TAB_CHANGED = "TAB_CHANGED",
  TOGGLE_BACKGROUND = "TOGGLE_BACKGROUND",
  TOGGLE_TRAY = "TOGGLE_TRAY",
  UPDATE_APP = "UPDATE_APP",
  UPDATE_PROMPT_WARN = "UPDATE_PROMPT_WARN",
  USER_RESIZED = "USER_RESIZED",
  VALUE_SUBMITTED = "VALUE_SUBMITTED",
  VALUE_INVALID = "VALUE_INVALID",
  NO_CHOICES = "NO_CHOICES",
  CHOICES = "CHOICES",
}

export enum ProcessType {
  App = "App",
  Background = "Background",
  Prompt = "Prompt",
  Schedule = "Schedule",
  System = "System",
  Watch = "Watch",
}

export enum ErrorAction {
  Ask = "Ask",
  KitLog = "KitLog",
  Log = "Log",
  Open = "Open",
  CopySyncPath = "CopySyncPath",
}

export enum ProcessState {
  Active = "Active",
  Idle = "Idle",
}

export enum UI {
  none = 0,
  arg = 1 << 0,
  textarea = 1 << 1,
  hotkey = 1 << 2,
  drop = 1 << 3,
  editor = 1 << 4,
  form = 1 << 5,
  div = 1 << 6,
  log = 1 << 7,
  splash = 1 << 8,
}

export enum Bin {
  cli = "cli",
  scripts = "scripts",
}

export enum Secret {
  password = "password",
  text = "text",
}

export enum Value {
  NoValue = "__NoValue__",
}