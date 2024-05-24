import { NextRequest, NextResponse } from 'next/server';

let todos: string[] = [];

export async function GET(req: NextRequest) {
  return NextResponse.json(todos);
}

export async function POST(req: NextRequest) {
  const { todo } = await req.json();
  if (typeof todo === 'string') {
    todos.push(todo);
    return NextResponse.json(todo, { status: 201 });
  } else {
    return NextResponse.json({ error: 'Invalid todo' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  const { index } = await req.json();
  if (typeof index === 'number' && index >= 0 && index < todos.length) {
    todos.splice(index, 1);
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ error: 'Invalid index' }, { status: 400 });
  }
}
